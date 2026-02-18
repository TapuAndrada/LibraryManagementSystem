import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({ 
    username: '', 
    password: '',
    email: '',
    address: ''
  });
  const navigate = useNavigate();

  const colors = {
    deepGreen: '#0B2922',
    saturatedBeige: '#EBDCB2',
    borderBeige: '#D4C391',
    inputBg: '#FFFDF5',
    buttonHover: '#1E4D3E'
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/users', {
        method: 'POST',
        headers: { 'Accept': 'application/json',
          'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert("Library Card created successfully! Please login.");
        navigate('/login');
      } else {
        alert("Registration failed. Try again.");
      }
    } catch (err) {
      alert("Error connecting to server.");
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: colors.saturatedBeige,
    margin: '0',
    padding: '20px'
  };

  const cardStyle = {
    maxWidth: '400px',
    width: '100%',
    padding: '40px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
    textAlign: 'center',
    border: `2px solid ${colors.borderBeige}`
  };

  const titleStyle = {
    color: colors.deepGreen,
    marginBottom: '30px',
    fontFamily: '"Segoe UI", sans-serif',
    fontWeight: '800',
    fontSize: '26px'
  };

  const inputStyle = {
    padding: '14px',
    borderRadius: '6px',
    border: `2px solid ${colors.borderBeige}`,
    fontSize: '16px',
    backgroundColor: colors.inputBg,
    outline: 'none',
    transition: 'all 0.3s ease'
  };

  const buttonStyle = {
    padding: '14px',
    backgroundColor: colors.deepGreen,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '700',
    marginTop: '10px',
    transition: 'background-color 0.3s'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={titleStyle}>Create Your Digital Library Card</h2>
        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Full Name" 
            style={inputStyle}
            onChange={e => setFormData({...formData, username: e.target.value})} 
            required 
            onFocus={(e) => e.target.style.borderColor = colors.deepGreen}
            onBlur={(e) => e.target.style.borderColor = colors.borderBeige}
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            style={inputStyle}
            onChange={e => setFormData({...formData, email: e.target.value})} 
            required 
            onFocus={(e) => e.target.style.borderColor = colors.deepGreen}
            onBlur={(e) => e.target.style.borderColor = colors.borderBeige}
          />
          <input 
            type="password" 
            placeholder="Choose a Password" 
            style={inputStyle}
            onChange={e => setFormData({...formData, password: e.target.value})} 
            required 
            onFocus={(e) => e.target.style.borderColor = colors.deepGreen}
            onBlur={(e) => e.target.style.borderColor = colors.borderBeige}
          />
          <input 
            type="address" 
            placeholder="Enter your street address" 
            style={inputStyle}
            onChange={e => setFormData({...formData, address: e.target.value})} 
            required 
            onFocus={(e) => e.target.style.borderColor = colors.deepGreen}
            onBlur={(e) => e.target.style.borderColor = colors.borderBeige}
          />
          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = colors.buttonHover}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.deepGreen}
          >
            Generate Card
          </button>
        </form>
        <p style={{ marginTop: '20px', fontSize: '14px', color: colors.deepGreen, fontWeight: '600' }}>
          Join our community today
        </p>
      </div>
    </div>
  );
};

export default Register;