/**
 * E-PRADHAN SEVA (ई-प्रधान सेवा)
 * Core Application Logic, Bilingual Engine, Grievance Lifecycle & Data Store
 * Diploma in IT Minor Project - Govt Polytechnic Khatima (2026-2027)
 */

// --- BILINGUAL DICTIONARY (English & Hindi) ---
const i18n = {
  en: {
    portalTitle: "E-PRADHAN SEVA",
    hiPortalTitle: "ई-प्रधान सेवा",
    tagline: "A Digital Platform for Government Scheme Awareness & Online Grievance Redressal",
    deptSub: "Govt. Polytechnic, Khatima | Directorate of Technical Education, Uttarakhand",
    prototypeBadge: "ACADEMIC PROTOTYPE",
    prototypeNotice: "This academic prototype is developed by Diploma IT students (Govt. Polytechnic, Khatima). Illustrative demonstration only.",
    navHome: "Home",
    navSchemes: "Government Schemes",
    navGrievance: "Complaint Box",
    navTrack: "Track Status",
    navCitizen: "Citizen Portal",
    navAdmin: "Admin Panel",
    navAbout: "About Synopsis",
    heroTitle: "Empowering Citizens with Digital Scheme Access & Transparent Redressal",
    heroSubtitle: "A unified rural governance portal connecting citizens with welfare initiatives, local administrative services, and seamless complaint resolution tracking.",
    btnFileComplaint: "Submit Grievance",
    btnExploreSchemes: "Explore Schemes",
    btnTrackNow: "Track Complaint",
    searchPlaceholder: "Search welfare schemes, pension, disaster relief, subsidies...",
    statCitizens: "Registered Citizens",
    statSchemes: "Active Schemes",
    statComplaints: "Total Grievances",
    statResolved: "Resolved Rate",
    flow1Title: "Scheme Awareness",
    flow1Desc: "Browse verified central and Uttarakhand state government schemes with clear eligibility criteria.",
    flow2Title: "Online Complaint Box",
    flow2Desc: "Report local issues (water, electricity, roads, drainage) directly to the Pradhan office without paperwork.",
    flow3Title: "Live Status Tracking",
    flow3Desc: "Track your grievance using your unique Complaint ID through every step of the verification pipeline.",
    flow4Title: "Admin Management",
    flow4Desc: "Administrative desk for reviewing complaints, updating progress, and maintaining welfare programs.",
    secSchemesTag: "Government Initiatives",
    secSchemesTitle: "Central & State Welfare Schemes",
    secSchemesSub: "Search, compare, and understand eligibility requirements and necessary documentation.",
    catAll: "All Schemes",
    catWelfare: "Welfare & Pension",
    catFinancial: "Financial & Loans",
    catDisaster: "Disaster Relief",
    catLocal: "Local Civic Services",
    catAgri: "Agriculture & Farmers",
    viewDetails: "View Details & Apply",
    secGrievanceTag: "Online Grievance Redressal",
    secGrievanceTitle: "Citizen Complaint Box",
    secGrievanceSub: "Submit local problems or scheme-related difficulties directly for administrative action.",
    formName: "Full Name",
    formPhone: "Mobile Number",
    formAadhaar: "Aadhaar (Last 4 Digits)",
    formVillage: "Gram Panchayat / Village / Ward",
    formCategory: "Grievance Category",
    formPriority: "Urgency Level",
    formSubject: "Complaint Subject / Short Title",
    formDescription: "Detailed Description of Grievance",
    formUpload: "Supporting Document / Photo (Optional)",
    formSubmitBtn: "Submit Grievance Now",
    secTrackTag: "Transparency & Accountability",
    secTrackTitle: "Track Grievance Status",
    secTrackSub: "Enter your unique Complaint ID (e.g., EPS-UK-2026-1042) to check real-time progress.",
    btnTrack: "Check Status",
    step1: "01 Login",
    step2: "02 Submit",
    step3: "03 Review",
    step4: "04 In Progress",
    step5: "05 Resolved",
    secCreditsTag: "Academic Credentials",
    secCreditsTitle: "Minor Project Synopsis Details",
    secCreditsSub: "Developed as partial fulfillment for Diploma in Information Technology (2026 - 2027)",
    guideLabel: "Project Guide:",
    teamLabel: "Project Team Members (Students):",
    institutionLabel: "Institution:",
    statusPending: "Pending / लंबित",
    statusReview: "In Review / समीक्षाधीन",
    statusProgress: "In Progress / प्रगति पर",
    statusResolved: "Resolved / निस्तारित",
    statusRejected: "Rejected / निरस्त",
    tickerBadge: "📢 LIVE NOTICES / ई-सूचना पट्ट",
    heroLiveStatus: "24x7 Citizen Seva Desk Active",
    heroCaptionTitle: "Gram Panchayat Khatima Rural Seva Kendra",
    heroCaptionSub: "Connecting 1,420+ citizens with verified welfare schemes & online grievance resolution",
    navCalculator: "Eligibility Checker",
    navImpact: "Impact Gallery",
    secCalcTag: "Smart Citizen Assistance",
    secCalcTitle: "Scheme Eligibility Checker",
    secCalcSub: "Select your citizen group, annual income, and domicile to discover matching welfare schemes.",
    calcLabelCategory: "1. Citizen Category",
    calcLabelIncome: "2. Annual Income",
    calcLabelDomicile: "3. Domicile",
    btnCalcCheck: "Check Eligibility",
    btnCalcReset: "Show All / Reset",
    secImpactTag: "Civic Impact",
    secImpactTitle: "Grievance Resolution Showcase",
    secImpactSub: "Real-world proof of prompt and accountable grievance redressal via E-Pradhan Seva.",
    impact1Title: "Drinking Water Pipeline Swift Repair",
    impact1Desc: "Ward 4, Khatima: Damaged main water pipeline replaced and fully restored within 4 days by Jal Sansthan.",
    impact2Title: "Solar LED Street Light Installation",
    impact2Desc: "Melaghat village: 8 new solar LED streetlights installed to eliminate dark spots and enhance safety.",
    impact3Title: "Direct Redressal at Open Gram Sabha",
    impact3Desc: "Panchayat Bhawan: Monthly open citizen hearing in presence of Pradhan, Sachiv & Patwari.",
    floatingSosBtn: "🚨 Emergency SOS",
    emergencyModalTitle: "🚨 Emergency Helplines Directory",
    emergencyModalDesc: "In case of emergency or disaster, call 24x7 toll-free numbers below:",
    em1: "Chief Minister Helpline",
    em2: "Disaster Emergency (USDMA)",
    em3: "Women Powerline",
    em4: "Emergency Response (ERSS)",
    em5: "Kisan Call Center",
    em6: "Health Advisory",
    btnClose: "Close",
    audioListen: "Listen"
  },
  hi: {
    portalTitle: "ई-प्रधान सेवा",
    hiPortalTitle: "E-PRADHAN SEVA",
    tagline: "सरकारी योजनाओं की जानकारी एवं ऑनलाइन शिकायत निवारण हेतु डिजिटल प्लेटफॉर्म",
    deptSub: "राजकीय पॉलिटेक्निक, खटीमा | प्राविधिक शिक्षा निदेशालय, उत्तराखण्ड",
    prototypeBadge: "शैक्षणिक प्रोटोटाइप",
    prototypeNotice: "यह एक शैक्षणिक प्रोटोटाइप है जिसे राजकीय पॉलिटेक्निक खटीमा के डिप्लोमा आईटी छात्रों द्वारा तैयार किया गया है।",
    navHome: "मुख्य पृष्ठ",
    navSchemes: "सरकारी योजनाएँ",
    navGrievance: "शिकायत बॉक्स",
    navTrack: "स्थिति ट्रैक करें",
    navCitizen: "नागरिक पोर्टल",
    navAdmin: "एडमिन पैनल",
    navAbout: "परियोजना परिचय",
    heroTitle: "सरकारी योजनाओं की सुलभ जानकारी और पारदर्शी ऑनलाइन शिकायत निवारण",
    heroSubtitle: "ग्रामीण व स्थानीय स्तर पर नागरिकों को कल्याणकारी योजनाओं की जानकारी तथा बिना कार्यालय जाए शिकायतों के त्वरित समाधान हेतु एकल डिजिटल मंच।",
    btnFileComplaint: "शिकायत दर्ज करें",
    btnExploreSchemes: "योजनाएँ देखें",
    btnTrackNow: "स्थिति ट्रैक करें",
    searchPlaceholder: "पेंशन, किसान सम्मान निधि, आवास, राशन या आपदा राहत खोजें...",
    statCitizens: "पंजीकृत नागरिक",
    statSchemes: "सक्रिय योजनाएँ",
    statComplaints: "कुल शिकायतें",
    statResolved: "समाधान दर",
    flow1Title: "योजना जागरूकता",
    flow1Desc: "केन्द्र एवं उत्तराखण्ड सरकार की प्रमुख जन-कल्याणकारी योजनाओं की पात्रता व दस्तावेजों की संपूर्ण जानकारी।",
    flow2Title: "ऑनलाइन शिकायत बॉक्स",
    flow2Desc: "जल, विद्युत, सड़क, स्वच्छता आदि समस्याओं की ऑनलाइन शिकायत दर्ज करें और पावती रसीद प्राप्त करें।",
    flow3Title: "लाइव स्थिति ट्रैकिंग",
    flow3Desc: "अपनी शिकायत आईडी के जरिए 5-चरणीय प्रक्रिया (जाँच से समाधान तक) की स्थिति रियल-टाइम देखें।",
    flow4Title: "एडमिन प्रबंधन",
    flow4Desc: "प्रधान कार्यालय व अधिकारियों द्वारा शिकायतों की समीक्षा, प्रगति अपडेट तथा योजनाओं का प्रबंधन।",
    secSchemesTag: "सरकारी पहल",
    secSchemesTitle: "प्रमुख सरकारी कल्याण योजनाएँ",
    secSchemesSub: "योजनाओं के लाभ, पात्रता मानदंड तथा आवश्यक दस्तावेजों की विस्तृत जानकारी प्राप्त करें।",
    catAll: "सभी योजनाएँ",
    catWelfare: "कल्याण एवं पेंशन",
    catFinancial: "वित्तीय सहायता व ऋण",
    catDisaster: "आपदा राहत सहायता",
    catLocal: "स्थानीय नागरिक सेवाएँ",
    catAgri: "कृषि एवं कृषक कल्याण",
    viewDetails: "विवरण व आवेदन प्रक्रिया",
    secGrievanceTag: "ऑनलाइन समाधान",
    secGrievanceTitle: "ऑनलाइन शिकायत पंजीकरण (Complaint Box)",
    secGrievanceSub: "स्थानीय समस्याओं अथवा योजना संबंधी कठिनाइयों की ऑनलाइन शिकायत दर्ज करें।",
    formName: "नागरिक का पूरा नाम",
    formPhone: "मोबाइल नंबर",
    formAadhaar: "आधार संख्या (अंतिम 4 अंक)",
    formVillage: "ग्राम पंचायत / वार्ड / गाँव का नाम",
    formCategory: "शिकायत की श्रेणी",
    formPriority: "प्राथमिकता स्तर",
    formSubject: "शिकायत का विषय",
    formDescription: "समस्या का पूरा विवरण",
    formUpload: "संबंधित दस्तावेज या फोटो (वैकल्पिक)",
    formSubmitBtn: "शिकायत दर्ज करें",
    secTrackTag: "पारदर्शिता एवं जवाबदेही",
    secTrackTitle: "शिकायत की स्थिति ट्रैक करें",
    secTrackSub: "अपनी शिकायत आईडी (जैसे EPS-UK-2026-1042) दर्ज करें और वर्तमान प्रगति देखें।",
    btnTrack: "स्थिति देखें",
    step1: "01 लॉगिन",
    step2: "02 शिकायत दर्ज",
    step3: "03 एडमिन समीक्षा",
    step4: "04 प्रगति पर",
    step5: "05 समाधान पूर्ण",
    secCreditsTag: "शैक्षणिक विवरण",
    secCreditsTitle: "माइनर प्रोजेक्ट सिनॉप्सिस परिचय",
    secCreditsSub: "डिप्लोमा इन इनफार्मेशन टेक्नोलॉजी (2026 - 2027) हेतु प्रस्तुत",
    guideLabel: "प्रोजेक्ट मार्गदर्शक (Guide):",
    teamLabel: "प्रोजेक्ट टीम (छात्र):",
    institutionLabel: "संस्थान:",
    statusPending: "लंबित",
    statusReview: "समीक्षाधीन",
    statusProgress: "प्रगति पर",
    statusResolved: "निस्तारित",
    statusRejected: "निरस्त",
    tickerBadge: "📢 ई-सूचना पट्ट (LIVE NOTICES)",
    heroLiveStatus: "24x7 नागरिक सेवा डेस्क सक्रिय",
    heroCaptionTitle: "ग्राम पंचायत खटीमा ई-सेवा केंद्र",
    heroCaptionSub: "1,420+ ग्रामीणों को सरकारी योजनाओं व ऑनलाइन शिकायत निवारण से जोड़ना",
    navCalculator: "पात्रता कैलकुलेटर",
    navImpact: "समाधान गैलरी",
    secCalcTag: "त्वरित सहायता",
    secCalcTitle: "योजना पात्रता कैलकुलेटर",
    secCalcSub: "अपनी श्रेणी, वार्षिक आय एवं निवास का चयन करें और तुरंत जानें कि आप किन-किन सरकारी योजनाओं के पात्र हैं।",
    calcLabelCategory: "1. नागरिक वर्ग",
    calcLabelIncome: "2. वार्षिक पारिवारिक आय",
    calcLabelDomicile: "3. निवास क्षेत्र",
    btnCalcCheck: "पात्रता देखें",
    btnCalcReset: "सभी देखें / रीसेट",
    secImpactTag: "नागरिक प्रभाव",
    secImpactTitle: "समाधान गैलरी (Resolution Showcase)",
    secImpactSub: "ई-प्रधान सेवा पोर्टल द्वारा प्राप्त जन-समस्याओं के पारदर्शी व त्वरित निस्तारण के प्रमाण",
    impact1Title: "मुख्य पेयजल पाइपलाइन त्वरित मरम्मत",
    impact1Desc: "वार्ड 4, खटीमा में क्षतिग्रस्त पाइपलाइन को जल संस्थान टीम द्वारा 4 दिन में पूरी तरह नया बदलकर सामान्य जलापूर्ति बहाल की गई।",
    impact2Title: "ग्राम मेलाघाट में सोलर स्ट्रीट लाइट संस्थापन",
    impact2Desc: "ग्रामीण संपर्क मार्ग पर अंधेरे व वन्यजीव भय की शिकायत पर 8 नई सोलर एलईडी स्ट्रीट लाइटें स्थापित की गईं।",
    impact3Title: "खुली ग्राम सभा में जन-समस्या निवारण",
    impact3Desc: "ग्राम पंचायत भवन में प्रत्येक माह प्रधान, सचिव एवं क्षेत्रीय लेखपाल की उपस्थिति में नागरिकों की पेंशन व योजनाओं की प्रत्यक्ष सुनवाई।",
    floatingSosBtn: "🚨 आपातकालीन सेवा (SOS)",
    emergencyModalTitle: "🚨 महत्वपूर्ण आपातकालीन हेल्पलाइन नंबर",
    emergencyModalDesc: "आपातकाल अथवा प्राकृतिक आपदा की स्थिति में तुरंत नीचे दिए गए टोल-फ्री नंबरों पर संपर्क करें (24x7 सक्रिय):",
    em1: "मुख्यमंत्री हेल्पलाइन",
    em2: "आपदा प्रबंधन (USDMA)",
    em3: "महिला हेल्पलाइन",
    em4: "राष्ट्रीय आपात सेवा",
    em5: "किसान कॉल सेंटर",
    em6: "स्वास्थ्य परामर्श",
    btnClose: "बंद करें",
    audioListen: "सुनें"
  }
};

let currentLang = 'en';

// --- SEED DATABASE ---
const INITIAL_SCHEMES = [
  {
    id: "SCH-001",
    title: "Atal Ayushman Uttarakhand Yojana",
    titleHi: "अटल आयुष्मान उत्तराखण्ड योजना",
    category: "welfare",
    categoryName: "Welfare & Health",
    categoryNameHi: "कल्याण एवं स्वास्थ्य",
    image: "assets/images/scheme_ayushman.jpg",
    targetGroup: ["all", "bpl", "farmer", "senior", "youth", "student"],
    maxIncome: 9999999,
    department: "Department of Medical Health & Family Welfare, UK",
    benefits: "Free secondary and tertiary healthcare coverage up to ₹5 Lakh per family per year across empaneled hospitals.",
    benefitsHi: "प्रति परिवार प्रति वर्ष ₹5 लाख तक का निशुल्क स्वास्थ्य उपचार सूचीबद्ध अस्पतालों में।",
    eligibility: "All permanent resident families of Uttarakhand holding valid Ration Card or NFSA/State Health Card.",
    eligibilityHi: "उत्तराखण्ड के सभी स्थायी निवासी जिनके पास मान्य राशन कार्ड अथवा राज्य स्वास्थ्य कार्ड है।",
    documents: "Aadhaar Card, Uttarakhand Ration Card / State Family ID, Voter ID.",
    documentsHi: "आधार कार्ड, उत्तराखण्ड राशन कार्ड / परिवार आईडी, मतदाता पहचान पत्र।",
    applyProcess: "Eligible citizens can generate Golden Card at nearest CSC (Common Service Center), District Hospital, or online via Ayushman Bharat Portal.",
    applyProcessHi: "निकटतम सीएससी केंद्र अथवा जिला चिकित्सालय में गोल्डन कार्ड बनवाकर योजना का लाभ लिया जा सकता है।",
    portalLink: "https://ayushmanuttarakhand.org"
  },
  {
    id: "SCH-002",
    title: "PM-KISAN Samman Nidhi Yojana",
    titleHi: "प्रधानमंत्री किसान सम्मान निधि योजना",
    category: "agri",
    categoryName: "Agriculture & Farmers",
    categoryNameHi: "कृषि एवं कृषक कल्याण",
    image: "assets/images/scheme_pmkisan.jpg",
    targetGroup: ["farmer"],
    maxIncome: 9999999,
    department: "Ministry of Agriculture & Farmers Welfare, GoI",
    benefits: "Financial benefit of ₹6,000 per year transferred in three equal 4-monthly installments of ₹2,000 directly to bank accounts.",
    benefitsHi: "प्रति वर्ष ₹6,000 की वित्तीय सहायता, तीन समान किस्तों (प्रत्येक ₹2,000) में सीधे बैंक खाते में।",
    eligibility: "Small and marginal landholder farmer families with cultivable landholding in revenue records.",
    eligibilityHi: "कृषि योग्य भूमि रखने वाले सभी पात्र छोटे एवं सीमांत कृषक परिवार।",
    documents: "Aadhaar Card, Land Revenue Record (Khatauni / Khasra), Bank Account with Aadhaar seeding.",
    documentsHi: "आधार कार्ड, भूमि खतौनी/खसरा नकल, आधार लिंक बैंक खाता विवरण।",
    applyProcess: "Self-registration via pmkisan.gov.in or registration at Gram Panchayat CSC center with e-KYC verification.",
    applyProcessHi: "pmkisan.gov.in पर ऑनलाइन या ग्राम पंचायत सीएससी पर बायोमेट्रिक ई-केवाईसी द्वारा।",
    portalLink: "https://pmkisan.gov.in"
  },
  {
    id: "SCH-003",
    title: "Uttarakhand Vridhavastha (Old Age) Pension",
    titleHi: "उत्तराखण्ड वृद्धावस्था पेंशन योजना",
    category: "welfare",
    categoryName: "Welfare & Pension",
    categoryNameHi: "कल्याण एवं पेंशन",
    image: "assets/images/scheme_pension.jpg",
    targetGroup: ["senior", "bpl"],
    maxIncome: 48000,
    department: "Social Welfare Department, Uttarakhand",
    benefits: "Direct monthly pension of ₹1,500 deposited quarterly into the beneficiary's DBT bank account.",
    benefitsHi: "₹1,500 प्रतिमाह की पेंशन सीधे लाभार्थी के बैंक खाते में प्रदान की जाती है।",
    eligibility: "Senior citizens aged 60 years or above living in Uttarakhand belonging to BPL category or annual family income below ₹48,000.",
    eligibilityHi: "60 वर्ष या उससे अधिक आयु के बीपीएल अथवा निर्धारित वार्षिक आय सीमा वाले वरिष्ठ नागरिक।",
    documents: "Age Proof (Birth certificate / Voter ID / Aadhaar), Income Certificate, BPL Card copy, Bank Passbook, Passport Photo.",
    documentsHi: "आयु प्रमाण पत्र, आय प्रमाण पत्र, बीपीएल कार्ड, बैंक पासबुक तथा फोटो।",
    applyProcess: "Submit application through Uttarakhand Apuni Sarkar portal (eservices.uk.gov.in) or offline via Block Development Office (BDO).",
    applyProcessHi: "उत्तराखण्ड अपनी सरकार पोर्टल (eservices.uk.gov.in) अथवा ब्लॉक विकास कार्यालय (BDO) द्वारा।",
    portalLink: "https://socialwelfare.uk.gov.in"
  },
  {
    id: "SCH-004",
    title: "Mukhyamantri Swarojgar Yojana (MSY)",
    titleHi: "मुख्यमंत्री स्वरोजगार योजना (MSY)",
    category: "financial",
    categoryName: "Financial & Loans",
    categoryNameHi: "वित्तीय सहायता व ऋण",
    image: "assets/images/scheme_swarojgar.jpg",
    targetGroup: ["youth", "all"],
    maxIncome: 9999999,
    department: "Directorate of Industries, Uttarakhand",
    benefits: "Subsidized term loans up to ₹25 Lakh for manufacturing units and ₹10 Lakh for service sectors with 15% to 25% capital margin subsidy.",
    benefitsHi: "विनिर्माण हेतु ₹25 लाख व सेवा क्षेत्र हेतु ₹10 लाख तक का ऋण, 15% से 25% तक अनुदान (सब्सिडी) सहित।",
    eligibility: "Uttarakhand permanent residents aged 18+ years intending to set up enterprise in hill/plain regions.",
    eligibilityHi: "उत्तराखण्ड के स्थायी निवासी (न्यूनतम आयु 18 वर्ष) जो अपना स्वरोजगार या सूक्ष्म उद्योग स्थापित करना चाहते हैं।",
    documents: "Detailed Project Report (DPR), Educational certificate, Aadhaar, Domicile certificate, Bank statement.",
    documentsHi: "परियोजना रिपोर्ट (DPR), आधार, मूल निवास प्रमाण पत्र, बैंक खाता विवरण।",
    applyProcess: "Online application through MSY Uttarakhand Portal (msy.uk.gov.in) followed by District Task Force Committee screening.",
    applyProcessHi: "msy.uk.gov.in पर ऑनलाइन आवेदन एवं जिला स्तरीय टास्क फोर्स कमेटी द्वारा अनुमोदन।",
    portalLink: "https://msy.uk.gov.in"
  },
  {
    id: "SCH-005",
    title: "Gaura Devi Kanyadhan Yojana",
    titleHi: "नंदा गौरा / गौरा देवी कन्याधन योजना",
    category: "welfare",
    categoryName: "Welfare & Education",
    categoryNameHi: "कल्याण एवं बालिका शिक्षा",
    image: "assets/images/scheme_gauradevi.jpg",
    targetGroup: ["student", "bpl"],
    maxIncome: 72000,
    department: "Women Empowerment & Child Development, UK",
    benefits: "Direct financial assistance of ₹11,000 on birth of girl child and ₹51,000 upon passing Class 12 for higher education.",
    benefitsHi: "बालिका के जन्म पर ₹11,000 तथा 12वीं कक्षा उत्तीर्ण करने पर उच्च शिक्षा हेतु ₹51,000 की वित्तीय सहायता।",
    eligibility: "Girl students passing 12th from recognized UK board belonging to BPL or annual income below ₹72,000.",
    eligibilityHi: "उत्तराखण्ड बोर्ड से 12वीं उत्तीर्ण पात्र बीपीएल अथवा निर्धारित आय सीमा वाले परिवारों की बालिकाएँ।",
    documents: "12th Marksheet & Admit card, Domicile Certificate, Income/BPL Certificate, Aadhaar, Bank Passbook.",
    documentsHi: "12वीं अंकतालिका, स्थायी निवास, आय प्रमाण पत्र, आधार एवं बैंक खाता।",
    applyProcess: "Submit application via Child Development Project Officer (CDPO) or online via State Portal before the prescribed cutoff date.",
    applyProcessHi: "बाल विकास परियोजना अधिकारी (CDPO) अथवा राज्य पोर्टल पर ऑनलाइन आवेदन।",
    portalLink: "https://wecd.uk.gov.in"
  },
  {
    id: "SCH-006",
    title: "Jal Jeevan Mission (Har Ghar Nal Se Jal)",
    titleHi: "जल जीवन मिशन (हर घर नल से जल)",
    category: "local",
    categoryName: "Local Civic Services",
    categoryNameHi: "स्थानीय नागरिक सेवाएँ",
    image: "assets/images/scheme_jaljeevan.jpg",
    targetGroup: ["all", "farmer", "bpl"],
    maxIncome: 9999999,
    department: "Uttarakhand Jal Sansthan & Jal Nigam",
    benefits: "Functional household tap water connection delivering 55 liters per capita per day of safe drinking water to every rural home.",
    benefitsHi: "प्रत्येक ग्रामीण परिवार को घर तक गुणवत्तापूर्ण पेयजल हेतु कार्यात्मक घरेलू नल कनेक्शन।",
    eligibility: "All rural households currently without piped potable water connection in Gram Panchayats.",
    eligibilityHi: "ग्राम पंचायत क्षेत्र के सभी ग्रामीण आवास जहाँ अभी पाइप द्वारा पेयजल उपलब्ध नहीं है।",
    documents: "Aadhaar Card, Proof of Residence in Gram Panchayat, Ration Card.",
    documentsHi: "आधार कार्ड, ग्राम पंचायत निवास प्रमाण, राशन कार्ड।",
    applyProcess: "Contact Gram Pradhan / Village Water & Sanitation Committee (VWSC) or submit local connection request via portal.",
    applyProcessHi: "ग्राम प्रधान / ग्राम जल एवं स्वच्छता समिति (VWSC) अथवा पोर्टल पर ऑनलाइन अनुरोध दर्ज करें।",
    portalLink: "https://jaljeevanmission.gov.in"
  },
  {
    id: "SCH-007",
    title: "Uttarakhand Natural Disaster Assistance Fund",
    titleHi: "उत्तराखण्ड प्राकृतिक आपदा राहत सहायता कोष",
    category: "disaster",
    categoryName: "Disaster Relief",
    categoryNameHi: "आपदा राहत सहायता",
    image: "assets/images/scheme_disaster.jpg",
    targetGroup: ["all", "farmer", "bpl"],
    maxIncome: 9999999,
    department: "State Disaster Management Authority (USDMA), UK",
    benefits: "Emergency financial compensation for crop damage, livestock loss, and house damages caused by cloudbursts, landslides, or floods.",
    benefitsHi: "अतिवृष्टि, भूस्खलन, बाढ़ अथवा प्राकृतिक आपदा से मकान, फसल या पशु क्षति पर निर्धारित तात्कालिक मुआवजा राशि।",
    eligibility: "Residents of disaster-notified tehsils and villages whose losses are verified by Patwari / Revenue Inspector.",
    eligibilityHi: "आपदा प्रभावित क्षेत्रों के निवासी जिनकी क्षति का सत्यापन राजस्व उप-निरीक्षक (पटवारी) द्वारा किया गया हो।",
    documents: "Loss verification report by Patwari, Damage photos, Aadhaar Card, Bank Account Details.",
    documentsHi: "पटवारी क्षति पंचनामा रिपोर्ट, क्षतिग्रस्त संपत्ति का फोटो, आधार व बैंक पासबुक।",
    applyProcess: "Lodge emergency claim at Tehsil Revenue Office, Gram Panchayat Sachiv, or via Emergency Relief Desk.",
    applyProcessHi: "तहसीलदार कार्यालय, ग्राम पंचायत सचिव अथवा आपदा कंट्रोल रूम हेल्पलाइन 1077 पर संपर्क करें।",
    portalLink: "https://usdma.uk.gov.in"
  },
  {
    id: "SCH-008",
    title: "Pradhan Mantri Awas Yojana - Gramin (PMAY-G)",
    titleHi: "प्रधानमंत्री आवास योजना - ग्रामीण",
    category: "financial",
    categoryName: "Financial & Housing",
    categoryNameHi: "वित्तीय सहायता व आवास",
    image: "assets/images/scheme_pmay.jpg",
    targetGroup: ["bpl", "all"],
    maxIncome: 120000,
    department: "Rural Development Department, Uttarakhand",
    benefits: "Financial grant of ₹1,30,000 for hilly difficult terrains for pucca house construction, plus 90 days MGNREGA wages and ₹12,000 for toilet.",
    benefitsHi: "पर्वतीय क्षेत्रों में पक्का मकान निर्माण हेतु ₹1,30,000 की अनुदान सहायता, मनरेगा मजदूरी एवं शौचालय अनुदान।",
    eligibility: "Houseless families or households living in kutcha/dilapidated houses verified via SECC survey and Awaas+ list.",
    eligibilityHi: "कच्चे अथवा जीर्ण-शीर्ण मकानों में रहने वाले आवासहीन ग्रामीण परिवार (SECC व आवास+ सूची अनुसार)।",
    documents: "Aadhaar of all family members, Bank Passbook, MGNREGA Job Card, Land clearance certificate.",
    documentsHi: "परिवार के आधार कार्ड, जॉब कार्ड, बैंक पासबुक, भूमि प्रमाण पत्र।",
    applyProcess: "Verification by Gram Sabha followed by geo-tagging of construction phases via AwaasApp.",
    applyProcessHi: "ग्राम सभा द्वारा अनुमोदन एवं आवास ऐप द्वारा निर्माण चरणों की जियो-टैगिंग।",
    portalLink: "https://pmayg.nic.in"
  }
];

const INITIAL_GRIEVANCES = [
  {
    id: "EPS-UK-2026-1042",
    citizenName: "Ramesh Singh Bisht",
    phone: "9876543210",
    aadhaar4: "4921",
    village: "Ward 4, Gram Panchayat Khatima Rural",
    category: "water",
    categoryName: "Drinking Water / जल आपूर्ति",
    priority: "High",
    subject: "Broken main pipeline causing water scarcity near primary school",
    description: "The primary drinking water pipeline connecting Ward 4 has been cracked for 10 days. Water is leaking on road and over 40 families are facing drinking water shortage. We request urgent repair and line restoration.",
    status: "Resolved",
    officerRemarks: "Pipeline inspected and replaced by Uttarakhand Jal Sansthan team on 07 Sept 2026. Normal pressure restored. Confirmed with Gram Pradhan.",
    officerName: "Er. V. P. Joshi (Junior Engineer, Jal Sansthan)",
    createdAt: "2026-09-02 10:15 AM",
    updatedAt: "2026-09-07 04:30 PM",
    rating: 5
  },
  {
    id: "EPS-UK-2026-1088",
    citizenName: "Sunita Rawat",
    phone: "9812345678",
    aadhaar4: "8834",
    village: "Village Melaghat, Khatima Block",
    category: "scheme",
    categoryName: "Scheme Pension / पेंशन समस्या",
    priority: "Normal",
    subject: "Old age pension installment delayed for Q1 2026",
    description: "My mother-in-law (Age 68) was receiving Old Age Pension regularly, but the installment for the last 4 months has not been credited to her SBI account despite valid life certificate submission.",
    status: "In Progress",
    officerRemarks: "Life certificate re-verified at Block Social Welfare office. Bank Aadhaar NPCI mapper is being refreshed. Funds expected to disburse within 3 working days.",
    officerName: "K. S. Chauhan (Assistant Social Welfare Officer)",
    createdAt: "2026-09-05 02:40 PM",
    updatedAt: "2026-09-08 11:20 AM",
    rating: null
  },
  {
    id: "EPS-UK-2026-1120",
    citizenName: "Mahesh Chandra Pant",
    phone: "9411223344",
    aadhaar4: "1159",
    village: "Ward 2, Chakarpur, Khatima",
    category: "electricity",
    categoryName: "Electricity / विद्युत आपूर्ति",
    priority: "High",
    subject: "Damaged street transformer causing heavy voltage fluctuation",
    description: "Due to heavy rain, the 25 KVA transformer in Ward 2 is sparking intermittently and high voltage spikes damaged electronic appliances in 5 houses. Danger of short circuit.",
    status: "In Review",
    officerRemarks: "Complaint logged with UPCL Khatima Sub-division. Field lineman team dispatched for on-site load testing.",
    officerName: "S. K. Verma (SDO, Power Corporation Khatima)",
    createdAt: "2026-09-08 09:10 AM",
    updatedAt: "2026-09-09 10:00 AM",
    rating: null
  }
];

// --- INITIALIZE LOCAL STORAGE ---
function initDataStore() {
  const existingSchemes = JSON.parse(localStorage.getItem('eps_schemes') || 'null');
  if (!existingSchemes || !existingSchemes[0] || !existingSchemes[0].image) {
    localStorage.setItem('eps_schemes', JSON.stringify(INITIAL_SCHEMES));
  }
  if (!localStorage.getItem('eps_grievances')) {
    localStorage.setItem('eps_grievances', JSON.stringify(INITIAL_GRIEVANCES));
  }
  if (!localStorage.getItem('eps_users')) {
    const defaultUsers = [
      { id: "USR-001", name: "Citizen User", email: "citizen@epradhan.gov.in", phone: "9876543210", password: "password", role: "citizen" },
      { id: "ADM-001", name: "Gram Pradhan / Administrator", email: "admin@epradhan.gov.in", phone: "9412000000", password: "admin", role: "admin" }
    ];
    localStorage.setItem('eps_users', JSON.stringify(defaultUsers));
  }
}

// Data Getters
function getSchemes() {
  return JSON.parse(localStorage.getItem('eps_schemes') || '[]');
}
function getGrievances() {
  return JSON.parse(localStorage.getItem('eps_grievances') || '[]');
}
function saveGrievances(list) {
  localStorage.setItem('eps_grievances', JSON.stringify(list));
}
function saveSchemes(list) {
  localStorage.setItem('eps_schemes', JSON.stringify(list));
}

// --- LANGUAGE SWITCHER ---
function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update elements with data-i18n
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang] && i18n[lang][key]) {
      el.textContent = i18n[lang][key];
    }
  });

  // Update placeholders
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (i18n[lang] && i18n[lang][key]) {
      el.placeholder = i18n[lang][key];
    }
  });

  renderSchemes();
  renderAdminGrievances();
  updateLiveMetrics();
}

// --- ACCESSIBILITY TOOLS (GIGW Guidelines) ---
function setFontSize(size) {
  document.body.classList.remove('font-sm', 'font-base', 'font-lg');
  document.body.classList.add(`font-${size}`);
  document.querySelectorAll('.access-btn[data-size]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === size);
  });
}

function toggleHighContrast() {
  const isHighContrast = document.body.classList.toggle('high-contrast');
  const contrastBtn = document.getElementById('contrastToggleBtn');
  if (contrastBtn) {
    contrastBtn.classList.toggle('active', isHighContrast);
  }
}

// --- TOAST ALERTS ---
function showToast(message, type = "info") {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : type === 'error' ? '⚠' : 'ℹ'}</span>
    <div>${message}</div>
  `;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// --- LIVE METRICS ---
function updateLiveMetrics() {
  const grievances = getGrievances();
  const schemes = getSchemes();

  const totalGrievances = grievances.length;
  const resolvedCount = grievances.filter(g => g.status === 'Resolved').length;
  const resolveRate = totalGrievances > 0 ? Math.round((resolvedCount / totalGrievances) * 100) : 100;

  const statComplaintsEl = document.getElementById('heroStatComplaints');
  const statResolvedEl = document.getElementById('heroStatResolved');
  const statSchemesEl = document.getElementById('heroStatSchemes');

  if (statComplaintsEl) statComplaintsEl.textContent = totalGrievances;
  if (statResolvedEl) statResolvedEl.textContent = `${resolveRate}%`;
  if (statSchemesEl) statSchemesEl.textContent = schemes.length;

  // Admin stats
  const adminTotal = document.getElementById('adminTotalGrievances');
  const adminResolved = document.getElementById('adminResolvedGrievances');
  const adminPending = document.getElementById('adminPendingGrievances');
  const adminReview = document.getElementById('adminReviewGrievances');

  if (adminTotal) adminTotal.textContent = totalGrievances;
  if (adminResolved) adminResolved.textContent = resolvedCount;
  if (adminPending) adminPending.textContent = grievances.filter(g => g.status === 'Pending').length;
  if (adminReview) adminReview.textContent = grievances.filter(g => g.status === 'In Review' || g.status === 'In Progress').length;
}

// --- SCHEME RENDERING & SEARCH ---
let currentSchemeCategory = 'all';

function renderSchemes(filterQuery = '') {
  const container = document.getElementById('schemesGrid');
  if (!container) return;

  const schemes = getSchemes();
  const query = filterQuery.toLowerCase().trim();

  const filtered = schemes.filter(s => {
    const matchesCategory = currentSchemeCategory === 'all' || s.category === currentSchemeCategory;
    const titleText = (s.title + ' ' + s.titleHi + ' ' + s.benefits + ' ' + s.benefitsHi).toLowerCase();
    const matchesSearch = query === '' || titleText.includes(query);
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border-radius: 12px;">
        <p style="color: #64748b; font-size: 1.1rem;">${currentLang === 'hi' ? 'कोई योजना नहीं मिली। कृपया अन्य श्रेणी या शब्द खोजें।' : 'No government schemes found matching your filter.'}</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(s => {
    const title = currentLang === 'hi' ? s.titleHi : s.title;
    const benefits = currentLang === 'hi' ? s.benefitsHi : s.benefits;
    const eligibility = currentLang === 'hi' ? s.eligibilityHi : s.eligibility;
    const categoryName = currentLang === 'hi' ? s.categoryNameHi : s.categoryName;
    const badgeClass = `badge-${s.category}`;
    const imageSrc = s.image || 'assets/images/hero_gram_panchayat.jpg';

    return `
      <div class="scheme-card" data-scheme-id="${s.id}">
        <div class="scheme-card-img-wrap">
          <img src="${imageSrc}" alt="${title}" class="scheme-card-img" loading="lazy" onerror="this.src='assets/images/hero_gram_panchayat.jpg'">
          <div class="scheme-img-overlay"></div>
          <button class="scheme-audio-btn" onclick="playSchemeAudio('${s.id}')" title="Listen / आवाज से सुनें">
            🔊 <span>${currentLang === 'hi' ? 'सुनें' : 'Listen'}</span>
          </button>
          <span class="scheme-badge ${badgeClass}">${categoryName}</span>
        </div>
        <div class="scheme-card-body">
          <h3>${title}</h3>
          <p class="desc">${benefits}</p>
          <div class="scheme-meta">
            <div class="meta-row">
              <strong>${currentLang === 'hi' ? 'पात्रता:' : 'Eligibility:'}</strong>
              <span>${eligibility.length > 75 ? eligibility.substring(0, 75) + '...' : eligibility}</span>
            </div>
            <div class="meta-row">
              <strong>${currentLang === 'hi' ? 'विभाग:' : 'Dept:'}</strong>
              <span>${s.department}</span>
            </div>
          </div>
          <div class="scheme-card-footer">
            <button class="btn btn-primary btn-sm" onclick="openSchemeDetailModal('${s.id}')">
              ${currentLang === 'hi' ? 'पूरा विवरण व आवेदन' : 'View Details & Apply'} →
            </button>
            <a href="${s.portalLink}" target="_blank" rel="noopener" class="flow-link" style="font-size: 0.8rem;">
              ${currentLang === 'hi' ? 'आधिकारिक पोर्टल' : 'Official Portal'} ↗
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// --- AUDIO READER (बोलती सेवा - Web Speech API) ---
function speakText(text, lang = 'hi') {
  if (!('speechSynthesis' in window)) {
    showToast(lang === 'hi' ? 'आपके ब्राउज़र में आवाज सुविधा उपलब्ध नहीं है।' : 'Voice synthesis not supported in your browser.', 'warning');
    return;
  }
  window.speechSynthesis.cancel();
  const cleanText = text.replace(/<[^>]*>/g, '').trim();
  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = lang === 'hi' ? 'hi-IN' : 'en-IN';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  
  const voices = window.speechSynthesis.getVoices();
  const targetVoice = voices.find(v => v.lang.startsWith(lang) || (v.name && v.name.includes(lang === 'hi' ? 'Hindi' : 'English')));
  if (targetVoice) utterance.voice = targetVoice;

  window.speechSynthesis.speak(utterance);
  showToast(lang === 'hi' ? '🔊 विवरण सुनाया जा रहा है...' : '🔊 Playing voice narration...', 'info');
}

function playSchemeAudio(schemeId) {
  const schemes = getSchemes();
  const scheme = schemes.find(s => s.id === schemeId);
  if (!scheme) return;
  const title = currentLang === 'hi' ? scheme.titleHi : scheme.title;
  const benefits = currentLang === 'hi' ? scheme.benefitsHi : scheme.benefits;
  const eligibility = currentLang === 'hi' ? scheme.eligibilityHi : scheme.eligibility;
  const narration = `${title}। ${benefits}। पात्रता: ${eligibility}।`;
  speakText(narration, currentLang);
}

// --- SCHEME ELIGIBILITY CALCULATOR ---
let activeEligibilityFilter = null;

function handleEligibilityCheck(e) {
  if (e) e.preventDefault();
  const category = document.getElementById('calcCategory')?.value || 'all';
  const income = document.getElementById('calcIncome')?.value || 'any';

  const schemes = getSchemes();
  const matched = schemes.filter(s => {
    let catMatch = true;
    if (category !== 'all') {
      catMatch = s.targetGroup ? s.targetGroup.includes(category) || s.targetGroup.includes('all') : true;
    }
    let incomeMatch = true;
    if (income === 'below50k') {
      incomeMatch = true;
    } else if (income === 'below150k') {
      incomeMatch = !s.maxIncome || s.maxIncome >= 100000;
    } else if (income === 'above150k') {
      incomeMatch = !s.maxIncome || s.maxIncome > 200000;
    }
    return catMatch && incomeMatch;
  });

  const banner = document.getElementById('calcResultBanner');
  const countEl = document.getElementById('calcResultCount');
  const textEl = document.getElementById('calcResultText');

  if (banner && countEl && textEl) {
    banner.classList.add('active');
    countEl.textContent = currentLang === 'hi' ? `🎉 ${matched.length} योजनाएं उपलब्ध हैं!` : `🎉 ${matched.length} Schemes Available!`;
    textEl.textContent = currentLang === 'hi' 
      ? `आपके चयनित वर्ग एवं आय के अनुसार योजनाएं नीचे प्रदर्शित कर दी गई हैं।`
      : `Matching schemes for your selection have been displayed below.`;
  }

  activeEligibilityFilter = matched.map(s => s.id);
  renderFilteredSchemes(activeEligibilityFilter);
  
  const schemesSec = document.getElementById('schemesSection');
  if (schemesSec) {
    schemesSec.scrollIntoView({ behavior: 'smooth' });
  }
}

function resetEligibilityFilter() {
  activeEligibilityFilter = null;
  const banner = document.getElementById('calcResultBanner');
  if (banner) banner.classList.remove('active');
  const form = document.getElementById('eligibilityForm');
  if (form) form.reset();
  renderSchemes();
}

function renderFilteredSchemes(allowedIds) {
  const container = document.getElementById('schemesGrid');
  if (!container) return;
  const schemes = getSchemes();
  const filtered = schemes.filter(s => allowedIds.includes(s.id));

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; background: #fff; border-radius: 12px;">
        <p style="color: #64748b; font-size: 1.1rem;">${currentLang === 'hi' ? 'इस श्रेणी हेतु कोई विशिष्ट योजना नहीं मिली। कृपया अन्य विकल्प चुनें।' : 'No specific schemes found for this selection. Please try other options.'}</p>
        <button class="btn btn-primary btn-sm" onclick="resetEligibilityFilter()" style="margin-top: 10px;">Show All Schemes</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(s => {
    const title = currentLang === 'hi' ? s.titleHi : s.title;
    const benefits = currentLang === 'hi' ? s.benefitsHi : s.benefits;
    const eligibility = currentLang === 'hi' ? s.eligibilityHi : s.eligibility;
    const categoryName = currentLang === 'hi' ? s.categoryNameHi : s.categoryName;
    const badgeClass = `badge-${s.category}`;
    const imageSrc = s.image || 'assets/images/hero_gram_panchayat.jpg';

    return `
      <div class="scheme-card" data-scheme-id="${s.id}">
        <div class="scheme-card-img-wrap">
          <img src="${imageSrc}" alt="${title}" class="scheme-card-img" loading="lazy" onerror="this.src='assets/images/hero_gram_panchayat.jpg'">
          <div class="scheme-img-overlay"></div>
          <button class="scheme-audio-btn" onclick="playSchemeAudio('${s.id}')" title="Listen / आवाज से सुनें">
            🔊 <span>${currentLang === 'hi' ? 'सुनें' : 'Listen'}</span>
          </button>
          <span class="scheme-badge ${badgeClass}">${categoryName}</span>
        </div>
        <div class="scheme-card-body">
          <div style="margin-bottom: 8px;">
            <span style="background: #dcfce7; color: #15803d; font-size: 0.74rem; font-weight: 700; padding: 3px 8px; border-radius: 4px;">
              ✅ ${currentLang === 'hi' ? 'पात्र योजना (Eligible)' : 'Eligible Scheme'}
            </span>
          </div>
          <h3>${title}</h3>
          <p class="desc">${benefits}</p>
          <div class="scheme-meta">
            <div class="meta-row">
              <strong>${currentLang === 'hi' ? 'पात्रता:' : 'Eligibility:'}</strong>
              <span>${eligibility.length > 75 ? eligibility.substring(0, 75) + '...' : eligibility}</span>
            </div>
            <div class="meta-row">
              <strong>${currentLang === 'hi' ? 'विभाग:' : 'Dept:'}</strong>
              <span>${s.department}</span>
            </div>
          </div>
          <div class="scheme-card-footer">
            <button class="btn btn-primary btn-sm" onclick="openSchemeDetailModal('${s.id}')">
              ${currentLang === 'hi' ? 'पूरा विवरण व आवेदन' : 'View Details & Apply'} →
            </button>
            <a href="${s.portalLink}" target="_blank" rel="noopener" class="flow-link" style="font-size: 0.8rem;">
              ${currentLang === 'hi' ? 'आधिकारिक पोर्टल' : 'Official Portal'} ↗
            </a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function openSchemeDetailModal(schemeId) {
  const schemes = getSchemes();
  const scheme = schemes.find(s => s.id === schemeId);
  if (!scheme) return;

  const title = currentLang === 'hi' ? scheme.titleHi : scheme.title;
  const benefits = currentLang === 'hi' ? scheme.benefitsHi : scheme.benefits;
  const eligibility = currentLang === 'hi' ? scheme.eligibilityHi : scheme.eligibility;
  const documents = currentLang === 'hi' ? scheme.documentsHi : scheme.documents;
  const process = currentLang === 'hi' ? scheme.applyProcessHi : scheme.applyProcess;

  const modalBody = document.getElementById('schemeDetailContent');
  if (modalBody) {
    modalBody.innerHTML = `
      <div style="border-bottom: 1px solid #e2e8f0; padding-bottom: 16px; margin-bottom: 20px;">
        <span class="scheme-badge badge-${scheme.category}" style="position: static; margin-bottom: 8px; display: inline-block;">${currentLang === 'hi' ? scheme.categoryNameHi : scheme.categoryName}</span>
        <h3 style="font-size: 1.5rem; color: #0a2540; font-weight: 800;">${title}</h3>
        <p style="color: #64748b; font-size: 0.9rem; margin-top: 4px;">${scheme.department}</p>
      </div>

      <div style="display: flex; flex-direction: column; gap: 18px;">
        <div>
          <h4 style="color: #0b3b60; font-size: 1.05rem; margin-bottom: 6px;">💡 ${currentLang === 'hi' ? 'योजना के मुख्य लाभ / सहायता' : 'Key Benefits & Assistance'}</h4>
          <p style="background: #f8fafc; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #ff6f00; font-size: 0.95rem;">${benefits}</p>
        </div>

        <div>
          <h4 style="color: #0b3b60; font-size: 1.05rem; margin-bottom: 6px;">🎯 ${currentLang === 'hi' ? 'पात्रता मानदंड' : 'Eligibility Criteria'}</h4>
          <p style="background: #f8fafc; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #0d8a43; font-size: 0.95rem;">${eligibility}</p>
        </div>

        <div>
          <h4 style="color: #0b3b60; font-size: 1.05rem; margin-bottom: 6px;">📄 ${currentLang === 'hi' ? 'आवश्यक दस्तावेज' : 'Required Documents'}</h4>
          <p style="background: #f8fafc; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #185a9d; font-size: 0.95rem;">${documents}</p>
        </div>

        <div>
          <h4 style="color: #0b3b60; font-size: 1.05rem; margin-bottom: 6px;">📝 ${currentLang === 'hi' ? 'आवेदन कैसे करें (प्रक्रिया)' : 'How to Apply (Application Process)'}</h4>
          <p style="background: #f8fafc; padding: 12px 16px; border-radius: 8px; border-left: 4px solid #8b5cf6; font-size: 0.95rem;">${process}</p>
        </div>
      </div>
    `;
  }

  const applyBtn = document.getElementById('schemeDetailApplyLink');
  if (applyBtn) {
    applyBtn.href = scheme.portalLink;
  }

  openModal('schemeModal');
}

// --- GRIEVANCE SUBMISSION ENGINE ---
function handleGrievanceSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const citizenName = form.citizenName.value.trim();
  const phone = form.phone.value.trim();
  const aadhaar4 = form.aadhaar4.value.trim();
  const village = form.village.value.trim();
  const category = form.category.value;
  const priority = form.priority.value;
  const subject = form.subject.value.trim();
  const description = form.description.value.trim();

  if (!citizenName || !phone || !village || !category || !subject || !description) {
    showToast(currentLang === 'hi' ? 'कृपया सभी आवश्यक फ़ील्ड भरें।' : 'Please fill all required fields.', 'error');
    return;
  }

  // Generate Complaint ID matching academic format: EPS-UK-2026-XXXX
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const complaintId = `EPS-UK-2026-${randomNum}`;
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const categoryNames = {
    water: "Drinking Water / जल आपूर्ति",
    electricity: "Electricity / विद्युत आपूर्ति",
    road: "Roads & Drainage / सड़क एवं जल निकासी",
    sanitation: "Sanitation / स्वच्छता",
    scheme: "Government Scheme / योजना लाभ",
    pension: "Pension Issue / पेंशन समस्या",
    disaster: "Disaster Damage / आपदा क्षति",
    other: "Other Civic / अन्य जनसमस्या"
  };

  const newGrievance = {
    id: complaintId,
    citizenName,
    phone,
    aadhaar4: aadhaar4 || "N/A",
    village,
    category,
    categoryName: categoryNames[category] || category,
    priority,
    subject,
    description,
    status: "Pending",
    officerRemarks: "Complaint logged and queued for administrative review by Gram Panchayat Khatima desk.",
    officerName: "Officer Assigned Upon Review",
    createdAt: dateStr,
    updatedAt: dateStr,
    rating: null
  };

  const list = getGrievances();
  list.unshift(newGrievance);
  saveGrievances(list);

  form.reset();
  updateLiveMetrics();
  renderAdminGrievances();

  showToast(currentLang === 'hi' ? `शिकायत सफलतापूर्वक दर्ज! आईडी: ${complaintId}` : `Grievance registered! ID: ${complaintId}`, 'success');

  // Open Acknowledgment Slip Modal
  showAcknowledgmentSlip(newGrievance);
}

// --- PRINTABLE OFFICIAL ACKNOWLEDGMENT SLIP ---
function showAcknowledgmentSlip(grievance) {
  const slipContainer = document.getElementById('acknowledgmentSlipContainer');
  if (!slipContainer) return;

  slipContainer.innerHTML = `
    <div class="acknowledgment-slip printable-area">
      <div class="watermark">E-PRADHAN SEVA</div>
      <div class="slip-header">
        <div style="display: flex; align-items: center; justify-content: center; gap: 12px; margin-bottom: 8px;">
          <span style="font-size: 1.8rem;">🇮🇳</span>
          <div>
            <h4>E-PRADHAN SEVA CITIZEN PORTAL</h4>
            <p style="font-size: 0.8rem; color: #475569; font-weight: 600;">Government of Uttarakhand | Directorate of Technical Education</p>
            <p style="font-size: 0.75rem; color: #0b3b60; font-weight: 700;">Government Polytechnic, Khatima (Minor Project 2026-2027)</p>
          </div>
        </div>
        <div style="display: inline-block; background: #0b3b60; color: #fff; padding: 3px 14px; border-radius: 20px; font-size: 0.8rem; font-weight: bold; margin-top: 6px;">
          OFFICIAL GRIEVANCE REGISTRATION SLIP / पावती रसीद
        </div>
      </div>

      <table class="slip-table">
        <tr>
          <td class="field-label">Complaint ID / शिकायत आईडी:</td>
          <td><strong style="color: #c62828; font-size: 1.15rem; letter-spacing: 0.5px;">${grievance.id}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Registration Date & Time:</td>
          <td>${grievance.createdAt}</td>
        </tr>
        <tr>
          <td class="field-label">Citizen Name / नागरिक का नाम:</td>
          <td><strong>${grievance.citizenName}</strong> (Ph: ${grievance.phone})</td>
        </tr>
        <tr>
          <td class="field-label">Gram Panchayat / Location:</td>
          <td>${grievance.village}</td>
        </tr>
        <tr>
          <td class="field-label">Category / श्रेणी:</td>
          <td>${grievance.categoryName}</td>
        </tr>
        <tr>
          <td class="field-label">Priority Level:</td>
          <td><span class="status-pill ${grievance.priority === 'High' ? 'status-rejected' : 'status-review'}">${grievance.priority}</span></td>
        </tr>
        <tr>
          <td class="field-label">Subject / विषय:</td>
          <td><strong>${grievance.subject}</strong></td>
        </tr>
        <tr>
          <td class="field-label">Description / विवरण:</td>
          <td style="font-size: 0.85rem; color: #334155;">${grievance.description}</td>
        </tr>
        <tr>
          <td class="field-label">Initial Status / स्थिति:</td>
          <td><span class="status-pill status-pending">PENDING / समीक्षाधीन</span></td>
        </tr>
      </table>

      <div style="display: flex; justify-content: space-between; align-items: flex-end; margin-top: 24px; border-top: 1px dashed #cbd5e1; padding-top: 16px;">
        <div style="font-size: 0.75rem; color: #64748b; line-height: 1.4;">
          * Note: Keep this Complaint ID safe for tracking progress online.<br>
          * Track at: <strong>https://epradhan.gov.in/track</strong> or helpline 1905.<br>
          * Academic Prototype Demo - Govt Polytechnic Khatima.
        </div>
        <div style="text-align: center;">
          <div style="width: 90px; height: 90px; border: 2px dashed #94a3b8; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 0.65rem; color: #475569; margin: 0 auto;">
            <span style="font-size: 1.4rem;">🏛️</span>
            <span>Digital Stamp</span>
            <span>E-PRADHAN</span>
          </div>
          <span style="font-size: 0.72rem; color: #64748b; font-weight: 600;">Authorized Signatory</span>
        </div>
      </div>
    </div>
  `;

  openModal('acknowledgmentModal');
}

// --- GRIEVANCE TRACKING ENGINE ---
function trackGrievanceById(complaintId) {
  const query = (complaintId || document.getElementById('trackingInput')?.value || '').trim().toUpperCase();
  const resultBox = document.getElementById('trackingResultContainer');
  if (!resultBox) return;

  if (!query) {
    showToast(currentLang === 'hi' ? 'कृपया वैध शिकायत आईडी दर्ज करें।' : 'Please enter a Complaint ID.', 'error');
    return;
  }

  const list = getGrievances();
  const match = list.find(g => g.id.toUpperCase() === query);

  if (!match) {
    resultBox.innerHTML = `
      <div style="background: #fff; padding: 34px; border-radius: 12px; border: 1px solid #fee2e2; text-align: center;">
        <span style="font-size: 2.2rem; color: #ef4444;">⚠️</span>
        <h4 style="color: #991b1b; margin-top: 10px; font-size: 1.2rem;">${currentLang === 'hi' ? 'शिकायत नहीं मिली' : 'Complaint Record Not Found'}</h4>
        <p style="color: #64748b; margin-top: 6px; font-size: 0.9rem;">
          ${currentLang === 'hi' ? `आईडी '${query}' का कोई रिकॉर्ड उपलब्ध नहीं है। कृपया सही आईडी दर्ज करें (जैसे: EPS-UK-2026-1042)` : `No record found for '${query}'. Please check the ID (e.g., EPS-UK-2026-1042).`}
        </p>
      </div>
    `;
    return;
  }

  // Calculate 5-Stage Stepper States
  // 1: Login, 2: Submit, 3: Review, 4: In Progress, 5: Resolved
  let stepIndex = 2; // Submitted
  if (match.status === 'In Review') stepIndex = 3;
  if (match.status === 'In Progress') stepIndex = 4;
  if (match.status === 'Resolved') stepIndex = 5;
  if (match.status === 'Rejected') stepIndex = 3;

  const statusPillClass = {
    'Pending': 'status-pending',
    'In Review': 'status-review',
    'In Progress': 'status-progress',
    'Resolved': 'status-resolved',
    'Rejected': 'status-rejected'
  }[match.status] || 'status-pending';

  resultBox.innerHTML = `
    <div class="tracking-result-box">
      <div class="result-header-bar">
        <div>
          <span style="font-size: 0.8rem; color: #64748b; font-weight: 700;">GRIEVANCE RECORD / शिकायत विवरण</span>
          <h3 style="color: #0b3b60; font-size: 1.35rem; font-weight: 800;">${match.id}</h3>
        </div>
        <div style="display: flex; align-items: center; gap: 10px;">
          <span class="status-pill ${statusPillClass}">${match.status}</span>
          <button class="btn btn-outline btn-sm" onclick="showAcknowledgmentSlip(getGrievances().find(g => g.id === '${match.id}'))">
            🖨️ ${currentLang === 'hi' ? 'रसीद देखें' : 'View Slip'}
          </button>
        </div>
      </div>

      <div class="result-body">
        <!-- 5-Stage Visual Workflow Stepper -->
        <div style="margin-bottom: 30px; background: #f8fafc; padding: 20px; border-radius: 12px; border: 1px solid #e2e8f0;">
          <div class="stepper-pipeline">
            <div class="step-node ${stepIndex >= 1 ? 'completed' : ''}">
              <div class="step-circle">✓</div>
              <span class="step-label">${currentLang === 'hi' ? '01 लॉगिन' : '01 Login'}</span>
              <span class="step-sub">${currentLang === 'hi' ? 'नागरिक सत्यापन' : 'Verified'}</span>
            </div>
            <div class="step-node ${stepIndex >= 2 ? 'completed' : ''}">
              <div class="step-circle">✓</div>
              <span class="step-label">${currentLang === 'hi' ? '02 दर्ज' : '02 Submit'}</span>
              <span class="step-sub">${match.createdAt.split(' ')[0]}</span>
            </div>
            <div class="step-node ${stepIndex > 3 ? 'completed' : stepIndex === 3 ? 'active' : ''}">
              <div class="step-circle">${stepIndex > 3 ? '✓' : '03'}</div>
              <span class="step-label">${currentLang === 'hi' ? '03 समीक्षा' : '03 Review'}</span>
              <span class="step-sub">${match.status === 'Pending' ? 'Waiting' : 'Reviewed'}</span>
            </div>
            <div class="step-node ${stepIndex > 4 ? 'completed' : stepIndex === 4 ? 'active' : ''}">
              <div class="step-circle">${stepIndex > 4 ? '✓' : '04'}</div>
              <span class="step-label">${currentLang === 'hi' ? '04 प्रगति' : '04 Action'}</span>
              <span class="step-sub">${stepIndex >= 4 ? 'In Progress' : 'Pending'}</span>
            </div>
            <div class="step-node ${stepIndex === 5 ? 'completed' : ''}">
              <div class="step-circle">${stepIndex === 5 ? '✓' : '05'}</div>
              <span class="step-label">${currentLang === 'hi' ? '05 समाधान' : '05 Resolved'}</span>
              <span class="step-sub">${stepIndex === 5 ? 'Completed' : 'Final Step'}</span>
            </div>
          </div>
        </div>

        <div class="detail-grid">
          <div class="detail-field">
            <label>${currentLang === 'hi' ? 'नागरिक का नाम' : 'Citizen Name'}</label>
            <p>${match.citizenName} (Ph: ${match.phone})</p>
          </div>
          <div class="detail-field">
            <label>${currentLang === 'hi' ? 'ग्राम पंचायत / वार्ड' : 'Gram Panchayat / Ward'}</label>
            <p>${match.village}</p>
          </div>
          <div class="detail-field">
            <label>${currentLang === 'hi' ? 'श्रेणी एवं प्राथमिकता' : 'Category & Priority'}</label>
            <p>${match.categoryName} <span class="status-pill ${match.priority === 'High' ? 'status-rejected' : 'status-review'}" style="font-size: 0.7rem; padding: 2px 8px;">${match.priority}</span></p>
          </div>
          <div class="detail-field">
            <label>${currentLang === 'hi' ? 'अंतिम अपडेट' : 'Last Updated On'}</label>
            <p>${match.updatedAt}</p>
          </div>
        </div>

        <div style="background: #f8fafc; border-radius: 8px; padding: 16px; margin-bottom: 24px; border: 1px solid #e2e8f0;">
          <h4 style="color: #0b3b60; font-size: 1rem; margin-bottom: 6px;">📝 ${match.subject}</h4>
          <p style="color: #475569; font-size: 0.92rem; line-height: 1.6;">${match.description}</p>
        </div>

        <!-- Action / Timeline History -->
        <h4 style="color: #0a2540; font-size: 1.1rem; font-weight: 700; margin-bottom: 14px;">
          📌 ${currentLang === 'hi' ? 'कार्यवाही विवरण व अधिकारी टिप्पणी' : 'Action History & Department Remarks'}
        </h4>

        <div class="timeline-feed">
          <div class="timeline-event">
            <span class="timeline-date">${match.createdAt}</span>
            <p class="timeline-title">${currentLang === 'hi' ? 'शिकायत ऑनलाइन पंजीकृत की गई' : 'Grievance Registered Online'}</p>
            <div class="timeline-remarks">System generated token ID ${match.id} assigned to Citizen Desk Khatima.</div>
          </div>

          ${match.status !== 'Pending' ? `
            <div class="timeline-event">
              <span class="timeline-date">${match.updatedAt}</span>
              <p class="timeline-title">${match.status === 'Resolved' ? 'Resolution Completed & Verified' : 'Departmental Action In Progress'}</p>
              <div class="timeline-remarks">
                <strong>Officer:</strong> ${match.officerName}<br>
                <strong>Remarks:</strong> ${match.officerRemarks}
              </div>
            </div>
          ` : ''}
        </div>

        ${match.status === 'Resolved' ? `
          <div style="margin-top: 24px; padding: 16px; background: #ecfdf5; border-radius: 8px; border: 1px solid #a7f3d0; display: flex; justify-content: space-between; align-items: center; flex-wrap: gap; gap: 10px;">
            <div>
              <strong style="color: #065f46;">✓ Grievance Marked as Resolved</strong>
              <p style="font-size: 0.82rem; color: #047857;">Are you satisfied with the departmental resolution?</p>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="btn btn-green btn-sm" onclick="showToast('Thank you for rating our resolution 5 Stars!', 'success')">⭐⭐⭐⭐⭐ Rate</button>
            </div>
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// --- ADMIN MANAGEMENT PANEL ---
let activeAdminGrievanceId = null;

function renderAdminGrievances(filterStatus = 'all') {
  const tableBody = document.getElementById('adminGrievanceTableBody');
  if (!tableBody) return;

  const list = getGrievances();
  const filtered = list.filter(g => filterStatus === 'all' || g.status.toLowerCase() === filterStatus.toLowerCase());

  tableBody.innerHTML = filtered.map(g => {
    const statusPillClass = {
      'Pending': 'status-pending',
      'In Review': 'status-review',
      'In Progress': 'status-progress',
      'Resolved': 'status-resolved',
      'Rejected': 'status-rejected'
    }[g.status] || 'status-pending';

    return `
      <tr>
        <td><strong>${g.id}</strong></td>
        <td>
          <div style="font-weight: 600; color: #0b3b60;">${g.citizenName}</div>
          <div style="font-size: 0.78rem; color: #64748b;">${g.phone} | ${g.village}</div>
        </td>
        <td>
          <div style="font-weight: 600;">${g.subject}</div>
          <div style="font-size: 0.78rem; color: #64748b;">${g.categoryName}</div>
        </td>
        <td><span class="status-pill ${statusPillClass}">${g.status}</span></td>
        <td><span style="font-size: 0.8rem; color: #64748b;">${g.createdAt}</span></td>
        <td>
          <button class="btn btn-primary btn-sm" onclick="openAdminActionModal('${g.id}')">
            ${currentLang === 'hi' ? 'स्थिति बदलें' : 'Update Status'}
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function openAdminActionModal(complaintId) {
  activeAdminGrievanceId = complaintId;
  const list = getGrievances();
  const match = list.find(g => g.id === complaintId);
  if (!match) return;

  document.getElementById('modalAdminComplaintId').textContent = match.id;
  document.getElementById('modalAdminCitizenInfo').textContent = `${match.citizenName} (${match.village}) - ${match.subject}`;
  document.getElementById('adminNewStatus').value = match.status;
  document.getElementById('adminOfficerName').value = match.officerName === 'Officer Assigned Upon Review' ? 'Neeraj Verma (Authorized Officer, GP Khatima)' : match.officerName;
  document.getElementById('adminOfficerRemarks').value = match.officerRemarks || '';

  openModal('adminActionModal');
}

function saveAdminGrievanceStatus() {
  if (!activeAdminGrievanceId) return;

  const newStatus = document.getElementById('adminNewStatus').value;
  const officerName = document.getElementById('adminOfficerName').value.trim();
  const officerRemarks = document.getElementById('adminOfficerRemarks').value.trim();

  const list = getGrievances();
  const index = list.findIndex(g => g.id === activeAdminGrievanceId);

  if (index !== -1) {
    list[index].status = newStatus;
    list[index].officerName = officerName || "Departmental Officer";
    list[index].officerRemarks = officerRemarks || "Status updated by admin desk.";
    const now = new Date();
    list[index].updatedAt = now.toLocaleDateString('en-GB') + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    saveGrievances(list);
    closeModal('adminActionModal');
    renderAdminGrievances();
    updateLiveMetrics();
    showToast(`Complaint ${activeAdminGrievanceId} updated to ${newStatus}!`, 'success');

    // If currently tracking this id, refresh view
    const trackingInput = document.getElementById('trackingInput');
    if (trackingInput && trackingInput.value.toUpperCase() === activeAdminGrievanceId.toUpperCase()) {
      trackGrievanceById(activeAdminGrievanceId);
    }
  }
}

// Add New Scheme in Admin
function handleAddScheme(event) {
  event.preventDefault();
  const form = event.target;

  const title = form.schemeTitle.value.trim();
  const titleHi = form.schemeTitleHi.value.trim() || title;
  const category = form.schemeCategory.value;
  const department = form.schemeDept.value.trim();
  const benefits = form.schemeBenefits.value.trim();
  const eligibility = form.schemeEligibility.value.trim();
  const documents = form.schemeDocs.value.trim();
  const link = form.schemeLink.value.trim() || "https://uk.gov.in";

  const categoryNames = {
    welfare: { en: "Welfare & Pension", hi: "कल्याण एवं पेंशन" },
    financial: { en: "Financial & Loans", hi: "वित्तीय सहायता व ऋण" },
    disaster: { en: "Disaster Relief", hi: "आपदा राहत सहायता" },
    local: { en: "Local Civic Services", hi: "स्थानीय नागरिक सेवाएँ" },
    agri: { en: "Agriculture & Farmers", hi: "कृषि एवं कृषक कल्याण" }
  };

  const newId = `SCH-${String(getSchemes().length + 1).padStart(3, '0')}`;
  const newScheme = {
    id: newId,
    title,
    titleHi,
    category,
    categoryName: categoryNames[category]?.en || "Welfare",
    categoryNameHi: categoryNames[category]?.hi || "कल्याण",
    department,
    benefits,
    benefitsHi: benefits,
    eligibility,
    eligibilityHi: eligibility,
    documents,
    documentsHi: documents,
    applyProcess: "Apply through respective department portal or at Gram Panchayat CSC center.",
    applyProcessHi: "ग्राम पंचायत सीएससी अथवा विभागीय पोर्टल के माध्यम से आवेदन करें।",
    portalLink: link
  };

  const schemes = getSchemes();
  schemes.push(newScheme);
  saveSchemes(schemes);

  form.reset();
  closeModal('addSchemeModal');
  renderSchemes();
  updateLiveMetrics();
  showToast(currentLang === 'hi' ? 'नई योजना सफलतापूर्वक जोड़ी गई!' : 'New scheme added successfully!', 'success');
}

// --- MODAL HELPERS ---
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Tab navigation handler
function navigateToSection(sectionId) {
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const targetLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
  if (targetLink) targetLink.classList.add('active');

  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

// --- DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  initDataStore();
  renderSchemes();
  updateLiveMetrics();
  renderAdminGrievances();

  // Language switch clicks
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });

  // Category filter tabs
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentSchemeCategory = btn.dataset.cat;
      const searchBox = document.getElementById('schemeSearchInput');
      renderSchemes(searchBox ? searchBox.value : '');
    });
  });

  // Scheme Search input
  const schemeSearchInput = document.getElementById('schemeSearchInput');
  if (schemeSearchInput) {
    schemeSearchInput.addEventListener('input', (e) => {
      renderSchemes(e.target.value);
    });
  }

  // Hero Quick Search
  const heroSearchInput = document.getElementById('heroSearchInput');
  if (heroSearchInput) {
    heroSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = e.target.value;
        if (schemeSearchInput) schemeSearchInput.value = query;
        renderSchemes(query);
        navigateToSection('schemesSection');
      }
    });
  }

  // Grievance Form
  const grievanceForm = document.getElementById('grievanceForm');
  if (grievanceForm) {
    grievanceForm.addEventListener('submit', handleGrievanceSubmit);
  }

  // Tracking Search Form
  const trackingBtn = document.getElementById('trackingBtn');
  if (trackingBtn) {
    trackingBtn.addEventListener('click', () => trackGrievanceById());
  }
  const trackingInput = document.getElementById('trackingInput');
  if (trackingInput) {
    trackingInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') trackGrievanceById();
    });
  }

  // Admin filter dropdown
  const adminFilterStatus = document.getElementById('adminFilterStatus');
  if (adminFilterStatus) {
    adminFilterStatus.addEventListener('change', (e) => {
      renderAdminGrievances(e.target.value);
    });
  }

  // Close modals when clicking backdrop
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });
});
