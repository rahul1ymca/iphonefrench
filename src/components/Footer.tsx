import React from 'react';
import { ArrowUp, ShieldCheck, Calendar, UserCheck } from 'lucide-react';
import { ARTICLE_METADATA } from '../data/blogContent';
import { Language } from '../types';

interface FooterProps {
  language: Language;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onScrollToTop }) => {
  const seoKeywords = [
    'iphone comparatif',
    'quel iphone choisir 2026',
    'comparatif iphone 16 vs 15',
    'meilleur iphone qualité prix',
    'iphone 16 pro max avis',
    'test autonomie iphone 16',
    'guide achat apple',
    'fiche technique iphone 16 pro',
  ];

  return (
    <footer id="article-footer" className="mt-20 border-t border-neutral-200 bg-white">
      {/* Author & Editorial Bio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="bg-neutral-50 rounded-2xl p-6 sm:p-8 border border-neutral-200/70 flex flex-col sm:flex-row items-start sm:items-center gap-5 justify-between">
          <div className="flex items-center gap-4">
            <img
              src={ARTICLE_METADATA.author.avatar}
              alt={ARTICLE_METADATA.author.name}
              className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
              loading="lazy"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-neutral-900 text-base">
                  {ARTICLE_METADATA.author.name}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                  <UserCheck className="w-3 h-3" />
                  {language === 'fr' ? 'Auteur vérifié' : 'Verified Tech Editor'}
                </span>
              </div>
              <p className="text-xs text-neutral-500 mt-0.5">
                {ARTICLE_METADATA.author.role[language]}
              </p>
              <div className="flex items-center gap-3 text-xs text-neutral-400 mt-1">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {ARTICLE_METADATA.publishedDate[language]}
                </span>
                <span>•</span>
                <span>{ARTICLE_METADATA.readTime[language]}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-500 max-w-sm">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              {language === 'fr'
                ? 'Tests indépendants réalisés en laboratoire. Aucun lien d’affiliation n’altère notre jugement éditorial.'
                : 'Independent lab tests. Editorial reviews remain unbiased and free of promotional interference.'}
            </span>
          </div>
        </div>

        {/* SEO Keywords Cloud */}
        <div className="my-8 pt-6 border-t border-neutral-100">
          <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block mb-2.5">
            {language === 'fr' ? 'Mots-clés associés & Thématiques' : 'Related Search Keywords'}
          </span>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw, i) => (
              <span
                key={i}
                className="text-xs font-medium text-neutral-600 bg-neutral-100/80 hover:bg-neutral-200/70 px-2.5 py-1 rounded-lg transition-colors cursor-default"
              >
                #{kw}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright & Scroll to Top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-neutral-100 text-xs text-neutral-500">
          <p>
            © 2026 iPhone Comparatif France. {language === 'fr' ? 'Tous droits réservés. Apple et iPhone sont des marques déposées d’Apple Inc.' : 'All rights reserved. Apple and iPhone are registered trademarks of Apple Inc.'}
          </p>

          <button
            id="footer-back-to-top"
            onClick={onScrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-xl font-medium transition-colors cursor-pointer"
          >
            <span>{language === 'fr' ? 'Haut de page' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
