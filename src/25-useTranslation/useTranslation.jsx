import { useLocalStorage } from "../8-useStorage/useStorage";
import * as translation from './translations';


const useTranslation = () => {
  const [language, setLanguage] = useLocalStorage('language', 'en');
  const [fallbackLanguage, setFallbackLanguage] = useLocalStorage('fallbackLanguage', 'en');

  const translate = key => {
    const keys = key.split('.');
    return (
      getNestedTranslation(language, keys) ??
      getNestedTranslation(fallbackLanguage, keys) ??
      key
    );
  };

  return {
    language,
    setLanguage,
    fallbackLanguage,
    setFallbackLanguage,
    t: translate,
  };
};


function getNestedTranslation(language, keys) {
  return keys.reduce((obj, key) => {
    return obj?.[key];
  }, translation[language]);
}

export default useTranslation;
