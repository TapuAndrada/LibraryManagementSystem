import React from 'react';
import { useNavigate } from 'react-router-dom';
import TopBooks from '../components/TopBooks';

const Home = () => {
  const navigate = useNavigate();

  const colors = {
    deepGreen: '#0B2922',
    saturatedBeige: '#EBDCB2',
    borderBeige: '#D4C391',
    cardBg: '#FFFFFF',
    textMain: '#0B2922',
    buttonHoverGreen: '#1E4D3E',
    lightBeigeText: '#FFFDF5'
  };

  const containerStyle = {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: colors.deepGreen,
    margin: '0'
  };

  const heroSection = {
    backgroundColor: colors.saturatedBeige,
    padding: '100px 10%',
    textAlign: 'center',
    color: colors.deepGreen,
    borderBottom: `3px solid ${colors.borderBeige}`,
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
  };

  const titleStyle = {
    fontSize: '3.5rem',
    marginBottom: '25px',
    fontWeight: '900',
    fontFamily: '"Segoe UI", Roboto, sans-serif'
  };

  const subtitleStyle = {
    fontSize: '1.3rem',
    maxWidth: '800px',
    margin: '0 auto 40px',
    lineHeight: '1.8',
    fontWeight: '600'
  };

  const featuresGrid = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
    padding: '80px 10%',
    backgroundColor: colors.deepGreen
  };

  const featureCard = {
    padding: '40px',
    backgroundColor: colors.cardBg,
    borderRadius: '15px',
    border: `2px solid ${colors.borderBeige}`,
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
    transition: 'transform 0.3s ease'
  };

  const primaryBtn = {
    padding: '15px 45px',
    backgroundColor: colors.deepGreen,
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: '700',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  };

  const secondaryBtn = {
    padding: '12px 20px',
    backgroundColor: colors.deepGreen,
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    marginTop: '20px',
    fontWeight: '700',
    fontSize: '0.9rem',
    transition: 'background-color 0.3s'
  };

  const footerStyle = {
    textAlign: 'center',
    padding: '60px 20px',
    color: colors.saturatedBeige,
    fontWeight: '600',
    fontStyle: 'italic',
    backgroundColor: colors.deepGreen
  };

  return (
    <div style={containerStyle}>
      <section style={heroSection}>
        <h1 style={titleStyle}>Your Library, Now Just a Click Away</h1>
        <p style={subtitleStyle}>
          Welcome to our online platform. We’ve brought the heart of our physical
          library directly to your screen, making your reading experience
          smoother and more accessible.
        </p>
        <button
          onClick={() => navigate('/catalog')}
          style={primaryBtn}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = colors.buttonHoverGreen;
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = colors.deepGreen;
            e.target.style.transform = 'scale(1)';
          }}
        >
          Explore Collection
        </button>
      </section>
      <div style={{ padding: '40px 10%', backgroundColor: colors.deepGreen }}>
        <TopBooks />
      </div>

      <section style={featuresGrid}>
        <div
          style={featureCard}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div>
            <h3 style={{ color: colors.deepGreen, marginBottom: '15px', fontSize: '1.5rem', fontWeight: '800' }}>Search the Catalog</h3>
            <p style={{ color: '#333', lineHeight: '1.6', fontWeight: '500' }}>Instantly check book availability in our collection from the comfort of your home.</p>
          </div>
          <button
            onClick={() => navigate('/catalog')}
            style={secondaryBtn}
            onMouseOver={(e) => e.target.style.backgroundColor = colors.buttonHoverGreen}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.deepGreen}
          >
            Search Books
          </button>
        </div>

        <div
          style={featureCard}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div>
            <h3 style={{ color: colors.deepGreen, marginBottom: '15px', fontSize: '1.5rem', fontWeight: '800' }}>Reserve & Collect</h3>
            <p style={{ color: '#333', lineHeight: '1.6', fontWeight: '500' }}>Found your next read? Reserve it online and we’ll have it ready for you at the front desk.</p>
          </div>
          <button
            onClick={() => navigate('/catalog')}
            style={secondaryBtn}
            onMouseOver={(e) => e.target.style.backgroundColor = colors.buttonHoverGreen}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.deepGreen}
          >
            Make a Reservation
          </button>
        </div>

        <div
          style={featureCard}
          onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          <div>
            <h3 style={{ color: colors.deepGreen, marginBottom: '15px', fontSize: '1.5rem', fontWeight: '800' }}>Digital Membership</h3>
            <p style={{ color: '#333', lineHeight: '1.6', fontWeight: '500' }}>Not a member yet? Sign up for your Library Card online and start exploring immediately.</p>
          </div>
          <button
            onClick={() => navigate('/register')}
            style={secondaryBtn}
            onMouseOver={(e) => e.target.style.backgroundColor = colors.buttonHoverGreen}
            onMouseOut={(e) => e.target.style.backgroundColor = colors.deepGreen}
          >
            Get Your Card
          </button>
        </div>
      </section>

      <footer style={footerStyle}>
        <p>Explore, reserve, and enjoy. We’ll see you at the library!</p>
      </footer>
    </div>
  );
};

export default Home;