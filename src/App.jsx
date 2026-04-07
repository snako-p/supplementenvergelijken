import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import HomePage from './pages/HomePage';
import VitaminePage from './pages/VitaminePage';
import MagnesiumPage from './pages/MagnesiumPage';
import OmegaPage from './pages/OmegaPage';
import ComparisonPage from './pages/ComparisonPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import AffiliateDisclosure from './components/AffiliateDisclosure';
import BestVitamineDPage from './pages/BestVitamineDPage';
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
        <Route path="/vergelijken" element={<ComparisonPage />} />
        <Route path="/privacybeleid" element={<PrivacyPolicy />} />
        <Route path="/algemene-voorwaarden" element={<TermsAndConditions />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/beste-vitamine-d-supplement-belgie" element={<BestVitamineDPage />} />
      </Routes>
      <Footer />
      <CookieBanner />
    </BrowserRouter>
  );
}
