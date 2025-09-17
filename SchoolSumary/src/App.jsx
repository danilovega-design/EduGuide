
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeCards from './pages/HomeCards';
import NivelPage from './pages/NivelPage';
import UnidadPage from './pages/UnidadPage';

const App = () => (
  <Router>
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1, padding: '2rem' }}>
        <Routes>
          <Route path="/" element={<HomeCards />} />
          <Route path=":nivel" element={<NivelPage />} />
          <Route path="/nivel/:nivel/unidad/:unidad" element={<UnidadPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  </Router>
);

export default App;
