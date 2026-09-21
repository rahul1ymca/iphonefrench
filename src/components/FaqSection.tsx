import React, { useState } from 'react';
import { ChevronDown, MessageSquare, Sparkles } from 'lucide-react';
import { FAQ_ITEMS } from '../data/blogContent';
import { Language } from '../types';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true, // Keep first open by default
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="faq" className="my-14 scroll-mt-24">
      <div className="text-center max-w-3xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200 mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{language === 'fr' ? 'Questions Fréquentes' : 'Frequently Asked Questions'}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
          {language === 'fr'
            ? 'FAQ iPhone : Réponses Claires & Conseils d’Experts'
            : 'iPhone FAQ: Clear Answers & Expert Advice'}
        </h2>
        <p className="text-sm text-neutral-600 mt-2">
          {language === 'fr'
            ? 'Retrouvez les réponses aux interrogations les plus posées par les utilisateurs avant de renouveler leur smartphone.'
            : 'Find answers to the most common questions users ask before upgrading their smartphone.'}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3.5">
        {FAQ_ITEMS.map((item) => {
          const isOpen = !!openItems[item.id];
          return (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-neutral-200/90 shadow-2xs overflow-hidden transition-all"
            >
              <button
                id={`faq-btn-${item.id}`}
                onClick={() => toggleItem(item.id)}
                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 hover:bg-neutral-50/70 transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-50 text-blue-600 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    ?
                  </span>
                  <div>
                    <span className="text-xs font-semibold text-neutral-400 block mb-1 uppercase tracking-wider">
                      {item.category[language]}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-neutral-900">
                      {item.question[language]}
                    </h3>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-blue-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100/80 bg-neutral-50/40">
                  <div className="pt-3">
                    {item.answer[language]}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
