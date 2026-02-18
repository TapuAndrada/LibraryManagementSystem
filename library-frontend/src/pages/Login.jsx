import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const colors = {
    deepGreen: '#0B2922',
    saturatedBeige: '#EBDCB2',
    borderBeige: '#D4C391',
    buttonHover: '#1E4D3E',
    inputBg: '#FFFDF5'
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      
      if (result.status === "SUCCESS") {
        login({ 
          username: formData.username, 
          id: result.id 
        }); 
        navigate('/catalog');
      } else {
        alert(result.message);
      }
    } catch (err) {
      alert("Error connecting to server");
    }
  };

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: colors.saturatedBeige,
    margin: '0'
  };

  const cardStyle = {
    maxWidth: '350px',
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
    fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    fontWeight: '800',
    fontSize: '28px'
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
        <h2 style={titleStyle}>Reader Login</h2>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="text" 
            placeholder="Username" 
            style={inputStyle}
            value={formData.username}
            onChange={e => setFormData({...formData, username: e.target.value})} 
            required
            onFocus={(e) => {
                e.target.style.borderColor = colors.deepGreen;
                e.target.style.boxShadow = '0 0 5px rgba(11, 41, 34, 0.2)';
            }}
            onBlur={(e) => {
                e.target.style.borderColor = colors.borderBeige;
                e.target.style.boxShadow = 'none';
            }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            style={inputStyle}
            value={formData.password}
            onChange={e => setFormData({...formData, password: e.target.value})} 
            required
            onFocus={(e) => {
                e.target.style.borderColor = colors.deepGreen;
                e.target.style.boxShadow = '0 0 5px rgba(11, 41, 34, 0.2)';
            }}
            onBlur={(e) => {
                e.target.style.borderColor = colors.borderBeige;
                e.target.style.boxShadow = 'none';
            }}
          />
          <button 
            type="submit" 
            style={buttonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = colors.buttonHover}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.deepGreen}
          >
            Sign In
          </button>
        </form>
        <p style={{ marginTop: '25px', fontSize: '15px', color: colors.deepGreen, fontWeight: '600' }}>
          Welcome Back
        </p>
      </div>
    </div>
  );
};

export default Login;