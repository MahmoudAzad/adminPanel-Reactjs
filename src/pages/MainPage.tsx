import { useTranslation } from "react-i18next";

const MainPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="milad">
      <h1>{t("MahmoudAzad")}</h1>
    </div>
  );
};

export default MainPage;
