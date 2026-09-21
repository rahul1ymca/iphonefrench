import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Calendar,
  Clock,
  User,
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  ChevronRight,
  Zap,
  Bookmark,
  Smartphone,
} from 'lucide-react';
import { Language } from './types';
import { IPHONES_DATA } from './data/iphones';
import { ARTICLE_METADATA, ARTICLE_SECTIONS } from './data/blogContent';
import { Header } from './components/Header';
import { AudioPlayer } from './components/AudioPlayer';
import { TableOfContents } from './components/TableOfContents';
import { ComparisonTable } from './components/ComparisonTable';
import { PhoneDetailCard } from './components/PhoneDetailCard';
import { BuyerCriteriaGuide } from './components/BuyerCriteriaGuide';
import { BuyerQuiz } from './components/BuyerQuiz';
import { FaqSection } from './components/FaqSection';
import { EditorialVerdict } from './components/EditorialVerdict';
import { ShareModal } from './components/ShareModal';
import { Footer } from './components/Footer';

export default function App() {
  const [language, setLanguage] = useState<Language>('fr');
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isShareOpen, setIsShareOpen] = useState<boolean>(false);

  // Sync document language and title when language changes
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      if (language === 'fr') {
        document.title = 'iPhone Comparatif 2026 : Quel iPhone Choisir ? Le Guide Ultime';
      } else {
        document.title = 'iPhone Comparison 2026: Which iPhone Should You Buy? The Ultimate Guide';
      }
    }
  }, [language]);

  // Track scroll progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.pageYOffset / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }

      // Check current section
      const sectionElements = ARTICLE_SECTIONS.map((sec) => document.getElementById(sec.id));
      const scrollPos = window.pageYOffset + 140;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const el = sectionElements[i];
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(ARTICLE_SECTIONS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  const handleSelectModel = (modelId: string) => {
    const element = document.getElementById(modelId);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToAudio = () => {
    const el = document.getElementById('audio-reader-bar');
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Text content read aloud by Web Speech API
  const audioNarration =
    language === 'fr'
      ? "Bienvenue sur le grand comparatif des iPhone 2026. Cette année, la gamme Apple se distingue par l'arrivée de la puce A18 sur tous les modèles 16, du bouton physique Commande de l'appareil photo, et du déploiement d'Apple Intelligence. Pour le nec plus ultra sans compromis, l'iPhone 16 Pro Max offre un écran géant de 6,9 pouces, un zoom 5x périscopique et jusqu'à 33 heures d'autonomie vidéo. L'iPhone 16 Pro propose la même puissance dans un format plus compact de 6,3 pouces. Pour 90% des utilisateurs, l'iPhone 16 standard à 969 euros représente le choix le plus équilibré et pérenne. Enfin, pour les budgets sous les 800 euros, l'iPhone 15 reste un excellent achat avec Dynamic Island et port USB-C. Découvrez notre tableau comparatif, nos analyses détaillées et notre quiz d'aide au choix."
      : "Welcome to the 2026 iPhone comprehensive comparison guide. This year, Apple's lineup stands out with the A18 processor across all iPhone 16 models, the new dedicated tactile Camera Control button, and the rollout of Apple Intelligence. For the absolute flagship experience, the iPhone 16 Pro Max delivers a massive 6.9-inch display, a 5x tetraprism telephoto lens, and up to 33 hours of video battery life. The iPhone 16 Pro packs identical power into a handier 6.3-inch chassis. For 90% of buyers, the regular iPhone 16 at €969 is the most sensible and balanced choice. Lastly, under €800, the iPhone 15 remains a terrific value pick with Dynamic Island and universal USB-C. Explore our comparison table, in-depth breakdowns, and interactive quiz.";

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50/50 text-neutral-900 selection:bg-blue-600 selection:text-white">
      {/* Header with Reading Bar, Language Converter, Share Button */}
      <Header
        language={language}
        onToggleLanguage={handleToggleLanguage}
        onOpenShare={() => setIsShareOpen(true)}
        onTriggerAudioScroll={scrollToAudio}
        scrollProgress={scrollProgress}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 w-full">
        {/* Breadcrumb for SEO */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-2 text-xs text-neutral-500 mb-6 overflow-x-auto whitespace-nowrap"
        >
          <a href="#" className="hover:text-neutral-900 transition-colors">
            {language === 'fr' ? 'Accueil' : 'Home'}
          </a>
          <span>/</span>
          <a href="#" className="hover:text-neutral-900 transition-colors">
            Smartphones
          </a>
          <span>/</span>
          <a href="#" className="hover:text-neutral-900 transition-colors">
            Apple
          </a>
          <span>/</span>
          <span className="text-neutral-900 font-semibold truncate">
            {language === 'fr' ? 'iPhone Comparatif 2026' : 'iPhone Comparison 2026'}
          </span>
        </nav>

        {/* HERO ARTICLE HEADER */}
        <header className="mb-10">
          <div className="flex flex-wrap items-center gap-2.5 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-2xs">
              <Sparkles className="w-3.5 h-3.5" />
              {language === 'fr' ? 'Dossier Spécial Guide d’Achat' : 'Comprehensive Buying Guide'}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-neutral-200/80 text-neutral-700">
              <TrendingUp className="w-3 h-3 text-emerald-600" />
              {language === 'fr' ? 'Mis à jour pour 2026' : 'Updated for 2026'}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight leading-[1.15] mb-4">
            {language === 'fr' ? (
              <>
                iPhone Comparatif : Quel iPhone Choisir en 2026 ? Le Guide Ultime
              </>
            ) : (
              <>
                iPhone Comparison: Which iPhone Should You Buy in 2026? The Ultimate Guide
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-3xl mb-6">
            {language === 'fr'
              ? 'Puces A18, bouton Commande de l’appareil photo, intégration d’Apple Intelligence, autonomie record et port universel USB-C : découvrez notre comparatif exhaustif et impartial de la gamme iPhone pour trouver le modèle parfaitement adapté à votre usage et à votre budget.'
              : 'A18 processors, dedicated Camera Control button, Apple Intelligence rollout, record battery endurance, and universal USB-C: discover our in-depth, unbiased comparison of the entire iPhone lineup to choose the perfect device for your budget.'}
          </p>

          {/* Author Metadata Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-neutral-200 text-xs text-neutral-500">
            <div className="flex items-center gap-3">
              <img
                src={ARTICLE_METADATA.author.avatar}
                alt={ARTICLE_METADATA.author.name}
                className="w-9 h-9 rounded-full object-cover border border-neutral-200 shadow-2xs"
              />
              <div>
                <span className="font-semibold text-neutral-900 block">
                  {ARTICLE_METADATA.author.name}
                </span>
                <span className="text-neutral-500">
                  {ARTICLE_METADATA.author.role[language]}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                {ARTICLE_METADATA.publishedDate[language]}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-neutral-400" />
                {ARTICLE_METADATA.readTime[language]}
              </span>
            </div>
          </div>
        </header>

        {/* HERO IMAGE */}
        <div className="relative rounded-3xl overflow-hidden mb-8 border border-neutral-200/80 shadow-md aspect-16/9 max-h-[480px] bg-neutral-900">
          <img
            src="https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1600&q=85"
            alt={
              language === 'fr'
                ? 'Gamme complète Apple iPhone comparatif : iPhone 16 Pro Max, 16 Pro, 16 et 15'
                : 'Complete Apple iPhone lineup comparison: iPhone 16 Pro Max, 16 Pro, 16, and 15'
            }
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 sm:p-8">
            <div className="text-white max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                {language === 'fr' ? 'Bilan & Analyse 2026' : '2026 In-Depth Analysis'}
              </span>
              <p className="text-sm sm:text-base font-medium text-neutral-200">
                {language === 'fr'
                  ? 'Du fleuron iPhone 16 Pro Max jusqu’au très accessible iPhone 15 : décryptage pas à pas de chaque spécification.'
                  : 'From the flagship iPhone 16 Pro Max to the budget-friendly iPhone 15: step-by-step scrutiny of every key feature.'}
              </p>
            </div>
          </div>
        </div>

        {/* KEY TAKEAWAYS / EN BREF BOX */}
        <div className="bg-blue-50/70 border border-blue-200/80 rounded-2xl p-5 sm:p-6 mb-10">
          <h2 className="text-base font-bold text-blue-950 flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>
              {language === 'fr' ? 'Les 3 points essentiels à retenir en 2026 :' : '3 Essential Takeaways for 2026:'}
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs sm:text-sm text-blue-950">
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                {language === 'fr'
                  ? 'L’iPhone 16 standard offre désormais 90% des fonctionnalités Pro (Puce A18, bouton Action, Commande photo).'
                  : 'The standard iPhone 16 delivers 90% of flagship features (A18 silicon, Action button, Camera Control).'}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                {language === 'fr'
                  ? 'L’iPhone 16 Pro et le Pro Max partagent cette année le même zoom 5x périscopique ultra-puissant.'
                  : 'Both the 16 Pro and 16 Pro Max share identical 5x tetraprism optical telephoto cameras this year.'}
              </span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <span>
                {language === 'fr'
                  ? 'L’iPhone 15 à 799 € est le meilleur choix économique si l’IA générative ne vous est pas indispensable.'
                  : 'The iPhone 15 at €799 is the top money-saver if on-device generative AI is not required.'}
              </span>
            </div>
          </div>
        </div>

        {/* AUDIO PLAYER (Web Speech API) */}
        <div className="mb-12">
          <AudioPlayer language={language} contentToRead={audioNarration} />
        </div>

        {/* 2-COLUMN LAYOUT: Sidebar (TOC) + Main Editorial Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* SIDEBAR: Table of Contents & Quick Widget */}
          <aside className="lg:col-span-4 space-y-6">
            <TableOfContents
              language={language}
              activeSection={activeSection}
              scrollProgress={scrollProgress}
            />

            {/* Quick Specs Highlight Card */}
            <div className="hidden lg:block bg-gradient-to-br from-neutral-900 to-neutral-800 text-white rounded-2xl p-5 border border-neutral-700/80 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-400 block mb-1">
                {language === 'fr' ? 'Aide Express' : 'Fast Advice'}
              </span>
              <h3 className="font-bold text-sm text-white mb-2">
                {language === 'fr' ? 'Besoin d’un conseil rapide ?' : 'Short on time?'}
              </h3>
              <p className="text-xs text-neutral-300 leading-relaxed mb-4">
                {language === 'fr'
                  ? 'Utilisez notre quiz interactif en 3 étapes pour recevoir un verdict instantané.'
                  : 'Take our 3-step interactive finder quiz to pinpoint your ideal model in seconds.'}
              </p>
              <button
                id="sidebar-jump-quiz"
                onClick={() => {
                  const el = document.getElementById('simulateur-quiz');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-2 px-3 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>{language === 'fr' ? 'Lancer le quiz' : 'Launch quiz'}</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </aside>

          {/* MAIN ARTICLE BODY */}
          <div className="lg:col-span-8 space-y-12">
            {/* SECTION 1: Introduction & State of the Apple Lineup */}
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight mb-4">
                {language === 'fr'
                  ? '1. L’état des lieux : Pourquoi 2026 est une année charnière pour l’iPhone'
                  : '1. State of the Art: Why 2026 is a Defining Year for iPhone'}
              </h2>

              <div className="prose prose-neutral max-w-none text-sm sm:text-base text-neutral-700 leading-relaxed space-y-4">
                <p>
                  {language === 'fr' ? (
                    <>
                      Chaque année, la question revient avec la même intensité :{' '}
                      <strong>faut-il craquer pour le dernier iPhone ou privilégier un modèle de la génération précédente ?</strong>{' '}
                      En 2026, la gamme de smartphones conçue à Cupertino a rarement été aussi cohérente, mais les subtilités entre chaque déclinaison imposent une attention rigoureuse.
                    </>
                  ) : (
                    <>
                      Every year, smartphone shoppers ask the identical question:{' '}
                      <strong>should you upgrade to the latest iPhone or snap up a discounted prior-generation gem?</strong>{' '}
                      In 2026, Cupertino’s handset catalog has never been more refined, yet subtle hardware boundaries demand close attention.
                    </>
                  )}
                </p>

                <p>
                  {language === 'fr' ? (
                    <>
                      La grande nouveauté réside dans l’harmonisation des fonctionnalités autrefois réservées aux modèles Pro. Désormais,{' '}
                      <strong>l’iPhone 16 standard hérite du bouton Action personnalisable</strong> et inaugure, au même titre que les modèles Pro, la toute nouvelle{' '}
                      <strong>Commande de l’appareil photo</strong> (un déclencheur capacitif et tactile sur la tranche). De plus, avec l’essor d’<strong>Apple Intelligence</strong>, disposer d’au moins 8 Go de mémoire vive est devenu un prérequis indispensable pour pérenniser son équipement.
                    </>
                  ) : (
                    <>
                      The most welcome leap is the democratization of former Pro-exclusive features. Today,{' '}
                      <strong>the regular iPhone 16 inherits the versatile Action button</strong> alongside the brand-new tactile{' '}
                      <strong>Camera Control</strong> capacitive key. Furthermore, the advent of <strong>Apple Intelligence</strong> makes 8GB of unified RAM essential for lasting longevity.
                    </>
                  )}
                </p>
              </div>
            </section>

            {/* SECTION 2: Grand Tableau Comparatif Interactif */}
            <ComparisonTable
              iphones={IPHONES_DATA}
              language={language}
              onSelectModel={handleSelectModel}
            />

            {/* SECTION 3: Fiches Détaillées Modèle par Modèle */}
            <section id="fiches-modeles" className="scroll-mt-24">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                  {language === 'fr' ? 'Fiches Détaillées' : 'In-Depth Profiles'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 tracking-tight">
                  {language === 'fr'
                    ? '3. Analyse Détaillée des 6 Modèles Clés'
                    : '3. In-Depth Analysis of the 6 Key Models'}
                </h2>
                <p className="text-sm text-neutral-600 mt-1">
                  {language === 'fr'
                    ? 'Découvrez nos fiches d’évaluation indépendantes, points forts, points faibles et notre verdict pour chaque appareil.'
                    : 'Review independent scorecards, verified strengths, compromises, and editorial verdicts.'}
                </p>
              </div>

              {IPHONES_DATA.map((phone) => (
                <PhoneDetailCard
                  key={phone.id}
                  phone={phone}
                  language={language}
                />
              ))}
            </section>

            {/* SECTION 4: Les 5 Critères Clés pour Bien Choisir */}
            <BuyerCriteriaGuide language={language} />

            {/* SECTION 5: Quiz Interactif */}
            <BuyerQuiz
              language={language}
              onSelectModel={handleSelectModel}
            />

            {/* SECTION 6: FAQ Spéciale iPhone */}
            <FaqSection language={language} />

            {/* SECTION 7: Le Verdict Final de la Rédaction */}
            <EditorialVerdict
              language={language}
              onSelectModel={handleSelectModel}
            />
          </div>
        </div>
      </main>

      {/* Social Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        language={language}
      />

      {/* Footer with Bio, SEO cloud, and back to top */}
      <Footer language={language} onScrollToTop={scrollToTop} />
    </div>
  );
}
