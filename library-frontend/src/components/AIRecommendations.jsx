import React, { useState } from 'react';

const AIRecommendations = ({ userLoans }) => {
  const [recommendation, setRecommendation] = useState('');
  const [loading, setLoading] = useState(false);

  const colors = {
    deepGreen: '#0B2922',
    saturatedBeige: '#EBDCB2',
    borderBeige: '#D4C391',
    infoBg: '#FFFDF5'
  };

  const getAIRecommendation = async () => {
    if (!userLoans || userLoans.length === 0) {
      setRecommendation("You haven't borrowed any books yet. Borrow some books to get personalized picks!");
      return;
    }

    setLoading(true);

    try {
      const libraryResponse = await fetch('http://localhost:8080/books');
      const allBooks = await libraryResponse.json();

      const inventoryList = allBooks
        .map(b => {
          const authorName = b.author?.name || 'Unknown';
          const nationality = b.author?.nationality ? `(Origin: ${b.author.nationality})` : '';
          const genre = b.category || 'General';
          return `"${b.title}" by ${authorName} ${nationality}, Genre: ${genre}`;
        })
        .join("; ");

      const userHistory = userLoans.map(l => l.book?.title).filter(Boolean).join(", ");

      const prompt = `You are a friendly librarian. 
      Library inventory: [${inventoryList}].
      Reading history: [${userHistory}].

      STRICT RULES:
      1. Suggest EXACTLY 3 books from the inventory.
      2. NEVER use the word "user" or "reader". Address the person directly or simply state the reasons.
      3. For each book, provide: "Title" by Author - One sentence explanation.
      4. NO intro or outro text.`;

      const response = await fetch('http://localhost:8080/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt })
      });

      const data = await response.json();
      setRecommendation(data.response);
    } catch (err) {
      setRecommendation("AI service is busy. Make sure Ollama and Backend are running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{
      marginTop: '30px',
      padding: '25px',
      backgroundColor: colors.infoBg,
      borderRadius: '12px',
      border: `2px dashed ${colors.borderBeige}`,
      textAlign: 'left',
      boxShadow: '0 4px 10px rgba(0,0,0,0.05)'
    }}>
      <h3 style={{ color: colors.deepGreen, marginTop: 0, fontWeight: '800' }}>
        Smart Book Recommendations
      </h3>

      {recommendation ? (
        <div style={{
          color: colors.deepGreen,
          fontSize: '15px',
          lineHeight: '1.6',
          marginBottom: '20px',
          whiteSpace: 'pre-line',
          fontStyle: 'italic'
        }}>
          {recommendation}
        </div>
      ) : (
        <p style={{ color: '#555', marginBottom: '20px' }}>
          Based on your reading history, our AI can find your next favorite book.
        </p>
      )}

      <button
        onClick={getAIRecommendation}
        disabled={loading}
        style={{
          backgroundColor: colors.deepGreen,
          color: 'white',
          border: 'none',
          padding: '12px 20px',
          borderRadius: '6px',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontWeight: '700',
          width: '100%',
          transition: 'background-color 0.3s'
        }}
        onMouseOver={(e) => !loading && (e.target.style.backgroundColor = '#1E4D3E')}
        onMouseOut={(e) => !loading && (e.target.style.backgroundColor = colors.deepGreen)}
      >
        {loading ? 'Consulting the Library AI...' : 'Get Personalized Picks'}
      </button>
    </div>
  );
};

export default AIRecommendations;