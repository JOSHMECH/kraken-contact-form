import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'sw' | 'ha' | 'yo' | 'ig' | 'am' | 'zu' | 'xh' | 'af' | 'so' | 'ar';

interface Translations {
  siteName: string;
  contactUs: string;
  name: string;
  email: string;
  message: string;
  submit: string;
  sending: string;
  success: string;
  nameRequired: string;
  emailRequired: string;
  emailInvalid: string;
  messageRequired: string;
  developerCredit: string;
  darkMode: string;
  lightMode: string;
  language: string;
}

const translations: Record<Language, Translations> = {
  en: {
    siteName: 'KRAKEN',
    contactUs: 'Contact Us',
    name: 'Name',
    email: 'Email',
    message: 'Message',
    submit: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    emailInvalid: 'Please enter a valid email',
    messageRequired: 'Message is required',
    developerCredit: 'Josh_d_developer',
    darkMode: 'Dark Mode',
    lightMode: 'Light Mode',
    language: 'Language'
  },
  sw: {
    siteName: 'KRAKEN',
    contactUs: 'Wasiliana Nasi',
    name: 'Jina',
    email: 'Barua pepe',
    message: 'Ujumbe',
    submit: 'Tuma Ujumbe',
    sending: 'Inatuma...',
    success: 'Ujumbe umetumwa kwa ufanisi!',
    nameRequired: 'Jina linahitajika',
    emailRequired: 'Barua pepe inahitajika',
    emailInvalid: 'Tafadhali ingiza barua pepe sahihi',
    messageRequired: 'Ujumbe unahitajika',
    developerCredit: 'Josh_d_developer',
    darkMode: 'Hali ya Giza',
    lightMode: 'Hali ya Mwanga',
    language: 'Lugha'
  },
  ha: {
    siteName: 'KRAKEN',
    contactUs: 'Tuntube Mu',
    name: 'Suna',
    email: 'Imel',
    message: 'Saƙo',
    submit: 'Aika Saƙo',
    sending: 'Ana aikawa...',
    success: 'An aika saƙon cikin nasara!',
    nameRequired: 'Ana bukatar suna',
    emailRequired: 'Ana bukatar imel',
    emailInvalid: 'Da fatan za a shigar da ingantaccen imel',
    messageRequired: 'Ana bukatar saƙo',
    developerCredit: 'Josh_d_developer',
    darkMode: 'Yanayin Duhu',
    lightMode: 'Yanayin Haske',
    language: 'Harshe'
  },
  yo: {
    siteName: 'KRAKEN',
    contactUs: 'Kan Si Wa',
    name: 'Orukọ',
    email: 'Imeeli',
    message: 'Ifiranṣẹ',
    submit: 'Fi Ifiranṣẹ Ranṣẹ',
    sending: 'N fi ranṣẹ...',
    success: 'A ti fi ifiranṣẹ ranṣẹ ni ifijišẹ!',
    nameRequired: 'Orukọ jẹ pataki',
    emailRequired: 'Imeeli jẹ pataki',
    emailInvalid: 'Jọwọ tẹ imeeli to peye sinu',
    messageRequired: 'Ifiranṣẹ jẹ pataki',
    developerCredit: 'Josh_d_developer',
    darkMode: 'Ipo Dudu',
    lightMode: 'Ipo Imọlẹ',
    language: 'Ede'
  },
  ig: {
    siteName: 'KRAKEN',
    contactUs: 'Kpọtụrụ Anyị',
    name: 'Aha',
    email: 'Ozi-eletrik',
    message: 'Ozi',
    submit: 'Ziga Ozi',
    sending: 'Na-eziga...',
    success: 'E zigara ozi nke ọma!',
    nameRequired: 'Aha dị mkpa',
    emailRequired: 'Ozi-eletrik dị mkpa',
    emailInvalid: 'Biko tinye ozi-eletrik ziri ezi',
    messageRequired: 'Ozi dị mkpa',
    developerCredit: 'Josh_d_developer',
    darkMode: 'Ọnọdụ Ọchịchịrị',
    lightMode: 'Ọnọdụ Ìhè',
    language: 'Asụsụ'
  },
  am: {
    siteName: 'KRAKEN',
    contactUs: 'አግኙን',
    name: 'ስም',
    email: 'ኢሜይል',
    message: 'መልዕክት',
    submit: 'መልዕክት ላክ',
    sending: 'በመላክ ላይ...',
    success: 'መልዕክት በተሳካ ሁኔታ ተልኳል!',
    nameRequired: 'ስም ያስፈልጋል',
    emailRequired: 'ኢሜይል ያስፈልጋል',
    emailInvalid: 'እባክዎ ትክክለኛ ኢሜይል ያስገቡ',
    messageRequired: 'መልዕክት ያስፈልጋል',
    developerCredit: 'Josh_d_developer',
    darkMode: 'ጨለማ ሁኔታ',
    lightMode: 'ብርሃን ሁኔታ',
    language: 'ቋንቋ'
  },
  zu: {
    siteName: 'KRAKEN',
    contactUs: 'Sixhumane',
    name: 'Igama',
    email: 'I-imeyili',
    message: 'Umlayezo',
    submit: 'Thumela Umlayezo',
    sending: 'Iyathumela...',
    success: 'Umlayezo uthunyelwe ngempumelelo!',
    nameRequired: 'Igama liyadingeka',
    emailRequired: 'I-imeyili iyadingeka',
    emailInvalid: 'Sicela ufake i-imeyili efanele',
    messageRequired: 'Umlayezo uyadingeka',
    developerCredit: 'Josh_d_developer',
    darkMode: 'Imodi Emnyama',
    lightMode: 'Imodi Ekhanyayo',
    language: 'Ulimi'
  },
  xh: {
    siteName: 'KRAKEN',
    contactUs: 'Qhagamshelana Nathi',
    name: 'Igama',
    email: 'I-imeyile',
    message: 'Umyalezo',
    submit: 'Thumela Umyalezo',
    sending: 'Iyathumela...',
    success: 'Umyalezo uthunyelwe ngempumelelo!',
    nameRequired: 'Igama liyafuneka',
    emailRequired: 'I-imeyile iyafuneka',
    emailInvalid: 'Nceda ufake i-imeyile esebenzayo',
    messageRequired: 'Umyalezo uyafuneka',
    developerCredit: 'Josh_d_developer',
    darkMode: 'Imowudi Emnyama',
    lightMode: 'Imowudi Ekhanyayo',
    language: 'Ulwimi'
  },
  af: {
    siteName: 'KRAKEN',
    contactUs: 'Kontak Ons',
    name: 'Naam',
    email: 'E-pos',
    message: 'Boodskap',
    submit: 'Stuur Boodskap',
    sending: 'Stuur tans...',
    success: 'Boodskap suksesvol gestuur!',
    nameRequired: 'Naam is vereis',
    emailRequired: 'E-pos is vereis',
    emailInvalid: 'Voer asseblief \'n geldige e-pos in',
    messageRequired: 'Boodskap is vereis',
    developerCredit: 'Josh_d_developer',
    darkMode: 'Donker Modus',
    lightMode: 'Lig Modus',
    language: 'Taal'
  },
  so: {
    siteName: 'KRAKEN',
    contactUs: 'Nala Soo Xiriir',
    name: 'Magac',
    email: 'Iimayl',
    message: 'Fariinta',
    submit: 'Dir Fariinta',
    sending: 'Waa la diraya...',
    success: 'Fariinta si guul leh ayaa loo diray!',
    nameRequired: 'Magaca waa lagama maarmaan',
    emailRequired: 'Iimayl waa lagama maarmaan',
    emailInvalid: 'Fadlan geli iimayl sax ah',
    messageRequired: 'Fariinta waa lagama maarmaan',
    developerCredit: 'Josh_d_developer',
    darkMode: 'Hab Mugdi',
    lightMode: 'Hab Iftiin',
    language: 'Luqad'
  },
  ar: {
    siteName: 'KRAKEN',
    contactUs: 'اتصل بنا',
    name: 'الاسم',
    email: 'البريد الإلكتروني',
    message: 'الرسالة',
    submit: 'إرسال الرسالة',
    sending: 'جاري الإرسال...',
    success: 'تم إرسال الرسالة بنجاح!',
    nameRequired: 'الاسم مطلوب',
    emailRequired: 'البريد الإلكتروني مطلوب',
    emailInvalid: 'يرجى إدخال بريد إلكتروني صالح',
    messageRequired: 'الرسالة مطلوبة',
    developerCredit: 'Josh_d_developer',
    darkMode: 'الوضع المظلم',
    lightMode: 'الوضع المضيء',
    language: 'اللغة'
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const languageOptions = [
  { code: 'en' as Language, name: 'English' },
  { code: 'sw' as Language, name: 'Kiswahili' },
  { code: 'ha' as Language, name: 'Hausa' },
  { code: 'yo' as Language, name: 'Yorùbá' },
  { code: 'ig' as Language, name: 'Igbo' },
  { code: 'am' as Language, name: 'አማርኛ' },
  { code: 'zu' as Language, name: 'IsiZulu' },
  { code: 'xh' as Language, name: 'IsiXhosa' },
  { code: 'af' as Language, name: 'Afrikaans' },
  { code: 'so' as Language, name: 'Soomaali' },
  { code: 'ar' as Language, name: 'العربية' }
];