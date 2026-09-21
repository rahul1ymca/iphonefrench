import React, { useState } from 'react';
import { HelpCircle, Check, ArrowRight, RotateCcw, Sparkles, Trophy } from 'lucide-react';
import { QUIZ_DATA } from '../data/blogContent';
import { IPHONES_DATA } from '../data/iphones';
import { Language } from '../types';

interface BuyerQuizProps {
  language: Language;
  onSelectModel: (id: string) => void;
}

export const BuyerQuiz: React.FC<BuyerQuizProps> = ({ language, onSelectModel }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [recommendedId, setRecommendedId] = useState<string | null>(null);

  const handleSelectOption = (recommendationId: string) => {
    const updated = { ...selectedAnswers, [currentStep]: recommendationId };
    setSelectedAnswers(updated);

    if (currentStep < QUIZ_DATA.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate winner
      // Count recommendations from answers
      const counts: Record<string, number> = {};
      Object.values(updated).forEach((id) => {
        counts[id] = (counts[id] || 0) + 1;
      });

      // Find recommendation with most points, fallback to latest answer
      let bestId = recommendationId;
      let maxScore = 0;
      Object.entries(counts).forEach(([id, score]) => {
        if (score > maxScore) {
          maxScore = score;
          bestId = id;
        }
      });

      setRecommendedId(bestId);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setRecommendedId(null);
  };

  const recommendedPhone = IPHONES_DATA.find((p) => p.id === recommendedId);

  return (
    <section id="simulateur-quiz" className="my-14 scroll-mt-24">
      <div className="bg-gradient-to-br from-neutral-900 via-neutral-850 to-neutral-900 text-white rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-xl relative overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/30 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Simulateur d’Achat Express' : 'Smart Buyer Matcher'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {language === 'fr'
              ? 'Quel iPhone est fait pour vous en 3 clics ?'
              : 'Which iPhone fits your lifestyle in 3 clicks?'}
          </h2>
          <p className="text-neutral-400 text-sm mt-2">
            {language === 'fr'
              ? 'Répondez à 3 questions rapides sur vos habitudes et obtenez une recommandation sur-mesure et impartiale.'
              : 'Answer 3 fast lifestyle questions to get an unbiased and personalized recommendation.'}
          </p>
        </div>

        {!recommendedPhone ? (
          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Step progress dots */}
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                {language === 'fr'
                  ? `Question ${currentStep + 1} sur ${QUIZ_DATA.length}`
                  : `Question ${currentStep + 1} of ${QUIZ_DATA.length}`}
              </span>
              <div className="flex items-center gap-1.5">
                {QUIZ_DATA.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === currentStep
                        ? 'w-6 bg-blue-500'
                        : idx < currentStep
                        ? 'w-3 bg-emerald-500'
                        : 'w-3 bg-neutral-700'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Current Question */}
            <div className="bg-neutral-800/80 backdrop-blur-sm border border-neutral-700/80 rounded-2xl p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
                {QUIZ_DATA[currentStep].title[language]}
              </h3>

              <div className="space-y-3">
                {QUIZ_DATA[currentStep].options.map((option, idx) => (
                  <button
                    key={idx}
                    id={`quiz-step-${currentStep}-opt-${idx}`}
                    onClick={() => handleSelectOption(option.recommendationId)}
                    className="w-full text-left p-4 rounded-xl border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-700/60 hover:border-blue-500 transition-all flex items-center justify-between group active:scale-98"
                  >
                    <div>
                      <div className="font-semibold text-white group-hover:text-blue-300 text-sm sm:text-base transition-colors">
                        {option.label[language]}
                      </div>
                      <div className="text-xs text-neutral-400 mt-0.5">
                        {option.description[language]}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-neutral-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all shrink-0 ml-3" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* Recommendation Result */
          <div className="relative z-10 max-w-2xl mx-auto bg-neutral-800/90 backdrop-blur-md border border-neutral-700 rounded-2xl p-6 sm:p-8 text-center animate-in fade-in zoom-in-95">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-300 text-neutral-900 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-amber-500/20">
              <Trophy className="w-7 h-7" />
            </div>

            <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
              {language === 'fr' ? 'Recommandation Idéale' : 'Your Ideal Match'}
            </span>

            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1 mb-2">
              {recommendedPhone.name}
            </h3>

            <p className="text-neutral-300 text-sm max-w-lg mx-auto mb-6">
              « {recommendedPhone.tagline[language]} »
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 bg-neutral-900/80 p-4 rounded-xl border border-neutral-700/60 mb-6">
              <img
                src={recommendedPhone.image}
                alt={recommendedPhone.name}
                className="w-20 h-24 object-contain rounded-lg drop-shadow"
              />
              <div className="text-left">
                <div className="text-xl font-bold text-white">
                  {language === 'fr' ? `Dès ${recommendedPhone.priceFrom} €` : `From €${recommendedPhone.priceFrom}`}
                </div>
                <div className="text-xs text-neutral-400 mt-1">
                  {language === 'fr'
                    ? `Puce : ${recommendedPhone.specs.processor.split('(')[0]} • Écran : ${recommendedPhone.specs.screenSize.split(' ')[0]}`
                    : `Chip: ${recommendedPhone.specs.processor.split('(')[0]} • Screen: ${recommendedPhone.specs.screenSize.split(' ')[0]}`}
                </div>
                <div className="text-xs text-blue-400 font-semibold mt-1">
                  {recommendedPhone.badge[language]}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                id="quiz-view-full-review"
                onClick={() => onSelectModel(recommendedPhone.id)}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-all shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{language === 'fr' ? 'Découvrir la fiche complète' : 'View Full Review'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="quiz-restart-btn"
                onClick={handleReset}
                className="w-full sm:w-auto px-4 py-3 bg-neutral-700/60 hover:bg-neutral-700 text-neutral-300 hover:text-white rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{language === 'fr' ? 'Recommencer le test' : 'Retake Quiz'}</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
