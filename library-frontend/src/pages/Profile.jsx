import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import AIRecommendations from '../components/AIRecommendations';

const Profile = () => {
  const { user, logout } = useAuth();
  const [fullUserData, setFullUserData] = useState(null);
  
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ address: '', password: '' });
  
  const navigate = useNavigate();

  const colors = {
    deepGreen: '#0B2922',
    saturatedBeige: '#EBDCB2',
    borderBeige: '#D4C391',
    cardBg: '#FFFFFF',
    infoBg: '#FFFDF5',
    danger: '#8B0000',
    buttonHover: '#1E4D3E'
  };

  useEffect(() => {
    if (user?.id) {
      fetch(`http://localhost:8080/users/${user.id}`)
        .then(res => res.json())
        .then(data => {
          setFullUserData(data);
          setFormData({ 
            address: data.address || '', 
            password: data.password || '' 
          });
        })
        .catch(err => console.error("Error fetching user details:", err));
    }
  }, [user]);

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:8080/users/${user.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          address: formData.address, 
          password: formData.password 
        })
      });

      if (response.ok) {
        const updatedUser = await response.json();
        setFullUserData(updatedUser);
        alert("Profile updated successfully!");
        setIsEditing(false);
      } else {
        alert("Failed to update profile.");
      }
    } catch (err) {
      alert("Server error during update.");
    }
  };

  const handleDeleteAccount = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        const response = await fetch(`http://localhost:8080/users/${user.id}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          alert("Account deleted.");
          logout();
          navigate('/');
        }
      } catch (err) {
        alert("Server error.");
      }
    }
  };

  const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh', backgroundColor: colors.saturatedBeige, padding: '60px 20px' };
  const mainWrapperStyle = { display: 'flex', flexDirection: 'row', gap: '30px', maxWidth: '1100px', width: '100%', alignItems: 'stretch' };
  const leftColumnStyle = { flex: '1', backgroundColor: colors.cardBg, padding: '40px', borderRadius: '12px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', border: `2px solid ${colors.borderBeige}`, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' };
  const rightColumnStyle = { flex: '1.5', display: 'flex', flexDirection: 'column' };
  const inputStyle = { width: '100%', padding: '10px', marginTop: '5px', marginBottom: '10px', borderRadius: '6px', border: `1px solid ${colors.borderBeige}`, fontSize: '14px' };

  if (!user) return <div style={containerStyle}><h2>Please login.</h2></div>;

  return (
    <div style={containerStyle}>
      <div style={mainWrapperStyle}>
        
      
        <div style={leftColumnStyle}>
          <div>
            <h2 style={{ color: colors.deepGreen, marginBottom: '25px', fontWeight: '800', textAlign: 'center' }}>
              My Profile
            </h2>
            
            <div style={{
              backgroundColor: colors.infoBg,
              padding: '20px',
              borderRadius: '8px',
              border: `1px solid ${colors.borderBeige}`,
              color: colors.deepGreen,
              marginBottom: '30px'
            }}>
              <p><strong>Username:</strong> {user.username}</p>
              <p><strong>Email:</strong> {fullUserData?.email || 'Loading...'}</p>
              <p><strong>Library ID:</strong> #{user.id}</p>
              
              <hr style={{ margin: '20px 0', border: '0.5px solid #eee' }} />

              {isEditing ? (
                <div>
                  <label><strong>Address:</strong></label>
                  <input 
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    style={inputStyle}
                    placeholder="Enter address"
                  />
                  
                  <label><strong>New Password:</strong></label>
                  <input 
                    type="password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    style={inputStyle}
                    placeholder="Enter new password"
                  />

                  <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                    <button onClick={handleUpdate} style={{ flex: 1, padding: '10px', backgroundColor: colors.deepGreen, color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontWeight: 'bold' }}>Save</button>
                    <button onClick={() => setIsEditing(false)} style={{ flex: 1, padding: '10px', backgroundColor: '#ccc', color: '#333', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>Cancel</button>
                  </div>
                </div>
              ) : (
                <div>
                  <p><strong>Address:</strong> {fullUserData?.address || 'No address set'}</p>
                  <p><strong>Password:</strong> ********</p>
                  <button 
                    onClick={() => setIsEditing(true)}
                    style={{ marginTop: '15px', padding: '8px 15px', backgroundColor: 'transparent', color: colors.deepGreen, border: `1px solid ${colors.deepGreen}`, borderRadius: '6px', cursor: 'pointer', fontWeight: '600' }}
                  >
                    Edit Profile Details
                  </button>
                </div>
              )}
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button 
              onClick={() => navigate('/my-loans')} 
              style={{ padding: '14px', backgroundColor: colors.deepGreen, color: 'white', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}
            >
              View My Loans
            </button>
            <button 
              onClick={handleDeleteAccount} 
              style={{ padding: '10px', backgroundColor: 'transparent', color: colors.danger, border: `2px solid ${colors.danger}`, borderRadius: '6px', fontWeight: '700', cursor: 'pointer' }}
            >
              Delete Account
            </button>
          </div>
        </div>

        <div style={rightColumnStyle}>
          {fullUserData && (
            <div style={{ 
              backgroundColor: colors.cardBg, 
              padding: '10px', 
              borderRadius: '12px', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              border: `2px solid ${colors.borderBeige}`,
              height: '100%'
            }}>
              <AIRecommendations userLoans={fullUserData.loans || []} />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Profile;