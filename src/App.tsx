import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Booking from './pages/Booking';
import About from './pages/About';
import FAQ from './pages/FAQ';
import DPFInfo from './pages/DPFInfo';
import Remapping from './pages/Remapping';
import Pricing from './pages/Pricing';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/dpf-info" element={<DPFInfo />} />
            <Route path="/remapping" element={<Remapping />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* Fallback for other routes mentioned in nav but not implemented yet */}
            <Route path="/privacy" element={<Home />} />
            <Route path="/terms" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
