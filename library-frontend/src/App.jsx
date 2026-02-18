import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import Home from './pages/Home';
import Register from './pages/Register';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import MyLoans from './pages/MyLoans';
import Profile from './pages/Profile';

const colors = {
  deepGreen: '#0B2922',
  saturatedBeige: '#EBDCB2',
  borderBeige: '#D4C391',
  danger: '#8B0000',
  textLight: '#FFFDF5'
};

const Navbar = () => {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav style={navStyle}>
      <div style={logoStyle}>BiblioTech</div>
      <div style={navLinksContainer}>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/catalog" style={linkStyle}>Catalog</Link>

        {!isAuthenticated ? (
          <>
            <Link to="/register" style={linkStyle}>Get Card</Link>
            <Link to="/login" style={linkStyle}>Login</Link>
          </>
        ) : (
          <>
            <Link to="/profile" style={linkStyle}>My Profile</Link>
            <span style={welcomeStyle}>
              Hi, {user?.username}
            </span>
            <button 
              onClick={logout} 
              style={logoutBtnStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = '#A00000'}
              onMouseOut={(e) => e.target.style.backgroundColor = colors.danger}
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div style={{ backgroundColor: '#EBDCB2', minHeight: '100vh' }}>
          <Navbar />
          <div style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/my-loans" element={<MyLoans />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </Router>
    </AuthProvider>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '1.2rem 2.5rem',
  backgroundColor: colors.deepGreen,
  color: colors.saturatedBeige,
  alignItems: 'center',
  borderBottom: `3px solid ${colors.borderBeige}`,
  boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
};

const logoStyle = {
  fontWeight: '800',
  fontSize: '1.6rem',
  letterSpacing: '1px',
  color: colors.saturatedBeige,
  fontFamily: '"Segoe UI", Roboto, sans-serif'
};

const navLinksContainer = {
  display: 'flex',
  gap: '25px',
  alignItems: 'center'
};

const linkStyle = {
  color: colors.textLight,
  textDecoration: 'none',
  fontSize: '1.05rem',
  fontWeight: '600',
  transition: 'color 0.3s ease'
};

const welcomeStyle = {
  color: colors.saturatedBeige,
  fontSize: '0.95rem',
  fontStyle: 'italic',
  marginLeft: '10px',
  borderLeft: `1px solid ${colors.borderBeige}`,
  paddingLeft: '15px'
};

const logoutBtnStyle = {
  padding: '8px 16px',
  cursor: 'pointer',
  backgroundColor: colors.danger,
  color: 'white',
  border: 'none',
  borderRadius: '6px',
  fontWeight: '700',
  fontSize: '0.9rem',
  transition: 'background-color 0.3s ease'
};

export default App;