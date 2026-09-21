import React, { useState } from 'react';
import { X, Copy, Check, Share2, MessageCircle, Send } from 'lucide-react';
import { Language } from '../types';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  language: Language;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose, language }) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!isOpen) return null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://apple-iphone-comparatif.fr';
  const shareTitle =
    language === 'fr'
      ? 'iPhone Comparatif 2026 : Quel iPhone Choisir ? Le Guide Ultime'
      : 'iPhone Comparison 2026: Which iPhone Should You Buy? Ultimate Guide';

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(currentUrl);
      } else {
        const input = document.createElement('input');
        input.value = currentUrl;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.warn('Copy failed:', err);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text:
            language === 'fr'
              ? 'Découvrez ce comparatif complet des iPhone en 2026 avec fiches détaillées et quiz interactif !'
              : 'Check out this comprehensive 2026 iPhone comparison guide with specs and interactive quiz!',
          url: currentUrl,
        });
        onClose();
      } catch {
        // User canceled share
      }
    }
  };

  const shareLinks = [
    {
      name: 'WhatsApp',
      color: 'bg-emerald-600 hover:bg-emerald-700 text-white',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareTitle} - ${currentUrl}`)}`,
      icon: <MessageCircle className="w-4 h-4" />,
    },
    {
      name: 'X (Twitter)',
      color: 'bg-neutral-900 hover:bg-black text-white',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(currentUrl)}`,
      icon: <span className="font-bold text-xs">𝕏</span>,
    },
    {
      name: 'LinkedIn',
      color: 'bg-blue-700 hover:bg-blue-800 text-white',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
      icon: <span className="font-bold text-xs">in</span>,
    },
    {
      name: 'Facebook',
      color: 'bg-blue-600 hover:bg-blue-700 text-white',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
      icon: <span className="font-bold text-xs">f</span>,
    },
  ];

  return (
    <div
      id="share-modal-backdrop"
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        id="share-modal-dialog"
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-neutral-100 relative animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          id="share-modal-close"
          onClick={onClose}
          className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-700 p-1.5 rounded-lg hover:bg-neutral-100 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
            <Share2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-neutral-900">
              {language === 'fr' ? 'Partager ce comparatif' : 'Share this guide'}
            </h3>
            <p className="text-xs text-neutral-500">
              {language === 'fr'
                ? 'Aidez un ami ou un proche à choisir son iPhone'
                : 'Help a friend or family member pick their ideal iPhone'}
            </p>
          </div>
        </div>

        {/* Copy Link Input */}
        <div className="mb-5">
          <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
            {language === 'fr' ? 'Lien de l’article' : 'Article link'}
          </label>
          <div className="flex items-center gap-2">
            <input
              type="text"
              readOnly
              value={currentUrl}
              className="flex-1 text-xs bg-neutral-50 border border-neutral-200 rounded-xl px-3 py-2.5 text-neutral-600 truncate focus:outline-none"
            />
            <button
              id="copy-link-btn"
              onClick={copyToClipboard}
              className="flex items-center gap-1.5 px-3 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl text-xs font-semibold transition-all shrink-0 active:scale-95"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{language === 'fr' ? 'Copié !' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>{language === 'fr' ? 'Copier' : 'Copy'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold transition-transform active:scale-95 ${item.color}`}
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </div>

        {/* Native share if available */}
        {typeof navigator !== 'undefined' && typeof navigator.share === 'function' && (
          <button
            id="native-share-trigger"
            onClick={handleNativeShare}
            className="w-full py-2.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <Send className="w-3.5 h-3.5" />
            <span>
              {language === 'fr' ? 'Options de partage mobile' : 'Device share options'}
            </span>
          </button>
        )}
      </div>
    </div>
  );
};
