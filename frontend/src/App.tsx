import Layout from "components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "views/MainPage";
import CatalogPage from "views/CatalogPage";
import DevicePage from "views/DevicePage";
import PromotionPage from "views/Promotion";
import NewsPage from "views/NewsPage";

function App() {
  return (
    <div>
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
    </div>
  );
}

export default App;
