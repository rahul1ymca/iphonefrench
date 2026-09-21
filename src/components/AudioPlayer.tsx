import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Square, Volume2, Gauge, Check } from 'lucide-react';
import { Language } from '../types';

interface AudioPlayerProps {
  language: Language;
  contentToRead: string;
}

export const AudioPlayer: React.FC<AudioPlayerProps> = ({ language, contentToRead }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [playbackRate, setPlaybackRate] = useState<number>(1);
  const [isSupported, setIsSupported] = useState<boolean>(true);
  const [statusMessage, setStatusMessage] = useState<string>('');

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
      setIsSupported(false);
    }
  }, []);

  // Cancel speech on unmount or language change
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [language]);

  const handlePlay = () => {
    if (!('speechSynthesis' in window)) return;

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsPlaying(true);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(contentToRead);
    utterance.rate = playbackRate;
    utterance.lang = language === 'fr' ? 'fr-FR' : 'en-US';

    // Attempt to pick a natural voice for this language
    const voices = window.speechSynthesis.getVoices();
    const langPrefix = language === 'fr' ? 'fr' : 'en';
    const matchedVoice = voices.find((v) => v.lang.toLowerCase().startsWith(langPrefix));
    if (matchedVoice) {
      utterance.voice = matchedVoice;
    }

    utterance.onstart = () => {
      setIsPlaying(true);
      setIsPaused(false);
      setStatusMessage(language === 'fr' ? 'Lecture audio en cours...' : 'Audio reading in progress...');
    };

    utterance.onend = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setStatusMessage(language === 'fr' ? 'Lecture terminée' : 'Reading finished');
    };

    utterance.onerror = (e) => {
      console.warn('Speech synthesis error:', e);
      setIsPlaying(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
  };

  const handlePause = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.pause();
    setIsPaused(true);
    setIsPlaying(false);
    setStatusMessage(language === 'fr' ? 'Lecture en pause' : 'Audio paused');
  };

  const handleStop = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    setIsPlaying(false);
    setIsPaused(false);
    setStatusMessage('');
  };

  const changeRate = (rate: number) => {
    setPlaybackRate(rate);
    if (isPlaying && utteranceRef.current) {
      handleStop();
      setTimeout(() => {
        const utterance = new SpeechSynthesisUtterance(contentToRead);
        utterance.rate = rate;
        utterance.lang = language === 'fr' ? 'fr-FR' : 'en-US';
        utteranceRef.current = utterance;
        window.speechSynthesis.speak(utterance);
        setIsPlaying(true);
      }, 50);
    }
  };

  if (!isSupported) return null;

  return (
    <div
      id="audio-reader-bar"
      className="bg-neutral-900 text-white rounded-2xl p-4 sm:p-5 shadow-xl border border-neutral-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
          <Volume2 className={`w-5 h-5 ${isPlaying ? 'animate-pulse text-blue-300' : ''}`} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-blue-400">
              {language === 'fr' ? 'Version Audio (Web API)' : 'Audio Reader (Web API)'}
            </span>
            {isPlaying && (
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 animate-pulse">
                {language === 'fr' ? 'En direct' : 'Playing'}
              </span>
            )}
          </div>
          <p className="text-sm font-medium text-neutral-200">
            {language === 'fr'
              ? 'Écouter le résumé audio de ce comparatif'
              : 'Listen to the audio overview of this guide'}
          </p>
          {statusMessage && (
            <p className="text-xs text-neutral-400 mt-0.5">{statusMessage}</p>
          )}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-3 w-full md:w-auto justify-between md:justify-end flex-wrap">
        {/* Playback rate selector */}
        <div className="flex items-center bg-neutral-800/80 rounded-lg p-1 border border-neutral-700/60 text-xs text-neutral-300">
          <Gauge className="w-3.5 h-3.5 ml-1.5 mr-1 text-neutral-400" />
          {[1, 1.25, 1.5].map((rate) => (
            <button
              key={rate}
              id={`audio-rate-${rate}x`}
              onClick={() => changeRate(rate)}
              className={`px-2 py-1 rounded transition-colors font-medium ${
                playbackRate === rate
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'hover:text-white text-neutral-400'
              }`}
            >
              {rate}x
            </button>
          ))}
        </div>

        {/* Audio controls */}
        <div className="flex items-center gap-2">
          {!isPlaying ? (
            <button
              id="audio-play-button"
              onClick={handlePlay}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-medium transition-all shadow-md active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{isPaused ? (language === 'fr' ? 'Reprendre' : 'Resume') : (language === 'fr' ? 'Écouter' : 'Listen')}</span>
            </button>
          ) : (
            <button
              id="audio-pause-button"
              onClick={handlePause}
              className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-xl text-sm font-medium transition-all shadow-md active:scale-95"
            >
              <Pause className="w-4 h-4 fill-current" />
              <span>{language === 'fr' ? 'Pause' : 'Pause'}</span>
            </button>
          )}

          {(isPlaying || isPaused) && (
            <button
              id="audio-stop-button"
              onClick={handleStop}
              className="p-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-300 rounded-xl transition-all"
              title={language === 'fr' ? 'Arrêter la lecture' : 'Stop playback'}
            >
              <Square className="w-4 h-4 fill-current" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
