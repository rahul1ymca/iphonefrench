import { ArticleSection, FaqItem, LocalizedString, QuizQuestion } from '../types';

export const ARTICLE_METADATA = {
  publishedDate: {
    fr: '15 septembre 2024 (Mis à jour : 2026)',
    en: 'September 15, 2024 (Updated: 2026)',
  },
  readTime: {
    fr: '8 min de lecture',
    en: '8 min read',
  },
  author: {
    name: 'Alexandre Mercier',
    role: {
      fr: 'Expert Tech & Spécialiste Mobilité',
      en: 'Senior Tech & Mobility Specialist',
    },
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&h=200&q=80',
  },
};

export const ARTICLE_SECTIONS: ArticleSection[] = [
  {
    id: 'introduction',
    title: {
      fr: '1. Introduction : L’état des lieux de la gamme Apple',
      en: '1. Introduction: State of the Apple Lineup',
    },
    shortTitle: {
      fr: 'Introduction & Nouveautés',
      en: 'Overview & Novelties',
    },
    iconName: 'Sparkles',
  },
  {
    id: 'tableau-comparatif',
    title: {
      fr: '2. Grand Tableau Comparatif Interactif',
      en: '2. Comprehensive Comparison Matrix',
    },
    shortTitle: {
      fr: 'Tableau Comparatif',
      en: 'Comparison Table',
    },
    iconName: 'TableProperties',
  },
  {
    id: 'fiches-modeles',
    title: {
      fr: '3. Analyse Détaillée Modèle par Modèle',
      en: '3. In-Depth Model Breakdowns',
    },
    shortTitle: {
      fr: 'Fiches Modèles',
      en: 'Model Profiles',
    },
    iconName: 'Smartphone',
  },
  {
    id: 'criteres-choix',
    title: {
      fr: '4. Les 5 Critères Clés pour Choisir sans se Tromper',
      en: '4. 5 Crucial Buying Criteria',
    },
    shortTitle: {
      fr: 'Critères Clés',
      en: 'Key Criteria',
    },
    iconName: 'Sliders',
  },
  {
    id: 'simulateur-quiz',
    title: {
      fr: '5. Quiz Interactif : Quel iPhone est Fait pour Vous ?',
      en: '5. Interactive Quiz: Which iPhone is Right for You?',
    },
    shortTitle: {
      fr: 'Simulateur & Quiz',
      en: 'Buyer Finder Quiz',
    },
    iconName: 'HelpCircle',
  },
  {
    id: 'faq',
    title: {
      fr: '6. Foire Aux Questions (FAQ Spéciale iPhone)',
      en: '6. Frequently Asked Questions (FAQ)',
    },
    shortTitle: {
      fr: 'FAQ & Astuces',
      en: 'FAQ & Tips',
    },
    iconName: 'MessageSquareQuestion',
  },
  {
    id: 'verdict',
    title: {
      fr: '7. Le Verdict Final de la Rédaction',
      en: '7. Final Editorial Verdict',
    },
    shortTitle: {
      fr: 'Verdict & Conseils',
      en: 'Verdict & Advice',
    },
    iconName: 'Award',
  },
];

export const BUYING_CRITERIA: {
  title: LocalizedString;
  badge: LocalizedString;
  description: LocalizedString;
  tip: LocalizedString;
}[] = [
  {
    title: {
      fr: '1. Écran : 60 Hz ou ProMotion 120 Hz ?',
      en: '1. Display: 60Hz or ProMotion 120Hz?',
    },
    badge: {
      fr: 'Confort Visuel',
      en: 'Visual Comfort',
    },
    description: {
      fr: "C'est l'un des points de discorde majeurs. Les iPhone 16 Pro et 16 Pro Max profitent de la technologie ProMotion avec taux de rafraîchissement adaptatif de 1 à 120 Hz, garantissant un défilement ultra-fluide et l'affichage permanent Always-On. Les iPhone 16 et 15 restent bridés à 60 Hz. Si vous venez déjà d'un modèle Pro ou d'un smartphone Android 120 Hz, revenir à 60 Hz peut être perturbant ; sinon, les 60 Hz d'Apple restent parmi les mieux calibrés de l'industrie.",
      en: "This remains a major differentiator. The iPhone 16 Pro and 16 Pro Max feature ProMotion variable refresh rates ranging from 1 to 120Hz, delivering fluid scrolling and Always-On display capability. The regular iPhone 16 and 15 remain at 60Hz. If you are already accustomed to high-refresh screens, stepping down is noticeable; otherwise, Apple's 60Hz OLED calibration is still very pleasant.",
    },
    tip: {
      fr: 'Notre conseil : Privilégiez un Pro si vous passez plusieurs heures par jour à lire et naviguer sur votre écran.',
      en: 'Our advice: Pick a Pro if you spend hours daily reading and navigating heavy web feeds.',
    },
  },
  {
    title: {
      fr: '2. Photographie : Le zoom optique 5x fait-il la différence ?',
      en: '2. Camera: Does the 5x optical telephoto matter?',
    },
    badge: {
      fr: 'Créativité Photo',
      en: 'Photo Mastery',
    },
    description: {
      fr: "Tous les iPhone actuels capturent d'excellents clichés grâce au capteur principal de 48 Mpx. Cependant, les iPhone 16 Pro et 16 Pro Max intègrent désormais tous deux le zoom optique 5x tétraprisme (120 mm), idéal pour les portraits serrés, l'architecture et les concerts. L'iPhone 16 standard offre un zoom 2x par recadrage sans perte très satisfaisant mais montre ses limites au-delà de 3x.",
      en: 'Every modern iPhone delivers stellar main shots with 48MP resolution. However, both the 16 Pro and 16 Pro Max now house the 5x tetraprism optical telephoto lens (120mm focal length), exceptional for concert captures, architecture, and distant portraits. The standard iPhone 16 uses a 2x sensor crop that is clean up to 3x zoom.',
    },
    tip: {
      fr: 'Notre conseil : Le bouton Commande de l’appareil photo est présent sur tous les iPhone 16 ! Vous pouvez cadrer et zoomer intuitivement.',
      en: 'Our advice: The new physical Camera Control button is built into all iPhone 16 models across the board.',
    },
  },
  {
    title: {
      fr: '3. Apple Intelligence et Puce A18 : Anticiper le futur',
      en: '3. Apple Intelligence & A18 Chip: Future-Proofing',
    },
    badge: {
      fr: 'Intelligence Artificielle',
      en: 'Artificial Intelligence',
    },
    description: {
      fr: "Apple Intelligence (la suite d'outils d'IA générative pour la rédaction, la retouche photo magique et Siri nouvelle génération) exige un minimum de 8 Go de mémoire vive. Seuls les iPhone 16 (toute la gamme) et l'iPhone 15 Pro y sont éligibles. L'iPhone 15 standard (avec 6 Go de RAM) en est exclu.",
      en: 'Apple Intelligence—Apple’s suite of generative AI tools for clean writing, intelligent photo cleanup, and next-gen Siri—mandates 8GB of RAM. Only the iPhone 16 series and iPhone 15 Pro support it. The standard iPhone 15 (with 6GB RAM) will miss out.',
    },
    tip: {
      fr: 'Notre conseil : Si vous comptez garder votre téléphone plus de 4 ans, optez impérativement pour la génération 16 dotée de la puce A18.',
      en: 'Our advice: If you aim to keep your device for 4 to 6 years, invest in the A18 generation to stay modern.',
    },
  },
  {
    title: {
      fr: '4. Autonomie : Qui règne en maître ?',
      en: '4. Battery Endurance: Who reigns supreme?',
    },
    badge: {
      fr: 'Endurance & Batterie',
      en: 'Battery Stamina',
    },
    description: {
      fr: "L'autonomie a fait un bond spectaculaire avec l'iPhone 16 Pro Max (jusqu'à 33 heures de lecture vidéo) et l'iPhone 16 Plus (27 heures). Les modèles 6,1\" ou 6,3\" (16 et 16 Pro) assurent facilement une journée complète de travail intensif, mais nécessiteront un branchement en fin de soirée si vous sollicitez beaucoup le GPS ou la vidéo 4K.",
      en: 'Endurance reaches peak levels on the iPhone 16 Pro Max (up to 33 hours of video playback) and iPhone 16 Plus (27 hours). The more compact 6.1" and 6.3" units comfortably last a solid 24 hours under regular use, but heavy 4K recording or GPS demands an evening charge.',
    },
    tip: {
      fr: 'Notre conseil : Si vous oubliez souvent votre chargeur ou voyagez beaucoup, le 16 Plus ou le 16 Pro Max sont imbattables.',
      en: 'Our advice: If you hate battery anxiety during travel, choose the 16 Plus or 16 Pro Max.',
    },
  },
  {
    title: {
      fr: '5. Budget & Décote à la revente',
      en: '5. Budget & Resale Value',
    },
    badge: {
      fr: 'Investissement Rentable',
      en: 'Smart Investment',
    },
    description: {
      fr: "Un iPhone conserve en moyenne 65% de sa valeur après deux ans, bien au-dessus de la concurrence. L'iPhone 15 sous les 800 € offre la décote initiale la plus amortie. À l'inverse, l'iPhone 16 Pro Max est un investissement conséquent qui se revendra à prix d'or dans deux à trois ans.",
      en: 'An iPhone retains roughly 65% of its original purchase value after two full years, outperforming the industry. The iPhone 15 below €800 offers maximum immediate cost savings, while the Pro Max retains remarkable value on second-hand markets.',
    },
    tip: {
      fr: 'Notre conseil : Ne négligez pas les offres de reprise Apple Trade In ou chez votre opérateur pour réduire la facture de 150 à 500 €.',
      en: 'Our advice: Leverage trade-in programs with Apple or carriers to shave €150 to €500 off checkout.',
    },
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: {
      fr: 'Quel est l’iPhone au meilleur rapport qualité/prix en 2026 ?',
      en: 'Which iPhone offers the best value for money in 2026?',
    },
    answer: {
      fr: "Sans hésitation, l'iPhone 16 standard (à partir de 969 €). Il intègre les technologies majeures de la marque : puce A18 taillée pour l'intelligence artificielle, bouton Action personnalisable, nouveau bouton tactile Commande de l'appareil photo, port USB-C et capteur 48 Mpx. Pour les budgets plus serrés, l'iPhone 15 à 799 € est la deuxième meilleure alternative.",
      en: 'Without hesitation, the regular iPhone 16 (starting at €969). It packs Apple’s defining upgrades: the A18 processor built for AI, custom Action button, physical Camera Control, universal USB-C, and a sharp 48MP camera. Under €800, the iPhone 15 is the second-best bargain.',
    },
    category: {
      fr: 'Achat & Budget',
      en: 'Purchasing & Budget',
    },
  },
  {
    id: 'faq-2',
    question: {
      fr: 'Est-ce que l’iPhone 16 Pro vaut les 260 € d’écart avec l’iPhone 16 ?',
      en: 'Is the iPhone 16 Pro worth the €260 price jump over the iPhone 16?',
    },
    answer: {
      fr: "Oui, si vous valorisez : 1) La fluidité de l'écran ProMotion 120 Hz Always-On ; 2) Le zoom optique 5x pour photographier de loin ; 3) Le transfert de fichiers USB-C ultra-rapide (USB 3.2 à 10 Gbit/s contre USB 2.0 à 480 Mbit/s) ; 4) La vidéo 4K à 120 fps en ProRes. Si ces aspects ne font pas partie de votre quotidien, l'iPhone 16 classique vous suffira amplement.",
      en: 'Yes, if you appreciate: 1) ProMotion 120Hz Always-On smoothness; 2) Dedicated 5x optical telephoto lens; 3) Ultra-fast USB 3.2 data transfer speeds (10 Gbps vs 480 Mbps); 4) 4K 120fps video capture. If you only browse apps and shoot casual photos, save your money with the standard 16.',
    },
    category: {
      fr: 'Comparatif Direct',
      en: 'Head-to-Head',
    },
  },
  {
    id: 'faq-3',
    question: {
      fr: 'Faut-il acheter un iPhone 15 aujourd’hui ou attendre ?',
      en: 'Should you buy an iPhone 15 today or wait?',
    },
    answer: {
      fr: "L'iPhone 15 est un excellent achat si vous souhaitez profiter d'un smartphone moderne sous la barre des 800 €, avec la Dynamic Island et le port universel USB-C. Seul bémol : il n'aura pas accès à la suite Apple Intelligence en raison de ses 6 Go de mémoire vive. Si l'IA n'est pas votre priorité, vous ferez une excellente affaire.",
      en: 'The iPhone 15 is a phenomenal buy if you want a contemporary handset under €800 featuring Dynamic Island and USB-C. The only caveat is its lack of Apple Intelligence compatibility due to 6GB RAM. If generative AI is not a dealbreaker, it is a superb daily companion.',
    },
    category: {
      fr: 'Conseil d’Achat',
      en: 'Buying Advice',
    },
  },
  {
    id: 'faq-4',
    question: {
      fr: 'Comment fonctionne le bouton Commande de l’appareil photo sur les iPhone 16 ?',
      en: 'How does the new Camera Control button work on iPhone 16?',
    },
    answer: {
      fr: "Ce nouveau bouton capacitif et haptique situé sur la tranche droite permet de déclencher l'appareil photo en un clic instantané, d'ajuster l'exposition, le zoom ou les filtres en glissant simplement le doigt dessus, et de verrouiller la mise au point par une pression mi-course, exactement comme sur un appareil photo reflex.",
      en: 'This flush capacitive surface with haptic feedback on the lower-right edge launches the camera in a single tap, lets you slide your fingertip to adjust zoom, depth, or exposure styles, and allows a light press to lock focus like a dedicated DSLR shutter.',
    },
    category: {
      fr: 'Fonctionnalités',
      en: 'Features',
    },
  },
  {
    id: 'faq-5',
    question: {
      fr: 'Quelle capacité de stockage choisir : 128 Go ou 256 Go ?',
      en: 'Which storage capacity should you get: 128GB or 256GB?',
    },
    answer: {
      fr: "Pour une utilisation normale avec un abonnement iCloud (50 Go ou 200 Go), 128 Go restent convenables. En revanche, si vous filmez régulièrement en 4K, téléchargez de gros jeux (Genshin Impact, Resident Evil) ou voyagez sans connexion permanente, nous recommandons vivement 256 Go pour ne jamais être à l'étroit.",
      en: 'For standard daily use paired with an iCloud tier (50GB or 200GB), 128GB remains adequate. However, if you capture 4K video, install console-grade 3D games, or travel frequently offline, we strongly advocate starting at 256GB.',
    },
    category: {
      fr: 'Stockage & Usage',
      en: 'Storage & Usage',
    },
  },
];

export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    title: {
      fr: 'Quel est votre budget maximal pour votre nouvel iPhone ?',
      en: 'What is your target budget for this new iPhone?',
    },
    options: [
      {
        label: { fr: 'Moins de 600 €', en: 'Under €600' },
        description: { fr: 'Budget serré ou premier smartphone', en: 'Tight budget or starter phone' },
        recommendationId: 'iphone-se-budget',
      },
      {
        label: { fr: 'Entre 700 € et 900 €', en: 'Between €700 and €900' },
        description: { fr: 'Le meilleur compromis prix/qualité', en: 'Best bang for the buck' },
        recommendationId: 'iphone-15',
      },
      {
        label: { fr: 'Entre 950 € et 1 200 €', en: 'Between €950 and €1,200' },
        description: { fr: 'Un modèle moderne et paré pour l’avenir', en: 'Modern, future-ready daily driver' },
        recommendationId: 'iphone-16',
      },
      {
        label: { fr: 'Plus de 1 200 €', en: 'Above €1,200' },
        description: { fr: 'Le sommet des performances sans concession', en: 'Top-tier pinnacle, zero compromise' },
        recommendationId: 'iphone-16-pro-max',
      },
    ],
  },
  {
    id: 2,
    title: {
      fr: 'Quelle est votre utilisation prioritaire au quotidien ?',
      en: 'What is your single most important priority?',
    },
    options: [
      {
        label: { fr: 'Photo & Vidéo professionnelle', en: 'Pro Photography & Videography' },
        description: { fr: 'Zoom optique 5x, 4K 120 fps, capteurs haute précision', en: '5x telephoto, 4K 120fps, maximum precision' },
        recommendationId: 'iphone-16-pro',
      },
      {
        label: { fr: 'Autonomie marathon & Grand écran', en: 'Marathon Battery & Big Display' },
        description: { fr: 'Streaming vidéo, réseaux sociaux, 2 jours de batterie', en: 'Video binging, social media, 2-day endurance' },
        recommendationId: 'iphone-16-plus',
      },
      {
        label: { fr: 'Polyvalence, fluidité et IA Apple', en: 'All-round versatility & Apple AI' },
        description: { fr: 'Bouton Action, Commande photo et puce A18', en: 'Action button, Camera Control & A18 chip' },
        recommendationId: 'iphone-16',
      },
      {
        label: { fr: 'Le meilleur de tout (Écran géant + Photo + Batterie)', en: 'Absolute best of everything' },
        description: { fr: 'Écran 6,9", titane, zoom 5x, autonomie 33 h', en: '6.9" display, titanium, 5x zoom, 33h battery' },
        recommendationId: 'iphone-16-pro-max',
      },
    ],
  },
  {
    id: 3,
    title: {
      fr: 'Quelle taille d’écran préférez-vous dans votre main ?',
      en: 'Which physical screen size feels right in your hand?',
    },
    options: [
      {
        label: { fr: 'Compact ou maniable (6,1" à 6,3")', en: 'Handy & Compact (6.1" to 6.3")' },
        description: { fr: 'Facile à ranger dans la poche et à manipuler d’une main', en: 'Pockets effortlessly and easy single-handed reach' },
        recommendationId: 'iphone-16',
      },
      {
        label: { fr: 'Grand écran immersif (6,7" à 6,9")', en: 'Expansive Immersion (6.7" to 6.9")' },
        description: { fr: 'Idéal pour les films, les jeux et le confort des yeux', en: 'Ideal for movies, gaming, and reading' },
        recommendationId: 'iphone-16-pro-max',
      },
      {
        label: { fr: 'Format intermédiaire Pro (6,3")', en: 'Refined Pro Mid-Size (6.3")' },
        description: { fr: 'Écran 120 Hz dans un gabarit parfaitement dosé', en: 'Smooth 120Hz display with optimal ergonomics' },
        recommendationId: 'iphone-16-pro',
      },
    ],
  },
];
