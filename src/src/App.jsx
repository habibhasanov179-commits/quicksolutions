import { useState, useEffect, useRef } from "react";

// ── TOKENS ────────────────────────────────────────────────────────────────
const C = {
  bg:      "#f8f6f1",
  paper:   "#ffffff",
  ink:     "#0f0d0a",
  muted:   "#6b6358",
  line:    "#e8e2d8",
  line2:   "#d0c8ba",
  accent:  "#1a1a2e",
  gold:    "#d4a017",
  gold2:   "#e8c547",
  green:   "#1a6b3c",
  green2:  "#2a9d5c",
  blue:    "#1a3a6b",
  blue2:   "#2a5abf",
  purple:  "#4a1a7a",
  purple2: "#7a3abf",
  teal:    "#0f5c5c",
  teal2:   "#1a9a9a",
  red:     "#8b1a1a",
};

// ── TRANSLATIONS ──────────────────────────────────────────────────────────
const T = {
  ru: {
    nav: ["Продукты", "О нас", "Цены", "Партнёры", "Контакт"],
    navStart: "Начать →",
    heroTitle: ["Умные решения", "для вашего", "бизнеса"],
    heroDesc: "Платформа AI-инструментов для малого бизнеса Азербайджана. Аналитика, инвентаризация, бухгалтерия — всё в одном месте.",
    heroBtn1: "Смотреть продукты ↓",
    heroBtn2: "Связаться с нами",
    statsLabels: ["точек под управлением", "транзакций проанализировано", "продуктов в разработке"],
    productsTitle: "Наши продукты",
    productsSubtitle: "Всё что нужно для управления бизнесом",
    productsDesc: "Каждый продукт решает конкретную боль. Используйте отдельно или все вместе.",
    aboutTitle: "Строим технологии для",
    aboutTitleAccent: "азербайджанского",
    aboutTitleEnd: "бизнеса",
    aboutP1: "QuickSolutions начался с QuickCup — системы телеметрии для кофейных автоматов. Мы на себе прошли все боли малого бизнеса: ручной учёт в Excel, непонятные расходы, отсутствие аналитики.",
    aboutP2: "Теперь строим инструменты которые решают эти проблемы. Для кафе, магазинов, салонов, аптек — для любого малого бизнеса в Азербайджане.",
    aboutFeatures: [
      { icon: "🇦🇿", title: "Локальный продукт", desc: "Созданы для реалий азербайджанского бизнеса — ƏDV, Clopos, 1C, местные банки" },
      { icon: "🤖", title: "AI в основе", desc: "Не просто данные — конкретные рекомендации и предсказания от искусственного интеллекта" },
      { icon: "💰", title: "Доступная цена", desc: "От ₼59/мес — дешевле чем один обед. Окупается с первого месяца использования" },
      { icon: "📱", title: "Всё через WhatsApp", desc: "Уведомления, отчёты и поддержка — туда где вы уже общаетесь каждый день" },
    ],
    pricingTitle: "Прозрачные цены",
    pricingDesc: "Начните с бесплатной консультации. Подписка — без обязательств.",
    pricingTag: "Цены",
    pricingBadge: "САМЫЙ ПОПУЛЯРНЫЙ",
    plans: [
      { name: "Старт", desc: "Для малого бизнеса с одной точкой", cta: "Начать бесплатно" },
      { name: "Бизнес", desc: "Для бизнеса с несколькими точками", cta: "Выбрать тариф" },
      { name: "Про", desc: "Полная платформа без ограничений", cta: "Связаться" },
    ],
    forWhomTitle: "Работаем с любым малым бизнесом",
    forWhomTag: "Для кого",
    businesses: [
      { icon: "☕", name: "Кафе и рестораны", desc: "Анализ меню, расходов, трафика" },
      { icon: "🛍️", name: "Розничные магазины", desc: "Инвентаризация, маржа, поставщики" },
      { icon: "💅", name: "Салоны красоты", desc: "Мастера, услуги, лояльность" },
      { icon: "💊", name: "Аптеки", desc: "Складской учёт, сроки годности" },
      { icon: "🤖", name: "Вендинг операторы", desc: "Телеметрия, остатки, выручка" },
      { icon: "🏋️", name: "Фитнес и спорт", desc: "Абонементы, загрузка, тренеры" },
      { icon: "🏥", name: "Медицинские клиники", desc: "Пациенты, расходники, выручка" },
      { icon: "🏗️", name: "Строительство", desc: "Материалы, подрядчики, сметы" },
    ],
    partnersTag: "Партнёры",
    partnersTitle: "Бизнесы которые доверяют QuickSolutions",
    partnersDesc: "Наши партнёры — первые кто внедрил платформу и помогает нам сделать её лучше.",
    partnerBadge: "FEATURED PARTNER",
    partnerDesc: "QuickCup — первый бизнес на платформе QuickSolutions. Сеть из 58 кофейных автоматов по всему Баку. Используют QuickInsight для анализа продаж и телеметрии в реальном времени.",
    partnerStats: ["точек в Баку", "заказов проанализировано", "напитков в меню", "год основания"],
    becomePartnerTitle: "Станьте партнёром",
    becomePartnerDesc: "Внедрите QuickSolutions в свой бизнес одним из первых. Специальные условия, прямой доступ к команде и влияние на развитие продукта.",
    becomePartnerBenefits: ["Ранний доступ к новым продуктам", "Скидка 30% навсегда", "Прямая линия с командой", "Упоминание на сайте"],
    becomePartnerCta: "Стать партнёром →",
    contactTag: "Связаться",
    contactTitle: ["Начните сегодня.", "Первый месяц бесплатно."],
    contactDesc: "Напишите нам в WhatsApp — загрузите данные вашего бизнеса и получите первую консультацию бесплатно. Без регистрации, без карты.",
    jobsTitle: "Ищем sales менеджеров",
    jobsDesc: "Комиссия ₼50 за каждого клиента · Удалённо · Гибкий график",
    statusLabels: { active: "Доступно", soon: "Скоро", plan: "В планах" },
    perMonth: "/мес",
    footerRights: "QuickSolutions MMC · Баку, Азербайджан",
    waitlistTitle: "Оставьте контакты",
    waitlistDesc: "Оставьте контакты — мы свяжемся первыми когда продукт будет готов. Ранний доступ и специальная цена.",
    waitlistFields: ["Ваше имя и компания", "Email", "WhatsApp номер"],
    waitlistPhs: ["Например: Алиев Руслан, Кафе Нар", "email@example.com", "+994 XX XXX XX XX"],
    waitlistCta: "Записаться в список →",
    waitlistDone: "Записали!",
    waitlistDoneDesc: "Напишем в WhatsApp как только продукт будет готов. Ранний доступ по специальной цене — гарантировано.",
    close: "Закрыть",
  },
  az: {
    nav: ["Məhsullar", "Haqqımızda", "Qiymətlər", "Tərəfdaşlar", "Əlaqə"],
    navStart: "Başla →",
    heroTitle: ["Biznesiniz üçün", "ağıllı", "həllər"],
    heroDesc: "Azərbaycan kiçik biznesləri üçün AI alətlər platforması. Analitika, inventarizasiya, mühasibatlıq — hamısı bir yerdə.",
    heroBtn1: "Məhsullara bax ↓",
    heroBtn2: "Bizimlə əlaqə",
    statsLabels: ["idarə olunan nöqtə", "analiz edilmiş əməliyyat", "inkişafdakı məhsul"],
    productsTitle: "Məhsullarımız",
    productsSubtitle: "Biznesinizi idarə etmək üçün lazım olan hər şey",
    productsDesc: "Hər məhsul konkret problemi həll edir. Ayrıca və ya birlikdə istifadə edin.",
    aboutTitle: "Azərbaycan",
    aboutTitleAccent: "biznesləri",
    aboutTitleEnd: "üçün texnologiya",
    aboutP1: "QuickSolutions, QuickCup — qəhvə avtomatları üçün telemetriya sistemi ilə başladı. Biz kiçik biznesin bütün ağrılarını yaşadıq: Excel-də əl ilə uçot, anlaşılmaz xərclər, analitikanın olmaması.",
    aboutP2: "İndi bu problemləri həll edən alətlər qururuq. Kafelər, mağazalar, gözəllik salonları, əczaxanalar — Azərbaycandakı istənilən kiçik biznes üçün.",
    aboutFeatures: [
      { icon: "🇦🇿", title: "Yerli məhsul", desc: "Azərbaycan biznesinin reallıqları üçün — ƏDV, Clopos, 1C, yerli banklar" },
      { icon: "🤖", title: "AI əsaslı", desc: "Sadəcə data deyil — süni intellektdən konkret tövsiyələr və proqnozlar" },
      { icon: "💰", title: "Əlçatan qiymət", desc: "Ayda ₼59-dan — bir nahar yeməyindən ucuz. İlk aydan özünü ödəyir" },
      { icon: "📱", title: "Hamısı WhatsApp ilə", desc: "Bildirişlər, hesabatlar və dəstək — artıq ünsiyyət qurduğunuz yerdə" },
    ],
    pricingTitle: "Şəffaf qiymətlər",
    pricingDesc: "Pulsuz konsultasiyadan başlayın. Abunəlik — öhdəliksiz.",
    pricingTag: "Qiymətlər",
    pricingBadge: "ƏN POPULYAR",
    plans: [
      { name: "Start", desc: "Bir nöqtəsi olan kiçik biznes üçün", cta: "Pulsuz başla" },
      { name: "Biznes", desc: "Bir neçə nöqtəsi olan biznes üçün", cta: "Tarifdən seçin" },
      { name: "Pro", desc: "Məhdudiyyətsiz tam platforma", cta: "Əlaqə saxla" },
    ],
    forWhomTitle: "İstənilən kiçik bizneslə işləyirik",
    forWhomTag: "Kim üçün",
    businesses: [
      { icon: "☕", name: "Kafe və restoranlar", desc: "Menyu, xərclər, trafik analizi" },
      { icon: "🛍️", name: "Pərakəndə mağazalar", desc: "İnventarizasiya, marja, təchizatçılar" },
      { icon: "💅", name: "Gözəllik salonları", desc: "Ustalar, xidmətlər, loyallıq" },
      { icon: "💊", name: "Əczaxanalar", desc: "Anbar uçotu, yararlılıq müddəti" },
      { icon: "🤖", name: "Vending operatorları", desc: "Telemetriya, qalıqlar, gəlir" },
      { icon: "🏋️", name: "Fitness və idman", desc: "Abonementlər, yüklənmə, məşqçilər" },
      { icon: "🏥", name: "Tibb klinikalar", desc: "Xəstələr, sarf materiallar, gəlir" },
      { icon: "🏗️", name: "Tikinti", desc: "Materiallar, podratçılar, smetalar" },
    ],
    partnersTag: "Tərəfdaşlar",
    partnersTitle: "QuickSolutions-a güvənən bizneslər",
    partnersDesc: "Tərəfdaşlarımız platformanı ilk tətbiq edənlər və onu daha yaxşı etməyimizə kömək edənlərdir.",
    partnerBadge: "FEATURED PARTNER",
    partnerDesc: "QuickCup — QuickSolutions platformasındakı ilk biznesdir. Bakı genelinde 58 qəhvə avtomatından ibarət şəbəkə. Satış analizi və real vaxt telemetriyası üçün QuickInsight istifadə edirlər.",
    partnerStats: ["Bakıda nöqtə", "analiz edilmiş sifariş", "menüdə içki", "əsas il"],
    becomePartnerTitle: "Tərəfdaş olun",
    becomePartnerDesc: "QuickSolutions-u ilk bizneslərdən biri kimi tətbiq edin. Xüsusi şərtlər, komandaya birbaşa çıxış və məhsulun inkişafına təsir.",
    becomePartnerBenefits: ["Yeni məhsullara erkən giriş", "Həmişəlik 30% endirim", "Komanda ilə birbaşa xətt", "Saytda qeyd"],
    becomePartnerCta: "Tərəfdaş ol →",
    contactTag: "Əlaqə",
    contactTitle: ["Bu gün başlayın.", "İlk ay pulsuz."],
    contactDesc: "WhatsApp-da yazın — biznes məlumatlarınızı yükləyin və ilk konsultasiyanı pulsuz alın. Qeydiyyat yoxdur, kart yoxdur.",
    jobsTitle: "Sales menecerlər axtarırıq",
    jobsDesc: "Hər müştəri üçün ₼50 komissiya · Uzaqdan · Çevik qrafik",
    statusLabels: { active: "Mövcuddur", soon: "Tezliklə", plan: "Planlarda" },
    perMonth: "/ay",
    footerRights: "QuickSolutions MMC · Bakı, Azərbaycan",
    waitlistTitle: "Əlaqə məlumatlarınızı buraxın",
    waitlistDesc: "Məlumatları buraxın — məhsul hazır olanda ilk biz əlaqə saxlayacağıq. Erkən giriş və xüsusi qiymət.",
    waitlistFields: ["Adınız və şirkətin", "Email", "WhatsApp nömrəsi"],
    waitlistPhs: ["Məsələn: Əliyev Ruslan, Kafe Nar", "email@example.com", "+994 XX XXX XX XX"],
    waitlistCta: "Siyahıya yazıl →",
    waitlistDone: "Qeyd etdik!",
    waitlistDoneDesc: "Məhsul hazır olanda WhatsApp-da yazacağıq. Erkən giriş xüsusi qiymətlə — zəmanətlidir.",
    close: "Bağla",
  },
  en: {
    nav: ["Products", "About", "Pricing", "Partners", "Contact"],
    navStart: "Get Started →",
    heroTitle: ["Smart solutions", "for your", "business"],
    heroDesc: "AI-powered platform for small businesses in Azerbaijan. Analytics, inventory, accounting — all in one place.",
    heroBtn1: "View products ↓",
    heroBtn2: "Contact us",
    statsLabels: ["locations managed", "transactions analyzed", "products in development"],
    productsTitle: "Our Products",
    productsSubtitle: "Everything you need to run your business",
    productsDesc: "Each product solves a specific pain. Use them separately or together.",
    aboutTitle: "Building technology for",
    aboutTitleAccent: "Azerbaijani",
    aboutTitleEnd: "businesses",
    aboutP1: "QuickSolutions started with QuickCup — a telemetry system for coffee vending machines. We experienced all the pains of small business firsthand: manual Excel tracking, unclear expenses, no analytics.",
    aboutP2: "Now we're building tools that solve these problems. For cafes, stores, salons, pharmacies — for any small business in Azerbaijan.",
    aboutFeatures: [
      { icon: "🇦🇿", title: "Local product", desc: "Built for Azerbaijani business realities — VAT, Clopos, 1C, local banks" },
      { icon: "🤖", title: "AI-powered", desc: "Not just data — concrete recommendations and predictions from artificial intelligence" },
      { icon: "💰", title: "Affordable pricing", desc: "From ₼59/mo — less than one lunch. Pays for itself from the first month" },
      { icon: "📱", title: "Everything via WhatsApp", desc: "Notifications, reports and support — where you already communicate every day" },
    ],
    pricingTitle: "Transparent pricing",
    pricingDesc: "Start with a free consultation. Subscription — no obligations.",
    pricingTag: "Pricing",
    pricingBadge: "MOST POPULAR",
    plans: [
      { name: "Starter", desc: "For small business with one location", cta: "Start for free" },
      { name: "Business", desc: "For business with multiple locations", cta: "Choose plan" },
      { name: "Pro", desc: "Full platform, no limits", cta: "Contact us" },
    ],
    forWhomTitle: "We work with any small business",
    forWhomTag: "Who it's for",
    businesses: [
      { icon: "☕", name: "Cafes & restaurants", desc: "Menu, cost, traffic analysis" },
      { icon: "🛍️", name: "Retail stores", desc: "Inventory, margin, suppliers" },
      { icon: "💅", name: "Beauty salons", desc: "Staff, services, loyalty" },
      { icon: "💊", name: "Pharmacies", desc: "Stock tracking, expiry dates" },
      { icon: "🤖", name: "Vending operators", desc: "Telemetry, stock, revenue" },
      { icon: "🏋️", name: "Fitness & sports", desc: "Memberships, capacity, trainers" },
      { icon: "🏥", name: "Medical clinics", desc: "Patients, supplies, revenue" },
      { icon: "🏗️", name: "Construction", desc: "Materials, contractors, estimates" },
    ],
    partnersTag: "Partners",
    partnersTitle: "Businesses that trust QuickSolutions",
    partnersDesc: "Our partners are the first to implement the platform and help us make it better.",
    partnerBadge: "FEATURED PARTNER",
    partnerDesc: "QuickCup is the first business on the QuickSolutions platform. A network of 58 coffee vending machines across Baku. They use QuickInsight for sales analysis and real-time telemetry.",
    partnerStats: ["locations in Baku", "orders analyzed", "drinks on menu", "founded"],
    becomePartnerTitle: "Become a partner",
    becomePartnerDesc: "Implement QuickSolutions as one of the first businesses. Special terms, direct access to the team, and influence over product development.",
    becomePartnerBenefits: ["Early access to new products", "30% discount forever", "Direct line with the team", "Mention on website"],
    becomePartnerCta: "Become a partner →",
    contactTag: "Contact",
    contactTitle: ["Start today.", "First month free."],
    contactDesc: "Write to us on WhatsApp — upload your business data and get the first consultation for free. No registration, no card.",
    jobsTitle: "We're hiring sales managers",
    jobsDesc: "₼50 commission per client · Remote · Flexible hours",
    statusLabels: { active: "Available", soon: "Coming soon", plan: "Planned" },
    perMonth: "/mo",
    footerRights: "QuickSolutions LLC · Baku, Azerbaijan",
    waitlistTitle: "Leave your contacts",
    waitlistDesc: "Leave your details — we'll be the first to reach out when the product is ready. Early access and a special price guaranteed.",
    waitlistFields: ["Your name and company", "Email", "WhatsApp number"],
    waitlistPhs: ["E.g.: John Smith, Cafe Nar", "email@example.com", "+994 XX XXX XX XX"],
    waitlistCta: "Join the waitlist →",
    waitlistDone: "You're on the list!",
    waitlistDoneDesc: "We'll message you on WhatsApp as soon as the product is ready. Early access at a special price — guaranteed.",
    close: "Close",
  },
};

const PRODUCTS_DATA = {
  ru: [
    { id: "insight", name: "QuickInsight", tagline: "AI-консультант для бизнеса", desc: "Загружаете данные из Clopos, 1C или Excel — получаете конкретный план роста прибыли. Без воды, только цифры и шаги.", icon: "📊", color: C.gold, colorLight: "#fdf6e3", status: "active", price: "от ₼59/мес", features: ["Анализ CSV, Excel, 1C, Clopos", "AI план действий за 2 мин", "Сравнение с рынком", "Ежемесячный PDF отчёт"], cta: "Попробовать бесплатно" },
    { id: "stock", name: "QuickStock", tagline: "Умная инвентаризация", desc: "Сканируй штрихкоды телефоном. AI предсказывает когда закончится товар и автоматически уведомляет поставщика.", icon: "📦", color: C.blue2, colorLight: "#e8f0fc", status: "active", price: "от ₼79/мес", features: ["Сканирование через телефон", "AI прогноз остатков", "Алерты по запасам", "Автозаказ поставщику"], cta: "Попробовать бесплатно" },
    { id: "accounting", name: "QuickAccounting", tagline: "Бухгалтерия без бухгалтера", desc: "Автоматический учёт доходов и расходов. ƏDV декларации, отчёты для налоговой, P&L в реальном времени.", icon: "🧾", color: C.green2, colorLight: "#e6f7ed", status: "soon", price: "от ₼99/мес", features: ["Автоматический P&L", "ƏDV расчёт и декларации", "Интеграция с банками", "Отчёты для налоговой"], cta: "Записаться в список" },
    { id: "hr", name: "QuickHR", tagline: "Управление персоналом", desc: "Табели, зарплаты, DSMF отчисления — всё автоматически. Учёт рабочего времени и KPI сотрудников.", icon: "👥", color: C.purple2, colorLight: "#f0e8fc", status: "plan", price: "от ₼49/мес", features: ["Табели и зарплаты", "DSMF автоматически", "KPI сотрудников", "Онбординг и документы"], cta: "Следить за запуском" },
    { id: "crm", name: "QuickCRM", tagline: "CRM для малого бизнеса", desc: "База клиентов, история покупок, программа лояльности. Автоматические рассылки через WhatsApp.", icon: "🤝", color: C.teal2, colorLight: "#e6f7f7", status: "plan", price: "от ₼59/мес", features: ["База клиентов", "История покупок", "Программа лояльности", "WhatsApp рассылки"], cta: "Следить за запуском" },
  ],
  az: [
    { id: "insight", name: "QuickInsight", tagline: "Biznes üçün AI-konsultant", desc: "Clopos, 1C və ya Excel-dən məlumat yükləyin — mənfəətin artımı üçün konkret plan alın. Su olmadan, yalnız rəqəmlər və addımlar.", icon: "📊", color: C.gold, colorLight: "#fdf6e3", status: "active", price: "₼59/ay-dan", features: ["CSV, Excel, 1C, Clopos analizi", "2 dəqiqədə AI fəaliyyət planı", "Bazarla müqayisə", "Aylıq PDF hesabat"], cta: "Pulsuz sınayın" },
    { id: "stock", name: "QuickStock", tagline: "Ağıllı inventarizasiya", desc: "Telefonunuzla barkodları skanlayin. AI malın nə vaxt bitəcəyini proqnozlaşdırır və avtomatik olaraq təchizatçıya məlumat verir.", icon: "📦", color: C.blue2, colorLight: "#e8f0fc", status: "active", price: "₼79/ay-dan", features: ["Telefonla skan etmə", "AI qalıq proqnozu", "Stok xəbərdarlıqları", "Avtomatik sifariş"], cta: "Pulsuz sınayın" },
    { id: "accounting", name: "QuickAccounting", tagline: "Mühasibirsiz mühasibatlıq", desc: "Gəlir və xərclərin avtomatik uçotu. ƏDV bəyannamələri, vergi hesabatları, real vaxtda P&L.", icon: "🧾", color: C.green2, colorLight: "#e6f7ed", status: "soon", price: "₼99/ay-dan", features: ["Avtomatik P&L", "ƏDV hesabı və bəyannamələr", "Bank inteqrasiyası", "Vergi hesabatları"], cta: "Siyahıya yazıl" },
    { id: "hr", name: "QuickHR", tagline: "Kadr idarəetməsi", desc: "Cədvəllər, maaşlar, DSMF ayırmaları — hamısı avtomatik. İş vaxtı uçotu və işçi KPI-ları.", icon: "👥", color: C.purple2, colorLight: "#f0e8fc", status: "plan", price: "₼49/ay-dan", features: ["Cədvəllər və maaşlar", "Avtomatik DSMF", "İşçi KPI-ları", "Onboarding və sənədlər"], cta: "Buraxılışı izlə" },
    { id: "crm", name: "QuickCRM", tagline: "Kiçik biznes üçün CRM", desc: "Müştəri bazası, alış tarixi, loyallıq proqramı. WhatsApp vasitəsilə avtomatik göndərişlər.", icon: "🤝", color: C.teal2, colorLight: "#e6f7f7", status: "plan", price: "₼59/ay-dan", features: ["Müştəri bazası", "Alış tarixi", "Loyallıq proqramı", "WhatsApp göndərişləri"], cta: "Buraxılışı izlə" },
  ],
  en: [
    { id: "insight", name: "QuickInsight", tagline: "AI business consultant", desc: "Upload data from Clopos, 1C or Excel — get a concrete profit growth plan. No fluff, just numbers and steps.", icon: "📊", color: C.gold, colorLight: "#fdf6e3", status: "active", price: "from ₼59/mo", features: ["CSV, Excel, 1C, Clopos analysis", "AI action plan in 2 min", "Market benchmarking", "Monthly PDF report"], cta: "Try for free" },
    { id: "stock", name: "QuickStock", tagline: "Smart inventory", desc: "Scan barcodes with your phone. AI predicts when stock runs out and automatically notifies your supplier.", icon: "📦", color: C.blue2, colorLight: "#e8f0fc", status: "active", price: "from ₼79/mo", features: ["Phone barcode scanning", "AI stock forecast", "Low stock alerts", "Auto supplier orders"], cta: "Try for free" },
    { id: "accounting", name: "QuickAccounting", tagline: "Accounting without accountant", desc: "Automatic income and expense tracking. VAT declarations, tax reports, real-time P&L.", icon: "🧾", color: C.green2, colorLight: "#e6f7ed", status: "soon", price: "from ₼99/mo", features: ["Automatic P&L", "VAT calculation & filing", "Bank integrations", "Tax reports"], cta: "Join waitlist" },
    { id: "hr", name: "QuickHR", tagline: "Staff management", desc: "Timesheets, salaries, social insurance — all automated. Work time tracking and employee KPIs.", icon: "👥", color: C.purple2, colorLight: "#f0e8fc", status: "plan", price: "from ₼49/mo", features: ["Timesheets & salaries", "Auto social insurance", "Employee KPIs", "Onboarding & documents"], cta: "Follow launch" },
    { id: "crm", name: "QuickCRM", tagline: "CRM for small business", desc: "Customer database, purchase history, loyalty program. Automated WhatsApp campaigns.", icon: "🤝", color: C.teal2, colorLight: "#e6f7f7", status: "plan", price: "from ₼59/mo", features: ["Customer database", "Purchase history", "Loyalty program", "WhatsApp campaigns"], cta: "Follow launch" },
  ],
};

const PLAN_FEATURES = {
  ru: [
    ["QuickInsight (1 точка)", "Ежемесячный анализ", "PDF отчёт", "WhatsApp поддержка"],
    ["QuickInsight (до 5 точек)", "QuickStock (инвентаризация)", "Еженедельные отчёты", "Сравнение локаций", "Приоритетная поддержка"],
    ["Все продукты QuickSolutions", "Неограниченно точек", "QuickAccounting", "Личный аналитик", "SLA 4 часа"],
  ],
  az: [
    ["QuickInsight (1 nöqtə)", "Aylıq analiz", "PDF hesabat", "WhatsApp dəstəyi"],
    ["QuickInsight (5 nöqtəyə qədər)", "QuickStock (inventarizasiya)", "Həftəlik hesabatlar", "Lokasiyaların müqayisəsi", "Prioritet dəstək"],
    ["Bütün QuickSolutions məhsulları", "Limitsiz nöqtələr", "QuickAccounting", "Şəxsi analitik", "4 saatlıq SLA"],
  ],
  en: [
    ["QuickInsight (1 location)", "Monthly analysis", "PDF report", "WhatsApp support"],
    ["QuickInsight (up to 5 locations)", "QuickStock (inventory)", "Weekly reports", "Location comparison", "Priority support"],
    ["All QuickSolutions products", "Unlimited locations", "QuickAccounting", "Personal analyst", "4-hour SLA"],
  ],
};

const STATS_DATA = [
  { n: "58+", key: 0 },
  { n: "20,000+", key: 1 },
  { n: "6", key: 2 },
];

const PARTNER_STATS_N = ["58", "20,000+", "12", "2026"];


// ── COUNTER ───────────────────────────────────────────────────────────────
function useCounter(target, duration = 2000) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const tick = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return [val, ref];
}

// ── WAITLIST MODAL ────────────────────────────────────────────────────────
function WaitlistModal({ product, onClose, t = T.ru }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [biz, setBiz] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 200, background: "#00000088", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }} onClick={onClose}>
      <div style={{ background: C.paper, borderRadius: 20, padding: "36px 40px", maxWidth: 480, width: "100%", boxShadow: "0 32px 80px #00000030" }} onClick={e => e.stopPropagation()}>
        {!sent ? (
          <>
            <div style={{ fontSize: 32, marginBottom: 12 }}>{product.icon}</div>
            <h3 style={{ fontSize: 24, fontWeight: 900, letterSpacing: "-0.03em", margin: "0 0 8px", fontFamily: "Georgia, serif" }}>{product.name}</h3>
            <p style={{ fontSize: 14, color: C.muted, margin: "0 0 28px", lineHeight: 1.7 }}>{t.waitlistDesc}</p>
            {[
              { label: t.waitlistFields[0], val: biz, set: setBiz, ph: t.waitlistPhs[0] },
              { label: t.waitlistFields[1], val: email, set: setEmail, ph: t.waitlistPhs[1] },
              { label: t.waitlistFields[2], val: phone, set: setPhone, ph: t.waitlistPhs[2] },
            ].map(f => (
              <div key={f.label} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 12, color: C.muted, marginBottom: 5 }}>{f.label}</div>
                <input value={f.val} onChange={e => f.set(e.target.value)} placeholder={f.ph}
                  style={{ width: "100%", border: `1px solid ${C.line2}`, borderRadius: 8, padding: "10px 14px", fontSize: 14, fontFamily: "inherit", outline: "none", background: C.bg, boxSizing: "border-box" }} />
              </div>
            ))}
            <button onClick={() => setSent(true)} style={{ width: "100%", background: product.color, color: "#fff", border: "none", borderRadius: 10, padding: "14px", fontSize: 15, fontWeight: 800, cursor: "pointer", fontFamily: "Georgia, serif", marginTop: 4 }}>
              {t.waitlistCta}
            </button>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "20px 0" }}>
            <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
            <h3 style={{ fontSize: 22, fontWeight: 900, fontFamily: "Georgia, serif", marginBottom: 8 }}>{t.waitlistDone}</h3>
            <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7 }}>{t.waitlistDoneDesc}</p>
            <button onClick={onClose} style={{ marginTop: 20, background: C.ink, color: "#fff", border: "none", borderRadius: 8, padding: "10px 24px", fontSize: 13, cursor: "pointer", fontFamily: "inherit" }}>{t.close}</button>
          </div>
        )}
      </div>
    </div>
  );
}

// ── MAIN ──────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [modal, setModal] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);
  const [lang, setLang] = useState("ru");

  const t = T[lang];
  const PRODUCTS = PRODUCTS_DATA[lang];
  const planFeatures = PLAN_FEATURES[lang];

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div style={{ background: C.bg, color: C.ink, fontFamily: "'Georgia', serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Sans:wght@400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        ::selection { background: ${C.gold}44; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-thumb { background: ${C.line2}; border-radius: 3px; }
        body { background: ${C.bg}; }
        .product-card { transition: all 0.3s; }
        .product-card:hover { transform: translateY(-6px); box-shadow: 0 24px 60px #00000015; }
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: ${C.ink} !important; }
        .cta-btn { transition: all 0.2s; }
        .cta-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(0,0,0,0.15); }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "0 28px", height: 64,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(248,246,241,0.95)" : "transparent",
        borderBottom: scrolled ? `1px solid ${C.line}` : "none",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transition: "all 0.3s",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 10, background: C.ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 18, filter: "invert(1)" }}>⚡</span>
          </div>
          <div>
            <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1, fontFamily: "Georgia, serif" }}>
              Quick<span style={{ color: C.gold }}>Solutions</span>
            </div>
            <div style={{ fontSize: 9, color: C.muted, letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "DM Sans, sans-serif" }}>Azerbaijan</div>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: "flex", gap: 20, alignItems: "center", marginLeft: 24 }}>
          {t.nav.map((label, i) => {
            const ids = ["products","about","pricing","partners","contact"];
            return (
              <span key={label} onClick={() => document.getElementById(ids[i])?.scrollIntoView({ behavior: "smooth" })} className="nav-link" style={{ fontSize: 13, color: C.muted, textDecoration: "none", fontFamily: "DM Sans, sans-serif", cursor: "pointer", whiteSpace: "nowrap" }}>{label}</span>
            );
          })}
          {/* Lang switcher */}
          <div style={{ display: "flex", gap: 1, background: C.line, borderRadius: 8, padding: 3, flexShrink: 0 }}>
            {["AZ","RU","EN"].map(l => (
              <button key={l} onClick={() => setLang(l.toLowerCase())} style={{ background: lang === l.toLowerCase() ? C.paper : "transparent", color: lang === l.toLowerCase() ? C.ink : C.muted, border: "none", borderRadius: 5, padding: "4px 8px", fontSize: 11, fontWeight: lang === l.toLowerCase() ? 800 : 400, cursor: "pointer", fontFamily: "monospace", transition: "all 0.15s" }}>{l}</button>
            ))}
          </div>
          <span onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="cta-btn" style={{ background: C.ink, color: "#fff", borderRadius: 9, padding: "9px 18px", fontSize: 12, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif", whiteSpace: "nowrap", flexShrink: 0 }}>
            {t.navStart}
          </span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "120px 48px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        {/* Background pattern */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: `radial-gradient(circle at 1px 1px, ${C.line2} 1px, transparent 0)`, backgroundSize: "32px 32px", opacity: 0.6 }} />

        {/* Decorative elements */}
        <div style={{ position: "absolute", top: "15%", left: "8%", width: 280, height: 280, borderRadius: "50%", background: `radial-gradient(circle, ${C.gold}18 0%, transparent 70%)` }} />
        <div style={{ position: "absolute", bottom: "15%", right: "8%", width: 200, height: 200, borderRadius: "50%", background: `radial-gradient(circle, ${C.blue2}18 0%, transparent 70%)` }} />

        <div style={{ position: "relative", maxWidth: 900 }}>
          {/* Badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: C.paper, border: `1px solid ${C.line2}`, borderRadius: 100, padding: "6px 18px", marginBottom: 36, boxShadow: "0 4px 20px #00000008" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.green2, animation: "pulse 2s infinite" }} />
            <span style={{ fontSize: 12, color: C.muted, letterSpacing: "0.08em", fontFamily: "DM Sans, sans-serif" }}>
              {lang === "az" ? "Bakıda işləyirik · 2026" : lang === "en" ? "Operating in Baku · 2026" : "Работаем в Баку · 2026"}
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(44px, 7vw, 88px)", fontWeight: 900, lineHeight: 0.95, letterSpacing: "-0.04em", margin: "0 0 28px", fontFamily: "Playfair Display, Georgia, serif" }}>
            {t.heroTitle[0]}<br />{t.heroTitle[1]}<br />
            <span style={{ color: C.gold, fontStyle: "italic" }}>{t.heroTitle[2]}</span>
          </h1>
          <p style={{ fontSize: 19, color: C.muted, maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7, fontFamily: "DM Sans, sans-serif" }}>{t.heroDesc}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <span onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth" })} className="cta-btn" style={{ background: C.ink, color: "#fff", border: "none", borderRadius: 11, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif", display: "inline-block" }}>{t.heroBtn1}</span>
            <span onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="cta-btn" style={{ background: C.paper, color: C.ink, border: `1px solid ${C.line2}`, borderRadius: 11, padding: "16px 36px", fontSize: 16, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif", display: "inline-block" }}>{t.heroBtn2}</span>
          </div>
        </div>

        {/* Products preview strip */}
        <div style={{ position: "relative", marginTop: 80, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", paddingTop: 40, borderTop: `1px solid ${C.line}` }}>
          {PRODUCTS.map(p => (
            <div key={p.id} style={{ background: C.paper, border: `1px solid ${C.line}`, borderRadius: 12, padding: "10px 16px", display: "flex", alignItems: "center", gap: 8, boxShadow: "0 2px 12px #00000008" }}>
              <span style={{ fontSize: 18 }}>{p.icon}</span>
              <span style={{ fontSize: 13, fontWeight: 700, fontFamily: "DM Sans, sans-serif" }}>{p.name}</span>
              <span style={{ fontSize: 10, background: p.status === "active" ? "#e6f7ed" : (p.status === "soon" ? "#fff8e6" : "#f0f0f0"), color: p.status === "active" ? C.green2 : (p.status === "soon" ? C.gold : C.muted), borderRadius: 4, padding: "2px 7px", fontFamily: "monospace" }}>{t.statusLabels[p.status]}</span>
            </div>
          ))}
        </div>
        <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
      </section>

      {/* ── STATS ── */}
      <section style={{ padding: "60px 48px", borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}`, background: C.paper }}>
        <div style={{ maxWidth: 1000, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
          {STATS_DATA.map((s, i) => (
            <div key={i} style={{ textAlign: "center", padding: "0 24px", borderRight: i < 2 ? `1px solid ${C.line}` : "none" }}>
              <div style={{ fontSize: 36, fontWeight: 900, letterSpacing: "-0.04em", fontFamily: "Playfair Display, Georgia, serif", color: C.ink }}>{s.n}</div>
              <div style={{ fontSize: 13, color: C.muted, marginTop: 6, fontFamily: "DM Sans, sans-serif" }}>{t.statsLabels[s.key]}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRODUCTS ── */}
      <section id="products" style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: C.gold, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 14 }}>{t.productsTitle}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
              <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, fontFamily: "Playfair Display, Georgia, serif", maxWidth: 560 }}>
                {t.productsSubtitle}
              </h2>
              <p style={{ fontSize: 16, color: C.muted, maxWidth: 340, lineHeight: 1.7, fontFamily: "DM Sans, sans-serif" }}>{t.productsDesc}</p>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {PRODUCTS.map((p) => (
              <div key={p.id} className="product-card"
                style={{ background: activeProduct === p.id ? p.colorLight : C.paper, border: `1px solid ${activeProduct === p.id ? p.color + "60" : C.line}`, borderRadius: 20, padding: "32px 28px", cursor: "pointer", borderTop: `4px solid ${p.color}` }}
                onMouseEnter={() => setActiveProduct(p.id)}
                onMouseLeave={() => setActiveProduct(null)}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: p.colorLight || C.bg, border: `1px solid ${p.color}30`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26 }}>{p.icon}</div>
                  <span style={{ fontSize: 10, background: p.status === "active" ? "#e6f7ed" : (p.status === "soon" ? "#fff8e6" : "#f0f0f0"), color: p.status === "active" ? C.green2 : (p.status === "soon" ? "#b8860b" : C.muted), border: `1px solid ${p.status === "active" ? "#c0e8d0" : (p.status === "soon" ? "#e8d080" : C.line)}`, borderRadius: 6, padding: "4px 10px", fontFamily: "monospace", fontWeight: 700 }}>
                    {t.statusLabels[p.status]}
                  </span>
                </div>
                <div style={{ fontSize: 20, fontWeight: 900, letterSpacing: "-0.03em", marginBottom: 4, fontFamily: "Playfair Display, Georgia, serif" }}>{p.name}</div>
                <div style={{ fontSize: 12, color: p.color, fontWeight: 700, marginBottom: 12, fontFamily: "DM Sans, sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}>{p.tagline}</div>
                <p style={{ fontSize: 14, color: C.muted, lineHeight: 1.7, marginBottom: 20, fontFamily: "DM Sans, sans-serif" }}>{p.desc}</p>
                <div style={{ marginBottom: 24 }}>
                  {p.features.map(f => (
                    <div key={f} style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 7, fontSize: 13, fontFamily: "DM Sans, sans-serif" }}>
                      <span style={{ color: p.color, fontSize: 12 }}>✓</span>
                      <span style={{ color: C.muted }}>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 20, borderTop: `1px solid ${C.line}` }}>
                  <span style={{ fontSize: 15, fontWeight: 800, color: C.ink, fontFamily: "DM Sans, sans-serif" }}>{p.price}</span>
                  <button onClick={() => setModal(p)} className="cta-btn" style={{ background: p.color, color: "#fff", border: "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>{p.cta}</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "100px 48px", background: C.ink, color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <div style={{ fontSize: 11, color: C.gold, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>
              {lang === "az" ? "Haqqımızda" : lang === "en" ? "About us" : "О компании"}
            </div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 24, fontFamily: "Playfair Display, Georgia, serif" }}>
              {t.aboutTitle}<br /><span style={{ color: C.gold, fontStyle: "italic" }}>{t.aboutTitleAccent}</span><br />{t.aboutTitleEnd}
            </h2>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 20, fontFamily: "DM Sans, sans-serif" }}>{t.aboutP1}</p>
            <p style={{ fontSize: 16, color: "rgba(255,255,255,0.65)", lineHeight: 1.8, fontFamily: "DM Sans, sans-serif" }}>{t.aboutP2}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {t.aboutFeatures.map(item => (
              <div key={item.title} style={{ display: "flex", gap: 16, alignItems: "flex-start", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 12, padding: "16px 20px" }}>
                <span style={{ fontSize: 24, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4, fontFamily: "DM Sans, sans-serif" }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.55)", lineHeight: 1.6, fontFamily: "DM Sans, sans-serif" }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section id="pricing" style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ fontSize: 11, color: C.gold, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 14 }}>{t.pricingTag}</div>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.04em", fontFamily: "Playfair Display, Georgia, serif", marginBottom: 12 }}>{t.pricingTitle}</h2>
            <p style={{ fontSize: 16, color: C.muted, fontFamily: "DM Sans, sans-serif" }}>{t.pricingDesc}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
            {t.plans.map((plan, idx) => {
              const colors = [C.gold, C.blue2, C.purple2];
              const prices = ["₼59", "₼149", "₼349"];
              const featured = idx === 1;
              return (
                <div key={plan.name} style={{ background: featured ? C.ink : C.paper, border: `1px solid ${featured ? C.ink : C.line}`, borderRadius: 20, padding: "32px 28px", transform: featured ? "scale(1.04)" : "scale(1)", position: "relative" }}>
                  {featured && <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: C.gold, color: C.ink, borderRadius: 100, padding: "4px 16px", fontSize: 11, fontWeight: 800, whiteSpace: "nowrap", fontFamily: "DM Sans, sans-serif" }}>{t.pricingBadge}</div>}
                  <div style={{ fontSize: 18, fontWeight: 900, color: featured ? "#fff" : C.ink, fontFamily: "Playfair Display, Georgia, serif", marginBottom: 4 }}>{plan.name}</div>
                  <div style={{ fontSize: 13, color: featured ? "rgba(255,255,255,0.5)" : C.muted, marginBottom: 20, fontFamily: "DM Sans, sans-serif" }}>{plan.desc}</div>
                  <div style={{ marginBottom: 24 }}>
                    <span style={{ fontSize: 44, fontWeight: 900, color: featured ? "#fff" : C.ink, fontFamily: "Playfair Display, Georgia, serif", letterSpacing: "-0.04em" }}>{prices[idx]}</span>
                    <span style={{ fontSize: 15, color: featured ? "rgba(255,255,255,0.4)" : C.muted, fontFamily: "DM Sans, sans-serif" }}>{t.perMonth}</span>
                  </div>
                  <button onClick={() => setModal(PRODUCTS[0])} className="cta-btn" style={{ width: "100%", background: featured ? C.gold : C.ink, color: featured ? C.ink : "#fff", border: "none", borderRadius: 10, padding: "13px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif", marginBottom: 24 }}>{plan.cta}</button>
                  {planFeatures[idx].map(f => (
                    <div key={f} style={{ display: "flex", gap: 8, marginBottom: 9, fontSize: 13, fontFamily: "DM Sans, sans-serif" }}>
                      <span style={{ color: featured ? C.gold : C.green2 }}>✓</span>
                      <span style={{ color: featured ? "rgba(255,255,255,0.7)" : C.muted }}>{f}</span>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FOR WHOM ── */}
      <section style={{ padding: "80px 48px", background: C.paper, borderTop: `1px solid ${C.line}`, borderBottom: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontSize: 11, color: C.gold, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 12 }}>{t.forWhomTag}</div>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 40px)", fontWeight: 900, letterSpacing: "-0.03em", fontFamily: "Playfair Display, Georgia, serif" }}>{t.forWhomTitle}</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {t.businesses.map(b => (
              <div key={b.name} style={{ background: C.bg, border: `1px solid ${C.line}`, borderRadius: 12, padding: "20px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{b.icon}</div>
                <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4, fontFamily: "DM Sans, sans-serif" }}>{b.name}</div>
                <div style={{ fontSize: 12, color: C.muted, fontFamily: "DM Sans, sans-serif" }}>{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ── */}
      <section id="partners" style={{ padding: "100px 48px", background: C.paper, borderTop: `1px solid ${C.line}` }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: 64 }}>
            <div style={{ fontSize: 11, color: C.gold, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 14 }}>{t.partnersTag}</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20 }}>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 900, letterSpacing: "-0.04em", lineHeight: 1.0, fontFamily: "Playfair Display, Georgia, serif" }}>{t.partnersTitle}</h2>
              <p style={{ fontSize: 15, color: C.muted, maxWidth: 360, lineHeight: 1.7, fontFamily: "DM Sans, sans-serif" }}>{t.partnersDesc}</p>
            </div>
          </div>

          {/* QuickCup featured partner */}
          <div style={{ background: `linear-gradient(135deg, #1a0a02, #3d1a06)`, borderRadius: 24, padding: "48px", marginBottom: 24, position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", right: -40, top: -40, width: 300, height: 300, borderRadius: "50%", background: "rgba(212,160,23,0.08)" }} />
            <div style={{ position: "absolute", right: 60, bottom: -60, width: 200, height: 200, borderRadius: "50%", background: "rgba(212,160,23,0.05)" }} />

            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)", borderRadius: 100, padding: "5px 14px", marginBottom: 20 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: C.gold }} />
                  <span style={{ fontSize: 11, color: C.gold, fontFamily: "monospace", letterSpacing: "0.1em" }}>FEATURED PARTNER</span>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 60, height: 60, borderRadius: 16, background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32 }}>☕</div>
                  <div>
                    <div style={{ fontSize: 28, fontWeight: 900, color: "#fff", letterSpacing: "-0.03em", fontFamily: "Playfair Display, Georgia, serif" }}>QuickCup</div>
                    <div style={{ fontSize: 13, color: "rgba(255,255,255,0.5)", fontFamily: "DM Sans, sans-serif" }}>
                      {lang === "az" ? "Qəhvə avtomatları şəbəkəsi · Bakı" : lang === "en" ? "Coffee vending network · Baku" : "Сеть кофейных автоматов · Баку"}
                    </div>
                  </div>
                </div>
                <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", lineHeight: 1.8, marginBottom: 28, fontFamily: "DM Sans, sans-serif" }}>{t.partnerDesc}</p>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {["QuickInsight", lang === "az" ? "Telemetriya" : lang === "en" ? "Telemetry" : "Телеметрия", "AI " + (lang === "az" ? "analitika" : lang === "en" ? "Analytics" : "аналитика")].map(tag => (
                    <span key={tag} style={{ background: "rgba(212,160,23,0.15)", border: "1px solid rgba(212,160,23,0.3)", borderRadius: 6, padding: "5px 12px", fontSize: 12, color: C.gold, fontFamily: "DM Sans, sans-serif" }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {PARTNER_STATS_N.map((n, i) => (
                  <div key={i} style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "20px" }}>
                    <div style={{ fontSize: 26, fontWeight: 900, color: C.gold, letterSpacing: "-0.04em", fontFamily: "Playfair Display, Georgia, serif" }}>{n}</div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginTop: 4, fontFamily: "DM Sans, sans-serif" }}>{t.partnerStats[i]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Become a partner CTA */}
          <div style={{ background: C.bg, border: `2px dashed ${C.line2}`, borderRadius: 20, padding: "40px", textAlign: "center" }}>
            <div style={{ fontSize: 28, marginBottom: 14 }}>🤝</div>
            <h3 style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.03em", fontFamily: "Playfair Display, Georgia, serif", marginBottom: 10 }}>{t.becomePartnerTitle}</h3>
            <p style={{ fontSize: 15, color: C.muted, maxWidth: 480, margin: "0 auto 24px", lineHeight: 1.7, fontFamily: "DM Sans, sans-serif" }}>{t.becomePartnerDesc}</p>
            <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap" }}>
              {t.becomePartnerBenefits.map(b => (
                <span key={b} style={{ background: C.paper, border: `1px solid ${C.line2}`, borderRadius: 7, padding: "6px 14px", fontSize: 12, color: C.muted, fontFamily: "DM Sans, sans-serif", display: "flex", alignItems: "center", gap: 6 }}>
                  <span style={{ color: C.green2 }}>✓</span> {b}
                </span>
              ))}
            </div>
            <span onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} style={{ display: "inline-block", marginTop: 24, background: C.ink, color: "#fff", borderRadius: 10, padding: "13px 32px", fontSize: 14, fontWeight: 700, cursor: "pointer", fontFamily: "DM Sans, sans-serif" }}>
              {t.becomePartnerCta}
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ padding: "100px 48px" }}>
        <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontSize: 11, color: C.gold, letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "monospace", marginBottom: 16 }}>{t.contactTag}</div>
          <h2 style={{ fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 900, letterSpacing: "-0.04em", fontFamily: "Playfair Display, Georgia, serif", marginBottom: 20 }}>
            {t.contactTitle[0]}<br /><span style={{ color: C.gold, fontStyle: "italic" }}>{t.contactTitle[1]}</span>
          </h2>
          <p style={{ fontSize: 17, color: C.muted, lineHeight: 1.7, marginBottom: 48, fontFamily: "DM Sans, sans-serif" }}>{t.contactDesc}</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: 48 }}>
            <a href="https://wa.me/994XXXXXXXXX" target="_blank" className="cta-btn" style={{ background: "#25D366", color: "#fff", border: "none", borderRadius: 12, padding: "16px 36px", fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "DM Sans, sans-serif", display: "inline-flex", alignItems: "center", gap: 8 }}>📱 WhatsApp</a>
            <a href="mailto:info@quicksolutions.az" className="cta-btn" style={{ background: C.paper, color: C.ink, border: `1px solid ${C.line2}`, borderRadius: 12, padding: "16px 36px", fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "DM Sans, sans-serif" }}>✉️ Email</a>
            <a href="https://instagram.com/quicksolutions.az" target="_blank" className="cta-btn" style={{ background: C.paper, color: C.ink, border: `1px solid ${C.line2}`, borderRadius: 12, padding: "16px 36px", fontSize: 16, fontWeight: 700, textDecoration: "none", fontFamily: "DM Sans, sans-serif" }}>📸 Instagram</a>
          </div>
          <div style={{ background: C.ink, borderRadius: 16, padding: "24px 32px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "#fff", fontFamily: "DM Sans, sans-serif", marginBottom: 4 }}>💼 {t.jobsTitle}</div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", fontFamily: "DM Sans, sans-serif" }}>{t.jobsDesc}</div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <a href="https://boss.az" target="_blank" style={{ background: C.gold, color: C.ink, borderRadius: 8, padding: "10px 18px", fontSize: 13, fontWeight: 700, textDecoration: "none", fontFamily: "DM Sans, sans-serif" }}>boss.az</a>
              <a href="https://tap.az" target="_blank" style={{ background: "rgba(255,255,255,0.1)", color: "#fff", borderRadius: 8, padding: "10px 18px", fontSize: 13, fontWeight: 700, textDecoration: "none", fontFamily: "DM Sans, sans-serif" }}>tap.az</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ borderTop: `1px solid ${C.line}`, padding: "32px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16, background: C.paper }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, background: C.ink, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontSize: 15, filter: "invert(1)" }}>⚡</span>
          </div>
          <span style={{ fontSize: 16, fontWeight: 900, letterSpacing: "-0.04em", fontFamily: "Georgia, serif" }}>Quick<span style={{ color: C.gold }}>Solutions</span></span>
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {PRODUCTS.map(p => (
            <span key={p.id} style={{ fontSize: 13, color: C.muted, fontFamily: "DM Sans, sans-serif", cursor: "pointer" }}>{p.name}</span>
          ))}
        </div>
        <div style={{ fontSize: 12, color: C.muted, fontFamily: "DM Sans, sans-serif" }}>© 2026 {t.footerRights}</div>
      </footer>

      {/* Modal */}
      {modal && <WaitlistModal product={modal} onClose={() => setModal(null)} t={t} />}
    </div>
  );
}
