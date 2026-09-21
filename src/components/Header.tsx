import React from 'react';
import { Share2, Globe2, Sparkles, Volume2 } from 'lucide-react';
import { Language } from '../types';

interface HeaderProps {
  language: Language;
  onToggleLanguage: () => void;
  onOpenShare: () => void;
  onTriggerAudioScroll: () => void;
  scrollProgress: number;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onToggleLanguage,
  onOpenShare,
  onTriggerAudioScroll,
  scrollProgress,
}) => {
  return (
    <header
      id="main-header"
      className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-all"
    >
      {/* Top Edge Reading Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-100 overflow-hidden">
        <div
          id="top-edge-reading-bar"
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-neutral-900 group"
          id="brand-logo"
        >
          <div className="w-9 h-9 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-blue-600 transition-colors">
            
          </div>
          <div>
            <span className="font-extrabold tracking-tight text-lg text-neutral-900">
              iPhone <span className="text-blue-600">Comparatif</span>
            </span>
            <span className="hidden sm:inline-block ml-2 px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
              2026 Edition
            </span>
          </div>
        </a>

        {/* Action Controls: Audio trigger, Share Button, Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Audio trigger */}
          <button
            id="header-audio-shortcut"
            onClick={onTriggerAudioScroll}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
            title={language === 'fr' ? "Écouter l'article" : 'Listen to article'}
          >
            <Volume2 className="w-3.5 h-3.5 text-blue-600" />
            <span>{language === 'fr' ? 'Écouter' : 'Listen'}</span>
          </button>

          {/* Social Share Button */}
          <button
            id="header-share-button"
            onClick={onOpenShare}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-neutral-700 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-900 rounded-lg transition-colors active:scale-95"
            aria-label={language === 'fr' ? "Partager l'article" : 'Share article'}
          >
            <Share2 className="w-3.5 h-3.5 text-neutral-600" />
            <span className="hidden xs:inline">{language === 'fr' ? 'Partager' : 'Share'}</span>
          </button>

          {/* Language Switcher Button (FR ⟷ EN) */}
          <button
            id="header-language-toggle"
            onClick={onToggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-300 bg-white hover:bg-neutral-50 text-neutral-800 text-xs font-semibold shadow-xs transition-all active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
            title={
              language === 'fr'
                ? 'Basculer en Anglais (Switch to English)'
                : 'Changer en Français (Switch to French)'
            }
          >
            <Globe2 className="w-3.5 h-3.5 text-blue-600" />
            <span className="tracking-wide">
              {language === 'fr' ? (
                <span>
                  <strong className="text-blue-600">FR</strong> / EN
                </span>
              ) : (
                <span>
                  FR / <strong className="text-blue-600">EN</strong>
                </span>
              )}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
