import React from 'react';
import { Sliders, Lightbulb, Check, Sparkles } from 'lucide-react';
import { BUYING_CRITERIA } from '../data/blogContent';
import { Language } from '../types';

interface BuyerCriteriaGuideProps {
  language: Language;
}

export const BuyerCriteriaGuide: React.FC<BuyerCriteriaGuideProps> = ({ language }) => {
  return (
    <section id="criteres-choix" className="my-14 scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200 mb-2">
          <Sliders className="w-3.5 h-3.5" />
          <span>{language === 'fr' ? 'Guide d’Achat Pratique' : 'Practical Buying Guide'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          {language === 'fr'
            ? 'Les 5 Critères Déterminants pour Bien Choisir Votre iPhone'
            : '5 Decisive Factors When Choosing Your iPhone'}
        </h2>
        <p className="text-sm text-neutral-600 mt-2">
          {language === 'fr'
            ? 'Ne payez pas pour des fonctionnalités dont vous n’avez pas l’utilité. Voici comment évaluer chaque composant selon vos besoins réels.'
            : 'Do not overpay for features you will never use. Here is how to evaluate each spec based on your actual lifestyle.'}
        </p>
      </div>

      <div className="space-y-6">
        {BUYING_CRITERIA.map((criterion, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-neutral-200/90 p-6 sm:p-7 shadow-xs hover:border-neutral-300 transition-all"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 flex items-center gap-2.5">
                <span className="w-7 h-7 rounded-lg bg-neutral-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                  {index + 1}
                </span>
                <span>{criterion.title[language]}</span>
              </h3>
              <span className="inline-flex items-center text-xs font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-100 self-start sm:self-auto">
                {criterion.badge[language]}
              </span>
            </div>

            <p className="text-sm text-neutral-700 leading-relaxed">
              {criterion.description[language]}
            </p>

            <div className="mt-4 pt-3 border-t border-neutral-100 flex items-start gap-2.5 text-xs text-neutral-600 bg-amber-50/50 p-3 rounded-xl border border-amber-100/60">
              <Lightbulb className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span className="font-medium text-amber-950">
                {criterion.tip[language]}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
