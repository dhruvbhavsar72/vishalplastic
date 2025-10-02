import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
// Import your page components here
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Footer from './components/Footer';

const App: React.FC = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/:id" element={<Products />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
    <Footer/>
  </Router>
);

export default App;