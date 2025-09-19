import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/Header';
// import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Syllabus from './pages/Syllabus/Syllabus';


const App = () => (
  <Router basename="/EduGuide">
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Header />
      <main className="mainContent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="EduGuide/syllabus/:nivel/:unidad" element={<Syllabus />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  </Router>
);

export default App;
