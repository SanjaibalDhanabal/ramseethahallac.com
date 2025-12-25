import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <WhatsAppButton />
      <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
        <Header />
        <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/facilities" element={<Facilities />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            {/* ...other routes... */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;