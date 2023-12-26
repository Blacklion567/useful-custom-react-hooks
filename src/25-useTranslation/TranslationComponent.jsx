import useTranslation from "./useTranslation";

const TranslationComponent = () => {
  const { language, setLanguage, setFallbackLanguage, t } = useTranslation();

  return (
    <>
      <div>{language}</div>
      <div>{t("Hi")}</div>
      <div>{t("bye")}</div>
      <div>{t("nested.value")}</div>

      <button onClick={() => setLanguage('sp')}>Change To Spanish</button>
      <button onClick={() => setLanguage('en')}>Change to English</button>
      <button onClick={() => setFallbackLanguage("sp")}>Change FB Lang</button>
    </>
  );
};

export default TranslationComponent;
