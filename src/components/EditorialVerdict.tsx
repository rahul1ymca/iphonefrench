import React from 'react';
import { Award, Check, AlertCircle, ShoppingCart, Sparkles, ChevronRight } from 'lucide-react';
import { Language } from '../types';

interface EditorialVerdictProps {
  language: Language;
  onSelectModel: (id: string) => void;
}

export const EditorialVerdict: React.FC<EditorialVerdictProps> = ({
  language,
  onSelectModel,
}) => {
  const recommendations = [
    {
      profile: { fr: 'Le Choix N°1 Sans Prise de Tête', en: '#1 No-Brainer Pick' },
      phoneId: 'iphone-16',
      name: 'iPhone 16 (969 €)',
      summary: {
        fr: 'Le compromis parfait pour 90% des utilisateurs : puce A18 compatible IA, bouton Action et Commande photo.',
        en: 'The sweet spot for 90% of buyers: AI-ready A18 silicon, Action button, and Camera Control.',
      },
      tag: { fr: 'Recommandation Maîtresse', en: 'Editor’s Main Pick' },
      tagColor: 'bg-blue-600 text-white',
    },
    {
      profile: { fr: 'Le Summum de la Technologie & Photo', en: 'Pinnacle of Tech & Photography' },
      phoneId: 'iphone-16-pro',
      name: 'iPhone 16 Pro (1 229 €)',
      summary: {
        fr: 'Écran ProMotion 120 Hz, zoom 5x périscopique et boîtier titane dans une diagonale maniable de 6,3 pouces.',
        en: '120Hz ProMotion screen, 5x telephoto zoom, and titanium build in a practical 6.3" chassis.',
      },
      tag: { fr: 'Pour les Exigeants', en: 'For Power Users' },
      tagColor: 'bg-purple-600 text-white',
    },
    {
      profile: { fr: 'Le Marathonien de la Batterie', en: 'Battery Endurance Champion' },
      phoneId: 'iphone-16-plus',
      name: 'iPhone 16 Plus (1 119 €)',
      summary: {
        fr: 'Grand écran de 6,7 pouces et autonomie monstre de près de 2 jours complets sans le tarif Pro.',
        en: 'Spacious 6.7-inch canvas and a monstrous 2-day battery without paying flagship Pro prices.',
      },
      tag: { fr: 'Autonomie Record', en: 'Max Battery' },
      tagColor: 'bg-emerald-600 text-white',
    },
    {
      profile: { fr: 'Le Meilleur Bon Plan sous 800 €', en: 'Best Value Under €800' },
      phoneId: 'iphone-15',
      name: 'iPhone 15 (799 €)',
      summary: {
        fr: 'Dynamic Island, connecteur universel USB-C et capteur 48 Mpx à un tarif considérablement adouci.',
        en: 'Dynamic Island, universal USB-C, and sharp 48MP optics at a significantly friendlier price.',
      },
      tag: { fr: 'Économique & Malin', en: 'Smart Budget' },
      tagColor: 'bg-amber-600 text-white',
    },
  ];

  return (
    <section id="verdict" className="my-14 scroll-mt-24">
      <div className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-10 shadow-sm">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Bilan de la Rédaction' : 'Editorial Verdict'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            {language === 'fr'
              ? 'Quel iPhone Choisir en 2026 selon Votre Profil ?'
              : 'Which iPhone Should You Buy in 2026?'}
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            {language === 'fr'
              ? 'Voici notre sélection finale pour vous aider à finaliser votre commande en toute sérénité.'
              : 'Here is our final selection matrix to help you finalize your choice with confidence.'}
          </p>
        </div>

        {/* Profile Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {recommendations.map((rec) => (
            <div
              key={rec.phoneId}
              className="p-5 rounded-2xl border border-neutral-200 bg-neutral-50/50 hover:bg-neutral-50 hover:border-neutral-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${rec.tagColor}`}>
                    {rec.tag[language]}
                  </span>
                  <span className="text-xs font-semibold text-neutral-500">
                    {rec.profile[language]}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900">{rec.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1.5 leading-relaxed">
                  {rec.summary[language]}
                </p>
              </div>

              <button
                id={`verdict-btn-${rec.phoneId}`}
                onClick={() => onSelectModel(rec.phoneId)}
                className="mt-4 pt-3 border-t border-neutral-200/80 flex items-center justify-between text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <span>{language === 'fr' ? 'Consulter la fiche détaillée' : 'View Full Details'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Buying Checklist */}
        <div className="bg-neutral-900 text-white rounded-2xl p-6 sm:p-7">
          <h3 className="text-base sm:text-lg font-bold flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-amber-400" />
            <span>
              {language === 'fr'
                ? 'La checklist avant de valider votre achat'
                : 'Pre-purchase checklist before ordering'}
            </span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-neutral-300">
            <div className="bg-neutral-800/80 p-3.5 rounded-xl border border-neutral-700/60">
              <strong className="block text-white font-semibold text-sm mb-1">
                {language === 'fr' ? '1. Stockage minimal' : '1. Minimum Storage'}
              </strong>
              <span>
                {language === 'fr'
                  ? 'Privilégiez 256 Go si vous capturez des vidéos en 4K ou jouez à des titres volumineux.'
                  : 'Opt for 256GB if you shoot 4K footage or install modern gaming apps.'}
              </span>
            </div>

            <div className="bg-neutral-800/80 p-3.5 rounded-xl border border-neutral-700/60">
              <strong className="block text-white font-semibold text-sm mb-1">
                {language === 'fr' ? '2. Reprise ancien modèle' : '2. Trade-in value'}
              </strong>
              <span>
                {language === 'fr'
                  ? 'Estimez la valeur de reprise de votre ancien smartphone (Apple Trade In ou reconditionneur) pour réduire l’addition.'
                  : 'Check trade-in values for your current handset to reduce the final cash outlay.'}
              </span>
            </div>

            <div className="bg-neutral-800/80 p-3.5 rounded-xl border border-neutral-700/60">
              <strong className="block text-white font-semibold text-sm mb-1">
                {language === 'fr' ? '3. Accessoires USB-C' : '3. USB-C Accessories'}
              </strong>
              <span>
                {language === 'fr'
                  ? 'N’oubliez pas qu’aucun chargeur mural n’est fourni dans la boîte, uniquement le câble tressé.'
                  : 'Remember wall chargers are omitted from the box; only the braided USB-C cable is supplied.'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
