import { createContext, useEffect, useState } from "react";
import i18n from "../i18n";

type TLanguageContext = {
  language: string | undefined;
  toggleLanguage: (label: string) => void;
};
const LanguageContext = createContext<TLanguageContext>({
  language: "",
  toggleLanguage: () => {},
});

export const LanguageContextProvider: React.FC<{
  children: React.ReactNode;
}> = (props) => {
  const [language, setLanguage] = useState<string>(() => {
    const storedValue = localStorage.getItem("lang");
    return storedValue ? JSON.parse(storedValue) : "en";
  });

  useEffect(() => {
    document.documentElement.dir = language === "en" ? "ltr" : "rtl";
    document.documentElement.lang = language === "en" ? "en" : "fa";
    localStorage.setItem("lang", JSON.stringify(language));
    i18n.changeLanguage(language);
  }, [language]);

  function toggleLanguage(lang: string) {
    setLanguage(lang);
  }

  const languageValue = {
    language,
    toggleLanguage,
  };

  return (
    <LanguageContext.Provider value={languageValue}>
      {props.children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
