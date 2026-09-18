// src/data/translations.ts

export type LanguageCode = 'en' | 'hi' | 'sat' | 'unr' | 'hoc' | 'kru';

export interface LanguageOption {
  code: LanguageCode;
  label: string;
  nativeLabel: string;
  isFullySupported: boolean;
}

export const SUPPORTED_LANGUAGES: LanguageOption[] = [
  { code: 'en', label: 'English', nativeLabel: 'English', isFullySupported: true },
  { code: 'hi', label: 'Hindi', nativeLabel: 'हिन्दी', isFullySupported: true },
  { code: 'sat', label: 'Santali', nativeLabel: 'संथाली (ᱥᱟᱱᱛᱟᱲᱤ)', isFullySupported: false },
  { code: 'unr', label: 'Mundari', nativeLabel: 'मुंडारी (Mundari)', isFullySupported: false },
  { code: 'hoc', label: 'Ho', nativeLabel: 'हो (Ho)', isFullySupported: false },
  { code: 'kru', label: 'Kurukh', nativeLabel: 'कुड़ुख (Kurukh)', isFullySupported: false },
];

export const TRANSLATIONS: Record<LanguageCode, Record<string, string>> = {
  en: {
    // Nav
    'nav.courses': 'Courses',
    'nav.career': 'Career Paths',
    'nav.ai_guide': 'AI Guide',
    'nav.portfolio': 'Portfolio',
    'nav.certificates': 'Certificates',
    'nav.about': 'About',
    'nav.bookmarks': 'Saved',
    'nav.login': 'Log in',
    'nav.get_started': 'Get Started',
    'nav.profile': 'My Profile',
    'nav.logout': 'Sign Out',

    // Hero
    'hero.eyebrow': 'BUILT FOR THE NEXT GENERATION',
    'hero.headline_part1': 'Skills that open',
    'hero.headline_part2': 'new possibilities.',
    'hero.headline_highlight': 'possibilities.',
    'hero.subtext': 'Learn practical skills, discover your path, and build a verified professional identity that moves with you.',
    'hero.cta_explore': 'Explore Skills',
    'hero.cta_ai': 'Meet your AI Guide',
    'hero.stat_learners': '10K+ Demo Learners',
    'hero.stat_paths': '50+ Learning Paths',
    'hero.stat_languages': '6 Regional Languages',

    // Trust Strip
    'trust.learn_tag': 'LEARN',
    'trust.learn_desc': '50+ Practical Courses',
    'trust.build_tag': 'BUILD',
    'trust.build_desc': '10+ Career Roadmaps',
    'trust.show_tag': 'SHOW',
    'trust.show_desc': 'Live Digital Portfolio',
    'trust.prove_tag': 'PROVE',
    'trust.prove_desc': 'Verified QR Certificates',

    // Featured Courses
    'courses.section_tag': 'CURATED LEARNING',
    'courses.heading': 'Learn something that moves you forward.',
    'courses.subheading': 'From modern digital skills to high-value indigenous enterprise and certified trades.',
    'courses.view_all': 'View All Courses',
    'courses.search_placeholder': 'Search skills, topics, tools...',
    'courses.filter_all': 'All Categories',
    'courses.duration': 'Duration',
    'courses.level': 'Level',
    'courses.enroll': 'Enroll Now',
    'courses.enrolled': 'Enrolled',
    'courses.completed': 'Completed',
    'courses.explore': 'View Syllabus',

    // Career Path
    'career.section_tag': 'ROADMAPS WITH CLARITY',
    'career.heading': "Don't just learn. Know where you're going.",
    'career.subheading': 'Interactive roadmaps showing every milestone from zero experience to income generation.',
    'career.explore_button': 'View Full Roadmap',

    // AI Guide
    'ai.section_tag': 'INTELLIGENT ADVISOR',
    'ai.heading': 'Not sure what to learn next?',
    'ai.subtext': 'Your AI Career Guide analyzes your education, district, and interests to build an actionable stepwise path.',
    'ai.cta': 'Build My Learning Path',
    'ai.sample_prompt': 'I finished Class 12 and I like computers.',

    // Language Section
    'lang.section_tag': 'REGIONAL ACCESS',
    'lang.heading': 'Learn in the language that feels like home.',
    'lang.subtext': 'Course lectures, summaries, and transcripts are translated and voiced in the indigenous tongues of Jharkhand.',
    'lang.audio_preview': 'Lesson Audio Preview',

    // Portfolio Section
    'portfolio.section_tag': 'SHOWCASE YOUR WORK',
    'portfolio.heading': 'Your skills deserve a place to be seen.',
    'portfolio.subtext': 'Every course you complete, project you build, and credential you earn automatically updates your shareable digital portfolio.',
    'portfolio.view_sample': 'View Live Portfolio Preview',
    'portfolio.strength': 'Portfolio Strength',

    // Certificate Section
    'cert.section_tag': 'CRYPTOGRAPHICALLY VERIFIED',
    'cert.heading': 'Credentials that employers trust.',
    'cert.subtext': 'Earn QR-verifiable certificates linked to your digital portfolio with unique cryptographic hashes.',
    'cert.verify_btn': 'Verify Certificate',

    // Opportunities
    'opp.section_tag': 'REGIONAL POTENTIAL',
    'opp.heading': 'Skills rooted locally. Opportunities without limits.',
    'opp.subtext': 'Bridging traditional tribal strengths with high-growth digital markets.',

    // Final CTA
    'cta.heading': 'Your next skill could change your next step.',
    'cta.subtext': 'Join thousands of ambitious youth across Jharkhand transforming their careers today.',
    'cta.start': 'Start Learning Free',
    'cta.explore_careers': 'Explore Career Paths',

    // Footer
    'footer.description': 'A high-impact skill development and AI-guided career platform dedicated to the tribal and rural youth of Jharkhand, India.',
    'footer.rights': 'All rights reserved. Designed with Apple-inspired precision and Jharkhand cultural heritage.',
  },
  hi: {
    // Nav
    'nav.courses': 'कोर्सेस',
    'nav.career': 'करियर पाथ',
    'nav.ai_guide': 'एआई गाइड',
    'nav.portfolio': 'पोर्टफोलियो',
    'nav.certificates': 'प्रमाणपत्र',
    'nav.about': 'परिचय',
    'nav.bookmarks': 'सहेजे गए',
    'nav.login': 'लॉग इन',
    'nav.get_started': 'शुरू करें',
    'nav.profile': 'मेरी प्रोफ़ाइल',
    'nav.logout': 'लॉग आउट',

    // Hero
    'hero.eyebrow': 'नई पीढ़ी के लिए निर्मित',
    'hero.headline_part1': 'हुनर जो खोलें',
    'hero.headline_part2': 'नई संभावनाएं।',
    'hero.headline_highlight': 'संभावनाएं।',
    'hero.subtext': 'व्यावहारिक हुनर सीखें, अपनी सही राह चुनें, और अपनी मजबूत पहचान बनाएं जो हमेशा आपके साथ चले।',
    'hero.cta_explore': 'हुनर सीखें',
    'hero.cta_ai': 'एआई करियर गाइड से मिलें',
    'hero.stat_learners': '10,000+ शिक्षार्थी',
    'hero.stat_paths': '50+ सीखने के मार्ग',
    'hero.stat_languages': '6 क्षेत्रीय भाषाएं',

    // Trust Strip
    'trust.learn_tag': 'सीखें',
    'trust.learn_desc': '50+ व्यावहारिक कोर्सेस',
    'trust.build_tag': 'बनाएं',
    'trust.build_desc': '10+ करियर रोडमैप',
    'trust.show_tag': 'दिखाएं',
    'trust.show_desc': 'लाइव डिजिटल पोर्टफोलियो',
    'trust.prove_tag': 'प्रमाणित करें',
    'trust.prove_desc': 'क्यूआर सत्यापित प्रमाण पत्र',

    // Featured Courses
    'courses.section_tag': 'सर्वश्रेष्ठ कोर्सेस',
    'courses.heading': 'कुछ ऐसा सीखें जो आपको आगे बढ़ाए।',
    'courses.subheading': 'डिजिटल हुनर से लेकर स्थानीय लाह, रेशम उद्यम और तकनीकी व्यवसायों तक।',
    'courses.view_all': 'सभी कोर्सेस देखें',
    'courses.search_placeholder': 'हुनर, विषय या उपकरण खोजें...',
    'courses.filter_all': 'सभी श्रेणियां',
    'courses.duration': 'अवधि',
    'courses.level': 'स्तर',
    'courses.enroll': 'शुरू करें',
    'courses.enrolled': 'शामिल हैं',
    'courses.completed': 'पूरा हुआ',
    'courses.explore': 'पाठ्यक्रम देखें',

    // Career Path
    'career.section_tag': 'स्पष्ट करियर मार्ग',
    'career.heading': 'सिर्फ सीखें नहीं, जानें कि आप कहां जा रहे हैं।',
    'career.subheading': 'शून्य अनुभव से लेकर स्वतंत्र आय तक के हर पड़ाव को दर्शाने वाले स्पष्ट रोडमैप।',
    'career.explore_button': 'पूरा रोडमैप देखें',

    // AI Guide
    'ai.section_tag': 'बुद्धिमान सलाहकार',
    'ai.heading': 'तय नहीं कर पा रहे कि क्या सीखें?',
    'ai.subtext': 'आपका एआई करियर गाइड आपकी शिक्षा, जिले और रुचियों के आधार पर एक कदम-दर-कदम मार्ग तैयार करता है।',
    'ai.cta': 'मेरा लर्निंग पाथ बनाएं',
    'ai.sample_prompt': 'मैंने 12वीं पास की है और मुझे कंप्यूटर पसंद है।',

    // Language Section
    'lang.section_tag': 'मातृभाषा में शिक्षा',
    'lang.heading': 'सीखें उस भाषा में जो दिल के सबसे करीब हो।',
    'lang.subtext': 'पाठ्यक्रमों का अनुवाद और ऑडियो झारखंड की पारंपरिक भाषाओं में उपलब्ध कराया जा रहा है।',
    'lang.audio_preview': 'पाठ का ऑडियो पूर्वावलोकन',

    // Portfolio Section
    'portfolio.section_tag': 'अपनी पहचान बनाएं',
    'portfolio.heading': 'आपके हुनर को एक मंच मिलना चाहिए।',
    'portfolio.subtext': 'आपका हर पूरा किया कोर्स, प्रोजेक्ट और सर्टिफिकेट अपने आप आपके डिजिटल पोर्टफोलियो में जुड़ जाता है।',
    'portfolio.view_sample': 'लाइव पोर्टफोलियो का नमूना देखें',
    'portfolio.strength': 'पोर्टफोलियो मजबूती',

    // Certificate Section
    'cert.section_tag': 'प्रमाणित पहचान',
    'cert.heading': 'ऐसे प्रमाणपत्र जिन पर नियोक्ताओं को भरोसा हो।',
    'cert.subtext': 'क्यूआर कोड और विशेष क्रिप्टोग्राफिक हैश से सुरक्षित प्रमाणपत्र प्राप्त करें।',
    'cert.verify_btn': 'सत्यापित करें',

    // Opportunities
    'opp.section_tag': 'स्थानीय संभावनाएं',
    'opp.heading': 'हुनर स्थानीय, अवसर असीम।',
    'opp.subtext': 'पारंपरिक जनजातीय क्षमताओं को आधुनिक बाजारों से जोड़ना।',

    // Final CTA
    'cta.heading': 'आपका अगला हुनर आपका अगला कदम बदल सकता है।',
    'cta.subtext': 'झारखंड के हजारों युवाओं से जुड़ें जो अपने सपनों को हकीकत में बदल रहे हैं।',
    'cta.start': 'मुफ्त सीखना शुरू करें',
    'cta.explore_careers': 'करियर मार्ग देखें',

    // Footer
    'footer.description': 'झारखंड के जनजातीय और ग्रामीण युवाओं के हुनर और उज्ज्वल भविष्य को समर्पित एक आधुनिक मंच।',
    'footer.rights': 'सर्वाधिकार सुरक्षित। सुरुचिपूर्ण तकनीक और झारखंडी सांस्कृतिक धरोहर से प्रेरित।',
  },
  // Structural fallback for Santali, Mundari, Ho, Kurukh
  sat: {
    'nav.courses': 'ᱥᱮᱪᱮᱫ (Courses)',
    'nav.career': 'ᱠᱟᱹᱢᱤ ᱰᱟᱦᱟᱨ (Career)',
    'nav.ai_guide': 'AI ᱫᱤᱥᱟᱹ (AI Guide)',
    'nav.portfolio': 'ᱯᱳᱨᱴᱯᱷᱳᱞᱤᱭᱳ (Portfolio)',
    'nav.certificates': 'ᱥᱟᱠᱷᱤ (Certificates)',
    'nav.login': 'ᱵᱚᱞᱚᱱ (Login)',
    'nav.get_started': 'ᱮᱦᱚᱵᱽ (Get Started)',
    'hero.eyebrow': 'ᱱᱟᱶᱟ ᱯᱤᱲᱦᱤ ᱞᱟᱹᱜᱤᱫ',
    'hero.headline_part1': 'ᱦᱩᱱᱟᱹᱨ ᱡᱟᱦᱟᱸ ᱡᱷᱤᱡᱟ',
    'hero.headline_part2': 'ᱱᱟᱶᱟ ᱫᱟᱣ᱾',
    'hero.headline_highlight': 'ᱱᱟᱶᱟ ᱫᱟᱣ᱾',
    'hero.subtext': 'ᱟᱯᱱᱟᱨ ᱦᱩᱱᱟᱹᱨ ᱥᱮᱪᱮᱫᱚᱜ ᱯᱮ, ᱟᱯᱱᱟᱨ ᱰᱟᱦᱟᱨ ᱯᱟᱱᱛᱮ ᱯᱮ, ᱟᱨ ᱢᱤᱫ ᱢᱟᱨᱟᱝ ᱩᱯᱨᱩᱢ ᱵᱮᱱᱟᱣ ᱯᱮ᱾',
    'hero.cta_explore': 'ᱦᱩᱱᱟᱹᱨ ᱧᱮᱞ ᱯᱮ',
    'hero.cta_ai': 'AI ᱜᱟᱛᱮ ᱥᱟᱶ ᱧᱟᱯᱟᱢ',
    'courses.heading': 'ᱥᱮᱪᱮᱫᱚᱜ ᱯᱮ ᱡᱟᱦᱟᱸ ᱟᱯᱮ ᱞᱟᱦᱟ ᱤᱫᱤ ᱯᱮᱭᱟ᱾',
    'courses.subheading': 'ᱴᱮᱠᱱᱚᱞᱚᱡᱤ ᱠᱷᱚᱱ ᱮᱛᱚᱦᱚᱵ ᱠᱟᱛᱮ ᱡᱷᱟᱨᱠᱷᱚᱸᱰ ᱨᱮᱭᱟᱜ ᱞᱟᱦᱟ ᱟᱨ ᱨᱮᱥᱚᱢ ᱫᱷᱟᱹᱵᱤᱡ᱾',
    'courses.view_all': 'ᱡᱚᱛᱚ ᱠᱳᱨᱥ ᱧᱮᱞ ᱢᱮ',
    'cta.heading': 'ᱟᱢᱟᱜ ᱫᱟᱨᱟᱭ ᱦᱩᱱᱟᱹᱨ ᱟᱢᱟᱜ ᱡᱤᱭᱚᱱ ᱮ ᱵᱚᱫᱚᱞ ᱫᱟᱲᱮᱭᱟᱜᱼᱟ᱾',
    'cta.start': 'ᱥᱮᱪᱮᱫ ᱮᱦᱚᱵᱽ ᱢᱮ',
    'cta.explore_careers': 'ᱠᱟᱹᱢᱤ ᱰᱟᱦᱟᱨ ᱯᱟᱱᱛᱮ ᱢᱮ',
  },
  unr: {
    'nav.courses': 'इतु (Courses)',
    'nav.career': 'होर (Career)',
    'nav.ai_guide': 'AI गाइड (AI Guide)',
    'nav.portfolio': 'पोर्टफोलियो (Portfolio)',
    'nav.certificates': 'प्रमाणपत्र (Certificates)',
    'nav.login': 'बोलो (Login)',
    'nav.get_started': 'एटोब (Get Started)',
    'hero.eyebrow': 'नवा पीढ़ी लागीन',
    'hero.headline_part1': 'हुनर जे खोलिया',
    'hero.headline_part2': 'नवा सुबिधा।',
    'hero.headline_highlight': 'नवा सुबिधा।',
    'hero.subtext': 'हुनर इतू पे, अपान होर नामे पे, आर मारंग उपुरुम बाई पे।',
    'hero.cta_explore': 'हुनर लेल पे',
    'hero.cta_ai': 'AI गाइड लो नाम',
    'courses.heading': 'इतू पे जे अपेके लाहा इदीया।',
    'courses.subheading': 'डिजिटल हुनर एतोब ते स्थानीय लाह आर तसर रेशम उद्योग धबीज।',
    'courses.view_all': 'सोबेन कोर्स लेल पे',
    'cta.heading': 'अपेया अगला हुनर अपेया जीवन बदलेला।',
    'cta.start': 'इतु एतोब पे',
    'cta.explore_careers': 'होर नामे पे',
  },
  hoc: {
    'nav.courses': 'इटू (Courses)',
    'nav.career': 'होरा (Career)',
    'nav.ai_guide': 'AI गाइड (AI Guide)',
    'nav.portfolio': 'पोर्टफोलियो (Portfolio)',
    'nav.certificates': 'सर्टिफिकेट (Certificates)',
    'nav.login': 'बोलो (Login)',
    'nav.get_started': 'एटोब (Get Started)',
    'hero.eyebrow': 'नवा पीढ़ी लागिद',
    'hero.headline_part1': 'हुनर जे खोलिया',
    'hero.headline_part2': 'नवा होरा।',
    'hero.headline_highlight': 'नवा होरा।',
    'hero.subtext': 'हुनर इटू पे, अपान होरा नामे पे, आर मारंग उपुरुम बाई पे।',
    'hero.cta_explore': 'हुनर नेल पे',
    'hero.cta_ai': 'AI गाइड लो नाम',
    'courses.heading': 'इटू पे जे अपेके लाहा इदीया।',
    'courses.subheading': 'डिजिटल हुनर एतोब ते स्थानीय लाह आर तसर रेशम उद्योग धबीज।',
    'courses.view_all': 'सोबेन कोर्स नेल पे',
    'cta.heading': 'अपेया अगला हुनर अपेया जीवन बदलेला।',
    'cta.start': 'इटू एतोब पे',
    'cta.explore_careers': 'होरा नामे पे',
  },
  kru: {
    'nav.courses': 'पढ़ना (Courses)',
    'nav.career': 'डहरे (Career)',
    'nav.ai_guide': 'AI गाइड (AI Guide)',
    'nav.portfolio': 'पोर्टफोलियो (Portfolio)',
    'nav.certificates': 'प्रमाणपत्र (Certificates)',
    'nav.login': 'कोरना (Login)',
    'nav.get_started': 'शुरू नंना (Get Started)',
    'hero.eyebrow': 'पुन्ना पीढ़ी खातिर',
    'hero.headline_part1': 'हुनर एकम तिंगी',
    'hero.headline_part2': 'पुन्ना डहरे।',
    'hero.headline_highlight': 'पुन्ना डहरे।',
    'hero.subtext': 'हुनर सीखेके, तंगहै डहरे खंखेके, अरा पुन्ना पहचान कमके।',
    'hero.cta_explore': 'हुनर एरा',
    'hero.cta_ai': 'AI गाइड गने खंखा',
    'courses.heading': 'सीखा एकम नीम मुन्ने कालो।',
    'courses.subheading': 'डिजिटल हुनर ती लेके लाख, रेशम अरा स्थानीय उद्योग तक।',
    'courses.view_all': 'हुरमी कोर्स एरा',
    'cta.heading': 'निंहाई पुन्ना हुनर निंहाई जीवन बदलो।',
    'cta.start': 'सीखना शुरू नंना',
    'cta.explore_careers': 'डहरे एरा',
  }
};
