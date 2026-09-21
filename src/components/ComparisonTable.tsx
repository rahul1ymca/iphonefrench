import React, { useState } from 'react';
import { Check, X, Sparkles, Filter, ChevronRight, ArrowDown } from 'lucide-react';
import { IPhoneModel, Language } from '../types';

interface ComparisonTableProps {
  iphones: IPhoneModel[];
  language: Language;
  onSelectModel: (id: string) => void;
}

export const ComparisonTable: React.FC<ComparisonTableProps> = ({
  iphones,
  language,
  onSelectModel,
}) => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'pro' | 'standard' | 'budget'>('all');

  const filteredIphones = iphones.filter((phone) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'budget') return phone.priceFrom < 850;
    return phone.category === filterCategory;
  });

  return (
    <section id="tableau-comparatif" className="my-12 scroll-mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Spécifications & Tarifs 2026' : 'Specs & Pricing 2026'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
            {language === 'fr'
              ? 'Grand Tableau Comparatif de la Gamme Apple'
              : 'Comprehensive Apple Lineup Comparison Table'}
          </h2>
          <p className="text-sm text-neutral-600 mt-1 max-w-2xl">
            {language === 'fr'
              ? 'Comparez les caractéristiques techniques, performances photo, autonomie et prix en euros pour faire le bon choix.'
              : 'Compare technical specs, camera capabilities, battery endurance, and pricing in euros.'}
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-1.5 p-1 bg-neutral-100 rounded-xl overflow-x-auto text-xs font-semibold shrink-0">
          <Filter className="w-3.5 h-3.5 ml-2 text-neutral-500 hidden sm:inline" />
          {[
            { id: 'all', fr: 'Tous (6)', en: 'All (6)' },
            { id: 'pro', fr: 'Gamme Pro', en: 'Pro Models' },
            { id: 'standard', fr: 'Standards (16 & Plus)', en: 'Standard (16 & Plus)' },
            { id: 'budget', fr: '< 850 €', en: '< €850' },
          ].map((tab) => (
            <button
              key={tab.id}
              id={`filter-btn-${tab.id}`}
              onClick={() => setFilterCategory(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                filterCategory === tab.id
                  ? 'bg-white text-neutral-900 shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {tab[language]}
            </button>
          ))}
        </div>
      </div>

      {/* Comparison Table with clean horizontal scroll */}
      <div className="bg-white rounded-2xl border border-neutral-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[760px]">
            <thead>
              <tr className="bg-neutral-50/80 border-b border-neutral-200 text-xs text-neutral-500 uppercase font-semibold">
                <th className="p-4 w-48 sticky left-0 bg-neutral-50 z-10 shadow-r">
                  {language === 'fr' ? 'Modèle' : 'Model'}
                </th>
                {filteredIphones.map((phone) => (
                  <th key={phone.id} className="p-4 text-center min-w-[170px]">
                    <div className="flex flex-col items-center">
                      <img
                        src={phone.image}
                        alt={phone.name}
                        className="w-16 h-20 object-contain rounded-md mb-2 mix-blend-multiply"
                        loading="lazy"
                      />
                      <span className="font-bold text-sm text-neutral-900">{phone.name}</span>
                      <span className="text-[11px] font-semibold text-blue-600 mt-0.5">
                        {language === 'fr' ? `Dès ${phone.priceFrom} €` : `From €${phone.priceFrom}`}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-neutral-100">
              {/* Note Rédaction */}
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-white z-10">
                  {language === 'fr' ? 'Note Globale' : 'Editorial Score'}
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      ★ {phone.overallScore}/10
                    </span>
                  </td>
                ))}
              </tr>

              {/* Écran & Taille */}
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-white z-10">
                  {language === 'fr' ? 'Taille & Dalle' : 'Display & Size'}
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center text-xs text-neutral-800">
                    <strong className="block text-sm font-bold text-neutral-900">
                      {phone.specs.screenSize.split(' ')[0]}
                    </strong>
                    <span className="text-neutral-500">{phone.specs.screenSize.split(' ').slice(1).join(' ')}</span>
                  </td>
                ))}
              </tr>

              {/* Taux de rafraîchissement */}
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-white z-10">
                  {language === 'fr' ? 'Rafraîchissement' : 'Refresh Rate'}
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center">
                    {phone.specs.refreshRate.includes('120') ? (
                      <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-bold bg-purple-50 text-purple-700 border border-purple-200">
                        120 Hz ProMotion
                      </span>
                    ) : (
                      <span className="text-xs text-neutral-500">60 Hz</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Processeur */}
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-white z-10">
                  {language === 'fr' ? 'Puce Apple' : 'Apple Silicon'}
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center text-xs font-semibold text-neutral-800">
                    {phone.specs.processor.split('(')[0].trim()}
                  </td>
                ))}
              </tr>

              {/* Apple Intelligence */}
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-white z-10">
                  Apple Intelligence
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center">
                    {phone.specs.appleIntelligence ? (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                        <Check className="w-3.5 h-3.5" /> Oui
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs text-neutral-400">
                        <X className="w-3.5 h-3.5" /> Non
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Photo & Zoom */}
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-white z-10">
                  {language === 'fr' ? 'Zoom Optique' : 'Optical Zoom'}
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center text-xs">
                    {phone.specs.cameraTele.includes('5x') ? (
                      <span className="font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                        5x Optique (120mm)
                      </span>
                    ) : phone.specs.cameraTele.includes('2x') ? (
                      <span className="text-neutral-700 font-medium">2x par recadrage</span>
                    ) : (
                      <span className="text-neutral-400">1x numérique</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Bouton Commande Photo */}
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-white z-10">
                  {language === 'fr' ? 'Commande Photo' : 'Camera Control'}
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center">
                    {phone.specs.cameraControl ? (
                      <span className="inline-flex items-center text-xs font-semibold text-emerald-600">
                        <Check className="w-4 h-4 mr-0.5" /> {language === 'fr' ? 'Présent' : 'Included'}
                      </span>
                    ) : (
                      <span className="text-xs text-neutral-400">—</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Autonomie */}
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-white z-10">
                  {language === 'fr' ? 'Autonomie Vidéo' : 'Video Playback'}
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center text-xs font-bold text-neutral-900">
                    {phone.specs.batteryLife.replace("Jusqu'à ", "").replace("Up to ", "")}
                  </td>
                ))}
              </tr>

              {/* Connecteur */}
              <tr className="hover:bg-neutral-50/50 transition-colors">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-white z-10">
                  {language === 'fr' ? 'Connectique' : 'Connector'}
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center text-xs text-neutral-600">
                    {phone.specs.connector}
                  </td>
                ))}
              </tr>

              {/* CTA jump to details */}
              <tr className="bg-neutral-50/50">
                <td className="p-3.5 font-medium text-neutral-700 sticky left-0 bg-neutral-50 z-10">
                  {language === 'fr' ? 'Fiche Détaillée' : 'Full Review'}
                </td>
                {filteredIphones.map((phone) => (
                  <td key={phone.id} className="p-3.5 text-center">
                    <button
                      id={`jump-detail-${phone.id}`}
                      onClick={() => onSelectModel(phone.id)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
                    >
                      <span>{language === 'fr' ? 'Voir le test' : 'Read review'}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
