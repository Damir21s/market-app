import Layout from "components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "views/MainPage";
import CatalogPage from "views/CatalogPage";
import DevicePage from "views/DevicePage";
import PromotionPage from "views/Promotion";
import NewsPage from "views/NewsPage";
import { IntlProvider } from "react-intl";
import { LOCALES } from "i18n/locales";
import { messages } from "i18n/messages";
import { createContext, useState } from "react";

export const LanguageContext = createContext<any>(null);

function App() {
  const [currentLanguage, setCurrentLanguage] = useState(LOCALES.RUSSIAN);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
      <IntlProvider
        messages={messages[currentLanguage]}
        locale={currentLanguage}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Main />} />
              <Route path="catalog" element={<CatalogPage />} />
              <Route path="catalog/:typeId" element={<CatalogPage />} />
              <Route path="device/:id" element={<DevicePage />} />
              <Route path="promotion" element={<PromotionPage />} />
              <Route path="news" element={<NewsPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </IntlProvider>
    </LanguageContext.Provider>
  );
}

export default App;
