import React from 'react';
import {
  CheckCircle2,
  XCircle,
  Cpu,
  Camera,
  Battery,
  Layers,
  Sparkles,
  Zap,
  Target,
  Quote,
} from 'lucide-react';
import { IPhoneModel, Language } from '../types';

interface PhoneDetailCardProps {
  phone: IPhoneModel;
  language: Language;
}

export const PhoneDetailCard: React.FC<PhoneDetailCardProps> = ({ phone, language }) => {
  return (
    <article
      id={phone.id}
      className="bg-white rounded-3xl border border-neutral-200/90 p-6 sm:p-8 shadow-sm hover:shadow-md transition-all scroll-mt-24 mb-10"
    >
      {/* Top Badge & Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5" />
          {phone.badge[language]}
        </span>
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-neutral-500">
            {language === 'fr' ? `Millésime ${phone.releaseYear}` : `Released ${phone.releaseYear}`}
          </span>
          <div className="flex items-center gap-1 bg-amber-50 border border-amber-200/80 px-2.5 py-1 rounded-full text-xs font-bold text-amber-900">
            <span>★</span>
            <span>{phone.overallScore}/10</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Image, Colors & Pricing */}
        <div className="lg:col-span-4 flex flex-col items-center text-center bg-neutral-50/70 p-6 rounded-2xl border border-neutral-100">
          <div className="relative w-full max-w-[240px] aspect-4/5 mb-4 flex items-center justify-center">
            <img
              src={phone.image}
              alt={`${phone.name} - ${phone.tagline[language]}`}
              className="max-h-full object-contain drop-shadow-lg rounded-xl transition-transform hover:scale-105 duration-300"
              loading="lazy"
            />
          </div>

          <div className="w-full">
            <div className="text-2xl font-black text-neutral-900 tracking-tight">
              {language === 'fr' ? `Dès ${phone.priceFrom} €` : `From €${phone.priceFrom}`}
            </div>
            <p className="text-xs text-neutral-500 mt-0.5">
              {language === 'fr' ? 'Prix indicatif Apple France TTC' : 'Suggested Apple France Retail Price'}
            </p>

            {/* Colors */}
            <div className="mt-4 pt-4 border-t border-neutral-200/60 w-full">
              <span className="text-xs font-semibold text-neutral-600 block mb-2">
                {language === 'fr' ? 'Coloris disponibles :' : 'Available Finishes:'}
              </span>
              <div className="flex items-center justify-center gap-2 flex-wrap">
                {phone.colorOptions.map((color, idx) => (
                  <div
                    key={idx}
                    className="group relative flex flex-col items-center"
                    title={color.name[language]}
                  >
                    <span
                      className="w-5 h-5 rounded-full border border-black/15 shadow-2xs block"
                      style={{ backgroundColor: color.hex }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Specs, Strengths & Weaknesses */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
              {phone.name}
            </h3>
            <p className="text-base text-neutral-600 mt-1 font-medium">
              {phone.tagline[language]}
            </p>

            {/* Core Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-5">
              <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-1">
                  <Layers className="w-3.5 h-3.5 text-blue-600" />
                  <span>{language === 'fr' ? 'Écran' : 'Display'}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  {phone.specs.screenSize}
                </div>
                <div className="text-[11px] text-blue-600 font-semibold mt-0.5">
                  {phone.specs.refreshRate}
                </div>
              </div>

              <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-1">
                  <Cpu className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{language === 'fr' ? 'Puce & IA' : 'Chip & AI'}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  {phone.specs.processor.split('(')[0]}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {phone.specs.appleIntelligence ? 'Apple Intelligence' : 'Standard iOS'}
                </div>
              </div>

              <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-1">
                  <Camera className="w-3.5 h-3.5 text-purple-600" />
                  <span>{language === 'fr' ? 'Modules Photo' : 'Cameras'}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  {phone.specs.cameraMain.split('(')[0]}
                </div>
                <div className="text-[11px] text-purple-700 font-semibold truncate">
                  {phone.specs.cameraTele}
                </div>
              </div>

              <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-1">
                  <Battery className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'fr' ? 'Autonomie' : 'Battery'}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug truncate">
                  {phone.specs.batteryLife.replace("Jusqu'à ", "")}
                </div>
              </div>

              <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-1">
                  <Zap className="w-3.5 h-3.5 text-amber-600" />
                  <span>{language === 'fr' ? 'Boutons' : 'Keys'}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  {phone.specs.cameraControl ? 'Commande Photo' : 'Classique'}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {phone.specs.actionButton ? '+ Bouton Action' : ''}
                </div>
              </div>

              <div className="bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                <div className="flex items-center gap-1.5 text-xs text-neutral-500 font-medium mb-1">
                  <Target className="w-3.5 h-3.5 text-cyan-600" />
                  <span>{language === 'fr' ? 'Poids & Port' : 'Weight & Port'}</span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">
                  {phone.specs.weight}
                </div>
                <div className="text-[11px] text-neutral-500">
                  {phone.specs.connector}
                </div>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
              {/* Strengths */}
              <div className="bg-emerald-50/60 rounded-2xl p-4 border border-emerald-100">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  {language === 'fr' ? 'Points Forts' : 'Strengths'}
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                  {phone.strengths[language].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Weaknesses */}
              <div className="bg-rose-50/50 rounded-2xl p-4 border border-rose-100">
                <span className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5 mb-2.5">
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                  {language === 'fr' ? 'Points Faibles' : 'Weaknesses'}
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-neutral-800">
                  {phone.weaknesses[language].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Verdict Box */}
            <div className="bg-neutral-900 text-white rounded-2xl p-4 sm:p-5 relative mt-4 shadow-sm">
              <Quote className="w-5 h-5 text-neutral-600 mb-1" />
              <p className="text-xs sm:text-sm text-neutral-200 font-medium italic leading-relaxed">
                « {phone.editorialVerdict[language]} »
              </p>
              <div className="mt-3 pt-3 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                <span className="font-semibold text-neutral-300">
                  {language === 'fr' ? 'Profil recommandé :' : 'Ideal for:'}
                </span>
                <span className="text-blue-400 font-medium text-right ml-2">
                  {phone.targetAudience[language]}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
