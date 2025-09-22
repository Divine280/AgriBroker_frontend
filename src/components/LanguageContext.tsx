import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'rw' | 'fr';

interface Translation {
  // Navigation
  home: string;
  farmerRegistration: string;
  adminDashboard: string;
  farmerPanel: string;
  buyerPanel: string;
  brokerPanel: string;
  
  // Common actions
  submit: string;
  cancel: string;
  next: string;
  previous: string;
  save: string;
  edit: string;
  delete: string;
  add: string;
  view: string;
  search: string;
  filter: string;
  
  // Homepage content
  heroTitle: string;
  heroSubtitle: string;
  joinAsFarmer: string;
  joinAsBuyer: string;
  getStarted: string;
  learnMore: string;
  
  // Farmer Registration
  personalInformation: string;
  firstName: string;
  lastName: string;
  nationalId: string;
  phoneNumber: string;
  email: string;
  financialAccounts: string;
  bankAccounts: string;
  mobileMoneyAccounts: string;
  farmLocations: string;
  reviewSubmit: string;
  
  // Language switcher
  language: string;
  english: string;
  kinyarwanda: string;
  french: string;
  
  // Additional homepage content
  proudlyRwandan: string;
  empoweringFarmers: string;
  digitalMarketplace: string;
  governmentVerified: string;
  securePayments: string;
  transformingAgriculture: string;
  realTimeImpact: string;
  whyChoose: string;
  builtForRwandan: string;
  
  // Header
  notifications: string;
  profile: string;
  logout: string;
  settings: string;
  
  // Admin Dashboard
  totalFarmers: string;
  totalBuyers: string;
  totalTransactions: string;
  revenue: string;
  activeListings: string;
  pendingApprovals: string;
  disputeResolution: string;
  userManagement: string;
  systemHealth: string;
  reports: string;
  analytics: string;
  
  // Farmer Panel
  myListings: string;
  createListing: string;
  orders: string;
  earnings: string;
  productName: string;
  price: string;
  quantity: string;
  status: string;
  active: string;
  sold: string;
  pending: string;
  totalEarnings: string;
  thisMonth: string;
  pendingOrders: string;
  completedOrders: string;
  
  // Buyer Panel
  marketplace: string;
  myOrders: string;
  favorites: string;
  cart: string;
  checkout: string;
  orderHistory: string;
  orderTotal: string;
  deliveryAddress: string;
  paymentMethod: string;
  
  // Broker Panel
  commissions: string;
  clients: string;
  transactions: string;
  performance: string;
  totalCommission: string;
  activeClients: string;
  successfulDeals: string;
  
  // Footer
  forFarmers: string;
  forBuyers: string;
  support: string;
  listProducts: string;
  getFairPrices: string;
  marketAccess: string;
  qualityProducts: string;
  directFromFarmers: string;
  bulkOrders: string;
  verifiedSuppliers: string;
  helpCenter: string;
  contactUs: string;
  training: string;
  governmentPartners: string;
  copyrightText: string;
  
  // Demo Navigation
  demoNavigation: string;
  
  // Common terms
  products: string;
  farmers: string;
  buyers: string;
  brokers: string;
  agents: string;
  location: string;
  category: string;
  date: string;
  time: string;
  amount: string;
  total: string;
  available: string;
  unavailable: string;
  
  // Homepage stats
  farmersOnboarded: string;
  goodsTraded: string;
  totalValue: string;
  activeTransactions: string;
  
  // Features
  marketAccess: string;
  qualityAssurance: string;
  connectBuyers: string;
  governmentBacked: string;
  verifiedProducts: string;
  
  // CTA
  readyTransform: string;
  joinThousands: string;
}

const translations: Record<Language, Translation> = {
  en: {
    // Navigation
    home: 'Home',
    farmerRegistration: 'Farmer Registration',
    adminDashboard: 'Admin Dashboard',
    farmerPanel: 'Farmer Panel',
    buyerPanel: 'Buyer Panel',
    brokerPanel: 'Broker Panel',
    
    // Common actions
    submit: 'Submit',
    cancel: 'Cancel',
    next: 'Next',
    previous: 'Previous',
    save: 'Save',
    edit: 'Edit',
    delete: 'Delete',
    add: 'Add',
    view: 'View',
    search: 'Search',
    filter: 'Filter',
    
    // Homepage content
    heroTitle: 'Connecting Rwandan Farmers to Better Markets',
    heroSubtitle: 'Join thousands of farmers, buyers, and brokers building a stronger agricultural future for Rwanda.',
    joinAsFarmer: 'Join as Farmer',
    joinAsBuyer: 'Join as Buyer',
    getStarted: 'Get Started Today',
    learnMore: 'Learn More',
    
    // Farmer Registration
    personalInformation: 'Personal Information',
    firstName: 'First Name',
    lastName: 'Last Name',
    nationalId: 'National ID',
    phoneNumber: 'Phone Number',
    email: 'Email',
    financialAccounts: 'Financial Accounts',
    bankAccounts: 'Bank Accounts',
    mobileMoneyAccounts: 'Mobile Money Accounts',
    farmLocations: 'Farm Locations',
    reviewSubmit: 'Review & Submit',
    
    // Language switcher
    language: 'Language',
    english: 'English',
    kinyarwanda: 'Kinyarwanda',
    french: 'French',
    
    // Additional homepage content
    proudlyRwandan: 'Proudly Rwandan',
    empoweringFarmers: 'Empowering Rwanda\'s Farmers',
    digitalMarketplace: 'The digital marketplace connecting farmers, buyers, and brokers across Rwanda. Fair prices, secure transactions, government-backed trust.',
    governmentVerified: 'Government Verified',
    securePayments: 'Secure Payments',
    transformingAgriculture: 'Transforming Rwanda\'s Agriculture',
    realTimeImpact: 'Real-time impact across our platform, supporting farmers and driving economic growth',
    whyChoose: 'Why Choose AgriConnect Rwanda?',
    builtForRwandan: 'Built for Rwandan farmers, backed by government trust, designed for growth',
    
    // Header
    notifications: 'Notifications',
    profile: 'Profile',
    logout: 'Logout',
    settings: 'Settings',
    
    // Admin Dashboard
    totalFarmers: 'Total Farmers',
    totalBuyers: 'Total Buyers',
    totalTransactions: 'Total Transactions',
    revenue: 'Revenue',
    activeListings: 'Active Listings',
    pendingApprovals: 'Pending Approvals',
    disputeResolution: 'Dispute Resolution',
    userManagement: 'User Management',
    systemHealth: 'System Health',
    reports: 'Reports',
    analytics: 'Analytics',
    
    // Farmer Panel
    myListings: 'My Listings',
    createListing: 'Create Listing',
    orders: 'Orders',
    earnings: 'Earnings',
    productName: 'Product Name',
    price: 'Price',
    quantity: 'Quantity',
    status: 'Status',
    active: 'Active',
    sold: 'Sold',
    pending: 'Pending',
    totalEarnings: 'Total Earnings',
    thisMonth: 'This Month',
    pendingOrders: 'Pending Orders',
    completedOrders: 'Completed Orders',
    
    // Buyer Panel
    marketplace: 'Marketplace',
    myOrders: 'My Orders',
    favorites: 'Favorites',
    cart: 'Cart',
    checkout: 'Checkout',
    orderHistory: 'Order History',
    orderTotal: 'Order Total',
    deliveryAddress: 'Delivery Address',
    paymentMethod: 'Payment Method',
    
    // Broker Panel
    commissions: 'Commissions',
    clients: 'Clients',
    transactions: 'Transactions',
    performance: 'Performance',
    totalCommission: 'Total Commission',
    activeClients: 'Active Clients',
    successfulDeals: 'Successful Deals',
    
    // Footer
    forFarmers: 'For Farmers',
    forBuyers: 'For Buyers',
    support: 'Support',
    listProducts: 'List Your Products',
    getFairPrices: 'Get Fair Prices',
    marketAccess: 'Market Access',
    qualityProducts: 'Quality Products',
    directFromFarmers: 'Direct From Farmers',
    bulkOrders: 'Bulk Orders',
    verifiedSuppliers: 'Verified Suppliers',
    helpCenter: 'Help Center',
    contactUs: 'Contact Us',
    training: 'Training',
    governmentPartners: 'Government Partners',
    copyrightText: '© 2024 AgriConnect Rwanda. Proudly supporting Rwandan agriculture.',
    
    // Demo Navigation
    demoNavigation: 'Demo Navigation:',
    
    // Common terms
    products: 'Products',
    farmers: 'Farmers',
    buyers: 'Buyers',
    brokers: 'Brokers',
    agents: 'Agents',
    location: 'Location',
    category: 'Category',
    date: 'Date',
    time: 'Time',
    amount: 'Amount',
    total: 'Total',
    available: 'Available',
    unavailable: 'Unavailable',
    
    // Homepage stats
    farmersOnboarded: 'Farmers Onboarded',
    goodsTraded: 'Goods Traded (tons)',
    totalValue: 'Total Value (RWF)',
    activeTransactions: 'Active Transactions',
    
    // Features
    marketAccess: 'Market Access',
    qualityAssurance: 'Quality Assurance',
    connectBuyers: 'Connect with buyers across Rwanda and East Africa',
    governmentBacked: 'Government-backed secure transaction processing',
    verifiedProducts: 'Verified products with quality certifications',
    
    // CTA
    readyTransform: 'Ready to Transform Your Agriculture Business?',
    joinThousands: 'Join thousands of farmers and buyers already using AgriConnect Rwanda'
  },
  
  rw: {
    // Navigation
    home: 'Ahabanza',
    farmerRegistration: 'Kwiyandikisha kw\'umuhinzi',
    adminDashboard: 'Ubuyobozi',
    farmerPanel: 'Umuhinzi',
    buyerPanel: 'Umuguzi',
    brokerPanel: 'Umucuruzi',
    
    // Common actions
    submit: 'Ohereza',
    cancel: 'Kuraguza',
    next: 'Ikurikira',
    previous: 'Ibanziriza',
    save: 'Bika',
    edit: 'Hindura',
    delete: 'Siba',
    add: 'Ongeraho',
    view: 'Reba',
    search: 'Shakisha',
    filter: 'Shungura',
    
    // Homepage content
    heroTitle: 'Guhuza Abahinzi b\'u Rwanda n\'Amasoko Meza',
    heroSubtitle: 'Jya mu bahinzi, abaguzi, n\'abacuruzi benshi bubaka ejo hazaza h\'ubuhinzi bw\'u Rwanda.',
    joinAsFarmer: 'Jya nk\'umuhinzi',
    joinAsBuyer: 'Jya nk\'umuguzi',
    getStarted: 'Tangira Uyu Munsi',
    learnMore: 'Menya Byinshi',
    
    // Farmer Registration
    personalInformation: 'Amakuru y\'umuntu',
    firstName: 'Izina ry\'ubanza',
    lastName: 'Izina ry\'umuryango',
    nationalId: 'Indangamuntu',
    phoneNumber: 'Telefone',
    email: 'Imeli',
    financialAccounts: 'Konti z\'amafaranga',
    bankAccounts: 'Konti za banki',
    mobileMoneyAccounts: 'Konti za mobile money',
    farmLocations: 'Ahantu h\'ubuhinzi',
    reviewSubmit: 'Subiramo hanyuma wohereze',
    
    // Language switcher
    language: 'Ururimi',
    english: 'Icyongereza',
    kinyarwanda: 'Ikinyarwanda',
    french: 'Igifaransa',
    
    // Additional homepage content
    proudlyRwandan: 'Nyakuri Umunyarwanda',
    empoweringFarmers: 'Guha Imbaraga Abahinzi b\'u Rwanda',
    digitalMarketplace: 'Isoko ry\'ikoranabuhanga rihuza abahinzi, abaguzi, n\'abacuruzi muri Rwanda. Ibiciro byizewe, ubucuruzi burinzwe, ikizere kiva kuri leta.',
    governmentVerified: 'Byemejwe na Leta',
    securePayments: 'Kwishyura Gutinzwe',
    transformingAgriculture: 'Guhindura Ubuhinzi bw\'u Rwanda',
    realTimeImpact: 'Ingaruka z\'igihe cy\'ukuri ku rwenya rwacu, dufasha abahinzi kandi tugakuza ubukungu',
    whyChoose: 'Kuki Uhitamo AgriConnect Rwanda?',
    builtForRwandan: 'Byubatswe ku bahinzi b\'u Rwanda, bishyigikiwe n\'ikizere cya leta, byubatswe kugira ngo bikure',
    
    // Header
    notifications: 'Amakuru',
    profile: 'Umwirondoro',
    logout: 'Sohoka',
    settings: 'Ibigenga',
    
    // Admin Dashboard
    totalFarmers: 'Abahinzi Bose',
    totalBuyers: 'Abaguzi Bose',
    totalTransactions: 'Ubucuruzi Bwose',
    revenue: 'Inyungu',
    activeListings: 'Ibyagurisha Bikora',
    pendingApprovals: 'Bitegereje Kwemeza',
    disputeResolution: 'Gukemura Amakimbirane',
    userManagement: 'Gucunga Abakoresha',
    systemHealth: 'Ubuzima bwa Sisiteme',
    reports: 'Raporo',
    analytics: 'Ubusesengura',
    
    // Farmer Panel
    myListings: 'Ibyo Ndagurisha',
    createListing: 'Andika Icyo Ugurisha',
    orders: 'Amateka',
    earnings: 'Inyungu Zanjye',
    productName: 'Izina ry\'Igicuruzwa',
    price: 'Igiciro',
    quantity: 'Umubare',
    status: 'Uko Bimeze',
    active: 'Bikora',
    sold: 'Byagurishijwe',
    pending: 'Bitegereje',
    totalEarnings: 'Inyungu Zose',
    thisMonth: 'Uku Kwezi',
    pendingOrders: 'Amateka Ategereje',
    completedOrders: 'Amateka Yarangiye',
    
    // Buyer Panel
    marketplace: 'Isoko',
    myOrders: 'Amateka Yanjye',
    favorites: 'Ibyo Nkunda',
    cart: 'Igikoni',
    checkout: 'Kwishyura',
    orderHistory: 'Amateka y\'Ubucuruzi',
    orderTotal: 'Igiciro Cyose',
    deliveryAddress: 'Aderesi yo Kurondera',
    paymentMethod: 'Uburyo bwo Kwishyura',
    
    // Broker Panel
    commissions: 'Komisiyo',
    clients: 'Abakiriya',
    transactions: 'Ubucuruzi',
    performance: 'Imikorere',
    totalCommission: 'Komisiyo Yose',
    activeClients: 'Abakiriya Bakora',
    successfulDeals: 'Ubucuruzi Bwagenze Neza',
    
    // Footer
    forFarmers: 'Ku Bahinzi',
    forBuyers: 'Ku Baguzi',
    support: 'Ubufasha',
    listProducts: 'Andika Ibicuruzwa Byawe',
    getFairPrices: 'Bonaho Ibiciro Byizewe',
    marketAccess: 'Kubona Isoko',
    qualityProducts: 'Ibicuruzwa Byiza',
    directFromFarmers: 'Biva ku Bahinzi',
    bulkOrders: 'Amateka Menshi',
    verifiedSuppliers: 'Abatanga Bemejwe',
    helpCenter: 'Ikigo cy\'Ubufasha',
    contactUs: 'Duvugishe',
    training: 'Amahugurwa',
    governmentPartners: 'Abafatanya na Leta',
    copyrightText: '© 2024 AgriConnect Rwanda. Tushyigikiye ubuhinzi bw\'u Rwanda.',
    
    // Demo Navigation
    demoNavigation: 'Kwerekana Kugenda:',
    
    // Common terms
    products: 'Ibicuruzwa',
    farmers: 'Abahinzi',
    buyers: 'Abaguzi',
    brokers: 'Abacuruzi',
    agents: 'Abakozi',
    location: 'Ahantu',
    category: 'Ubwoko',
    date: 'Italiki',
    time: 'Igihe',
    amount: 'Umubare',
    total: 'Byose',
    available: 'Biraboneka',
    unavailable: 'Ntibiraboneka',
    
    // Homepage stats
    farmersOnboarded: 'Abahinzi Binjiye',
    goodsTraded: 'Ibicuruzwa Byacurujwe (toni)',
    totalValue: 'Agaciro Kose (RWF)',
    activeTransactions: 'Ubucuruzi Bukora',
    
    // Features
    marketAccess: 'Kubona Isoko',
    qualityAssurance: 'Kwizera Ubwiza',
    connectBuyers: 'Guhuzanya n\'abaguzi muri Rwanda n\'Afurika y\'Iburasirazuba',
    governmentBacked: 'Ubushyuzi butinzwe bushyigikiwe na leta',
    verifiedProducts: 'Ibicuruzwa byemejwe bifite ubwiza bwemejwe',
    
    // CTA
    readyTransform: 'Witeguye Guhindura Ubucuruzi bw\'Ubuhinzi?',
    joinThousands: 'Jya mu bahinzi n\'abaguzi ibihumbi bakoresha AgriConnect Rwanda'
  },
  
  fr: {
    // Navigation
    home: 'Accueil',
    farmerRegistration: 'Inscription Agriculteur',
    adminDashboard: 'Tableau de Bord Admin',
    farmerPanel: 'Panel Agriculteur',
    buyerPanel: 'Panel Acheteur',
    brokerPanel: 'Panel Courtier',
    
    // Common actions
    submit: 'Soumettre',
    cancel: 'Annuler',
    next: 'Suivant',
    previous: 'Précédent',
    save: 'Sauvegarder',
    edit: 'Modifier',
    delete: 'Supprimer',
    add: 'Ajouter',
    view: 'Voir',
    search: 'Rechercher',
    filter: 'Filtrer',
    
    // Homepage content
    heroTitle: 'Connecter les Agriculteurs Rwandais à de Meilleurs Marchés',
    heroSubtitle: 'Rejoignez des milliers d\'agriculteurs, acheteurs et courtiers construisant un avenir agricole plus fort pour le Rwanda.',
    joinAsFarmer: 'Rejoindre comme Agriculteur',
    joinAsBuyer: 'Rejoindre comme Acheteur',
    getStarted: 'Commencer Aujourd\'hui',
    learnMore: 'En Savoir Plus',
    
    // Farmer Registration
    personalInformation: 'Informations Personnelles',
    firstName: 'Prénom',
    lastName: 'Nom',
    nationalId: 'Carte d\'Identité Nationale',
    phoneNumber: 'Numéro de Téléphone',
    email: 'E-mail',
    financialAccounts: 'Comptes Financiers',
    bankAccounts: 'Comptes Bancaires',
    mobileMoneyAccounts: 'Comptes Mobile Money',
    farmLocations: 'Emplacements des Fermes',
    reviewSubmit: 'Réviser et Soumettre',
    
    // Language switcher
    language: 'Langue',
    english: 'Anglais',
    kinyarwanda: 'Kinyarwanda',
    french: 'Français',
    
    // Additional homepage content
    proudlyRwandan: 'Fièrement Rwandais',
    empoweringFarmers: 'Autonomiser les Agriculteurs du Rwanda',
    digitalMarketplace: 'Le marché numérique connectant agriculteurs, acheteurs et courtiers à travers le Rwanda. Prix équitables, transactions sécurisées, confiance gouvernementale.',
    governmentVerified: 'Vérifié par le Gouvernement',
    securePayments: 'Paiements Sécurisés',
    transformingAgriculture: 'Transformer l\'Agriculture du Rwanda',
    realTimeImpact: 'Impact en temps réel sur notre plateforme, soutenant les agriculteurs et stimulant la croissance économique',
    whyChoose: 'Pourquoi Choisir AgriConnect Rwanda?',
    builtForRwandan: 'Conçu pour les agriculteurs rwandais, soutenu par la confiance gouvernementale, conçu pour la croissance',
    
    // Header
    notifications: 'Notifications',
    profile: 'Profil',
    logout: 'Déconnexion',
    settings: 'Paramètres',
    
    // Admin Dashboard
    totalFarmers: 'Total Agriculteurs',
    totalBuyers: 'Total Acheteurs',
    totalTransactions: 'Total Transactions',
    revenue: 'Revenus',
    activeListings: 'Annonces Actives',
    pendingApprovals: 'Approbations en Attente',
    disputeResolution: 'Résolution de Litiges',
    userManagement: 'Gestion des Utilisateurs',
    systemHealth: 'Santé du Système',
    reports: 'Rapports',
    analytics: 'Analyses',
    
    // Farmer Panel
    myListings: 'Mes Annonces',
    createListing: 'Créer une Annonce',
    orders: 'Commandes',
    earnings: 'Gains',
    productName: 'Nom du Produit',
    price: 'Prix',
    quantity: 'Quantité',
    status: 'Statut',
    active: 'Actif',
    sold: 'Vendu',
    pending: 'En Attente',
    totalEarnings: 'Gains Totaux',
    thisMonth: 'Ce Mois',
    pendingOrders: 'Commandes en Attente',
    completedOrders: 'Commandes Terminées',
    
    // Buyer Panel
    marketplace: 'Marché',
    myOrders: 'Mes Commandes',
    favorites: 'Favoris',
    cart: 'Panier',
    checkout: 'Paiement',
    orderHistory: 'Historique des Commandes',
    orderTotal: 'Total de la Commande',
    deliveryAddress: 'Adresse de Livraison',
    paymentMethod: 'Mode de Paiement',
    
    // Broker Panel
    commissions: 'Commissions',
    clients: 'Clients',
    transactions: 'Transactions',
    performance: 'Performance',
    totalCommission: 'Commission Totale',
    activeClients: 'Clients Actifs',
    successfulDeals: 'Affaires Réussies',
    
    // Footer
    forFarmers: 'Pour les Agriculteurs',
    forBuyers: 'Pour les Acheteurs',
    support: 'Support',
    listProducts: 'Listez Vos Produits',
    getFairPrices: 'Obtenez des Prix Équitables',
    marketAccess: 'Accès au Marché',
    qualityProducts: 'Produits de Qualité',
    directFromFarmers: 'Directement des Agriculteurs',
    bulkOrders: 'Commandes en Gros',
    verifiedSuppliers: 'Fournisseurs Vérifiés',
    helpCenter: 'Centre d\'Aide',
    contactUs: 'Contactez-Nous',
    training: 'Formation',
    governmentPartners: 'Partenaires Gouvernementaux',
    copyrightText: '© 2024 AgriConnect Rwanda. Soutenant fièrement l\'agriculture rwandaise.',
    
    // Demo Navigation
    demoNavigation: 'Navigation de Démonstration:',
    
    // Common terms
    products: 'Produits',
    farmers: 'Agriculteurs',
    buyers: 'Acheteurs',
    brokers: 'Courtiers',
    agents: 'Agents',
    location: 'Emplacement',
    category: 'Catégorie',
    date: 'Date',
    time: 'Heure',
    amount: 'Montant',
    total: 'Total',
    available: 'Disponible',
    unavailable: 'Indisponible'
  }
};

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('en');

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
  };

  const t = translations[currentLanguage];

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}