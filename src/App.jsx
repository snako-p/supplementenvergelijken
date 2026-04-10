import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import VitaminePage from './pages/VitaminePage';
import MagnesiumPage from './pages/MagnesiumPage';
import OmegaPage from './pages/OmegaPage';
import MineralenPage from './pages/MineralenPage';
import ProteinePage from './pages/ProteinePage';
import ComparisonPage from './pages/ComparisonPage';
import BestVitamineDPage from './pages/BestVitamineDPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import AffiliateDisclosure from './components/AffiliateDisclosure';
import OverOnsPage from './pages/OverOnsPage';
import ContactPage from './pages/ContactPage';
import AdverterenPage from './pages/AdverterenPage';
import TopMagnesiumPage from './pages/articles/TopMagnesiumPage';
import WheyVsPlantaardigPage from './pages/articles/WheyVsPlantaardigPage';
import BesteVitamineDPage from './pages/articles/BesteVitamineDPage';
import CreatineKoopgidsPage from './pages/guides/CreatineKoopgidsPage';
import JuistSupplementPage from './pages/guides/JuistSupplementPage';
import BeginnersGidsPage from './pages/guides/BeginnersGidsPage';
import MagnesiumcitraatVsOxidePage from './pages/ingredients/MagnesiumcitraatVsOxidePage';
import VitamineB12VormenPage from './pages/ingredients/VitamineB12VormenPage';
import WheyVormenPage from './pages/ingredients/WheyVormenPage';
import SupplementQuizPage from './pages/SupplementQuizPage';
import FilterTablePage from './pages/FilterTablePage';
import './styles/variables.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/vitamines" element={<VitaminePage />} />
        <Route path="/magnesium" element={<MagnesiumPage />} />
        <Route path="/omega-3" element={<OmegaPage />} />
        <Route path="/mineralen" element={<MineralenPage />} />
        <Route path="/proteine" element={<ProteinePage />} />
        <Route path="/vergelijken" element={<ComparisonPage />} />
        <Route path="/beste-vitamine-d-supplement-belgie" element={<BestVitamineDPage />} />
        <Route path="/privacybeleid" element={<PrivacyPolicy />} />
        <Route path="/algemene-voorwaarden" element={<TermsAndConditions />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/over-ons" element={<OverOnsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/adverteren" element={<AdverterenPage />} />
        <Route path="/artikelen/top-5-magnesium-supplementen-belgie" element={<TopMagnesiumPage />} />
        <Route path="/artikelen/whey-vs-plantaardig-eiwit" element={<WheyVsPlantaardigPage />} />
        <Route path="/artikelen/beste-vitamine-d-supplement-vergeleken" element={<BesteVitamineDPage />} />
        <Route path="/koopgidsen/creatine-koopgids" element={<CreatineKoopgidsPage />} />
        <Route path="/koopgidsen/hoe-kies-je-het-juiste-supplement" element={<JuistSupplementPage />} />
        <Route path="/koopgidsen/supplementen-voor-beginners" element={<BeginnersGidsPage />} />
        <Route path="/ingredienten/magnesiumcitraat-vs-magnesiumoxide" element={<MagnesiumcitraatVsOxidePage />} />
        <Route path="/ingredienten/vitamine-b12-vormen" element={<VitamineB12VormenPage />} />
        <Route path="/ingredienten/whey-concentraat-vs-isolaat-vs-hydrolisaat" element={<WheyVormenPage />} />
        <Route path="/supplement-quiz" element={<SupplementQuizPage />} />
        <Route path="/vergelijkingstabel" element={<FilterTablePage />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}
