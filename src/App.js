import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { SideBar } from './component/SideBar';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Edu from './pages/Edu/Edu';
import Exp from './pages/Exp/Exp';
import Portfolio from './pages/Portfolio/Portfolio';
import SinglePortfolio from './pages/Portfolio/SinglePortfolio';
import { ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';
// import Portfolio from './pages/Portfolio/Portfolio';


const App = () => {
  const ProtectedParentRoute = () => {
    const auth = true;
    return auth ? <Outlet /> : <Navigate to='/' />;
  };

  return (
    <ThemeProvider>


      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/edu" element={<Edu />} />
          {/* <Route path="/exp" element={<Exp />} /> */}
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="//single-portfolio" element={<SinglePortfolio />} />

          <Route path="*" element={<div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
          }}>404 Not Found</div>} />
        </Routes>
      </Router>
    </ThemeProvider>

  );
};


export default App;
