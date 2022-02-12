import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { SideBar } from './component/SideBar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Edu from './pages/Edu/Edu';
import Exp from './pages/Exp/Exp';
const App = () => {
  const ProtectedParentRoute = () => {
    const auth = true;
    return auth ? <Outlet /> : <Navigate to='/' />;
  };
  return (
    <Router>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/edu" element={<Edu />} />
        <Route path="/exp" element={<Exp />} />

        <Route path="*" element={<div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}>404 Not Found</div>} />
      </Routes>
    </Router>

  );
};


export default App;
