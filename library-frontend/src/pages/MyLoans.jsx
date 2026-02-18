import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const MyLoans = () => {
  const { user } = useAuth();
  const [loans, setLoans] = useState([]);
  const [loading, setLoading] = useState(true);

  const colors = {
    deepGreen: '#0B2922',
    saturatedBeige: '#EBDCB2',
    borderBeige: '#D4C391',
    cardBg: '#FFFFFF',
    textMain: '#0B2922',
    rowEven: '#FFFDF5',
    statusActive: '#B22222',
    statusReturned: '#1E4D3E'
  };

  useEffect(() => {
    if (user && user.id) {
      fetch(`http://localhost:8080/users/${user.id}`)
        .then(res => res.json())
        .then(data => {
          setLoans(data.loans || []);
          setLoading(false);
        })
        .catch(err => {
          console.error("Error fetching loans:", err);
          setLoading(false);
        });
    }
  }, [user]);

  const containerStyle = {
    padding: '40px 20px',
    backgroundColor: colors.saturatedBeige,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  };

  const tableWrapperStyle = {
    width: '100%',
    maxWidth: '900px',
    backgroundColor: colors.cardBg,
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
    border: `2px solid ${colors.borderBeige}`
  };

  const headerStyle = {
    color: colors.deepGreen,
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    fontWeight: '800',
    fontSize: '32px',
    marginBottom: '30px',
    textAlign: 'center'
  };

  const cellStyle = {
    padding: '15px',
    borderBottom: `1px solid ${colors.borderBeige}`,
    color: colors.deepGreen,
    fontFamily: 'sans-serif'
  };

  const thStyle = {
    ...cellStyle,
    backgroundColor: colors.deepGreen,
    color: 'white',
    fontWeight: '700',
    textAlign: 'left',
    borderBottom: 'none'
  };

  if (!user) return (
    <div style={containerStyle}>
      <div style={tableWrapperStyle}>
        <h2 style={{ color: colors.deepGreen, textAlign: 'center' }}>Please login to see your loans.</h2>
      </div>
    </div>
  );

  if (loading) return (
    <div style={containerStyle}>
      <div style={tableWrapperStyle}>
        <h2 style={{ color: colors.deepGreen, textAlign: 'center' }}>Loading history...</h2>
      </div>
    </div>
  );

  return (
    <div style={containerStyle}>
      <div style={tableWrapperStyle}>
        <h1 style={headerStyle}>My Borrowed Books</h1>
        {loans.length === 0 ? (
          <p style={{ textAlign: 'center', fontSize: '18px', color: colors.deepGreen }}>You haven't borrowed any books yet.</p>
        ) : (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  <th style={thStyle}>Book Title</th>
                  <th style={thStyle}>Loan Date</th>
                  <th style={thStyle}>Due Date</th>
                  <th style={thStyle}>Status</th>
                </tr>
              </thead>
              <tbody>
                {loans.map((loan, index) => (
                  <tr key={loan.id} style={{ backgroundColor: index % 2 === 0 ? colors.rowEven : 'transparent' }}>
                    <td style={cellStyle}>{loan.book?.title}</td>
                    <td style={cellStyle}>{loan.loanDate}</td>
                    <td style={cellStyle}>{loan.returnDate}</td>
                    <td style={{ 
                      ...cellStyle, 
                      fontWeight: '700',
                      color: loan.returned ? colors.statusReturned : colors.statusActive 
                    }}>
                      {loan.returned ? 'Returned' : 'Active'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyLoans;