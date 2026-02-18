import React, { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';

const Catalog = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [selectedNationality, setSelectedNationality] = useState('All');
  const { user, isAuthenticated } = useAuth();

  const colors = {
    deepGreen: '#0B2922',
    borderBeige: '#D4C391',
    infoBg: '#FFFDF5',
    cardBg: '#FFFFFF',
    success: '#27ae60',
    error: '#c0392b',
    warning: '#e67e22'
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    fetch('http://localhost:8080/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error("Error fetching books:", err));
  };

  const genres = ['All', ...new Set(books.map(b => b.category).filter(Boolean))];
  const nationalities = ['All', ...new Set(books.map(b => b.author?.nationality).filter(Boolean))];

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesGenre = selectedGenre === 'All' || book.category === selectedGenre;
    const matchesNat = selectedNationality === 'All' || book.author?.nationality === selectedNationality;
    return matchesSearch && matchesGenre && matchesNat;
  });

  const handleReserve = async (bookId) => {
    if (!isAuthenticated || !user?.id) {
      alert("Please login first!");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/bookLoans/${user.id}/${bookId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.ok) {
        alert("Reservation successful!");
        fetchBooks(); 
      } else {
        alert("Could not complete the reservation. Please try again.");
      }
    } catch (err) {
      alert("Connection problem with the server.");
    }
  };

  const filterSectionStyle = {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
    backgroundColor: colors.infoBg,
    padding: '20px',
    borderRadius: '12px',
    border: `1px solid ${colors.borderBeige}`,
    flexWrap: 'wrap',
    alignItems: 'center'
  };

  const selectStyle = {
    padding: '10px',
    borderRadius: '8px',
    border: `2px solid ${colors.borderBeige}`,
    backgroundColor: 'white',
    cursor: 'pointer',
    flex: '1',
    minWidth: '150px'
  };

  const searchInputStyle = {
    ...selectStyle,
    flex: '2',
    minWidth: '200px'
  };

  return (
    <div style={{ padding: '40px 10%', backgroundColor: '#F9F7F2', minHeight: '100vh' }}>
      <h2 style={{ color: colors.deepGreen, fontWeight: '800', marginBottom: '25px' }}>Library Catalog</h2>
      
      <div style={filterSectionStyle}>
        <input 
          placeholder="Search by book title..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyle}
        />

        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)} style={selectStyle}>
          <option value="All">All Genres</option>
          {genres.filter(g => g !== 'All').map(g => <option key={g} value={g}>{g}</option>)}
        </select>

        <select value={selectedNationality} onChange={(e) => setSelectedNationality(e.target.value)} style={selectStyle}>
          <option value="All">All Nationalities</option>
          {nationalities.filter(n => n !== 'All').map(n => <option key={n} value={n}>{n}</option>)}
        </select>

        <button 
          onClick={() => {setSearchTerm(''); setSelectedGenre('All'); setSelectedNationality('All');}}
          style={{ padding: '10px 20px', backgroundColor: colors.deepGreen, color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          Reset Filters
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '25px' }}>
        {filteredBooks.map(book => (
          <div key={book.id} style={cardStyle}>
            <div>
              <h3 style={{ color: colors.deepGreen, marginTop: 0 }}>{book.title}</h3>
              <p style={{ margin: '5px 0' }}><strong>Author:</strong> {book.author?.name}</p>
              <p style={{ fontSize: '0.85rem', color: '#666' }}>
                {book.author?.nationality || 'N/A'} | {book.category || 'General'}
              </p>
              <p style={{ 
                margin: '10px 0', 
                fontWeight: 'bold', 
                color: book.quantity > 0 ? colors.success : colors.error 
              }}>
                {book.quantity > 0 ? `${book.quantity} available` : 'Out of stock'}
              </p>
            </div>
            
            <div style={{ marginTop: 'auto' }}>
              {isAuthenticated ? (
                <button 
                  onClick={() => handleReserve(book.id)} 
                  disabled={book.quantity <= 0}
                  style={book.quantity > 0 ? reserveBtnStyle : disabledBtnStyle}
                >
                  {book.quantity > 0 ? 'Reserve for Pickup' : 'Unavailable'}
                </button>
              ) : (
                <p style={{ color: colors.warning, fontSize: '0.9rem', textAlign: 'center', marginTop: '10px', fontStyle: 'italic' }}>
                  Please login to reserve books.
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredBooks.length === 0 && (
        <div style={{ textAlign: 'center', marginTop: '40px', color: '#888', fontSize: '1.2rem' }}>
          No books found matching your current criteria.
        </div>
      )}
    </div>
  );
};

const cardStyle = { 
  border: '1px solid #D4C391', 
  padding: '20px', 
  borderRadius: '12px', 
  background: '#fff', 
  boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  minHeight: '220px'
};

const reserveBtnStyle = { 
  backgroundColor: '#0B2922', 
  color: 'white', 
  padding: '12px', 
  border: 'none', 
  cursor: 'pointer', 
  borderRadius: '6px', 
  width: '100%', 
  fontWeight: '700',
  transition: 'background-color 0.2s'
};

const disabledBtnStyle = { 
  backgroundColor: '#ccc', 
  color: '#666', 
  padding: '12px', 
  border: 'none', 
  borderRadius: '6px', 
  width: '100%',
  cursor: 'not-allowed'
};

export default Catalog;