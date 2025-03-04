import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Guides from './pages/Guides';
import VegetableGuide from './pages/VegetableGuide';
import Supplies from './pages/Supplies';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guides" element={<Guides />} />
            <Route path="/guides/:vegetable" element={<VegetableGuide />} />
            <Route path="/supplies" element={<Supplies />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;