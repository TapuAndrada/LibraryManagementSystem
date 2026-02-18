import React, { useEffect, useState } from 'react';

const TopBooks = () => {
    const [topBooks, setTopBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    const colors = {
        deepGreen: '#0B2922',
        saturatedBeige: '#EBDCB2',
        borderBeige: '#D4C391',
        cardBg: '#FFFDF5'
    };

    useEffect(() => {
        fetch('http://localhost:8080/books/top')
            .then(res => res.json())
            .then(data => {
                setTopBooks(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Error fetching top books:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return null;

    return (
        <div style={{
            marginTop: '30px',
            padding: '20px',
            backgroundColor: colors.cardBg,
            borderRadius: '12px',
            border: `1px solid ${colors.borderBeige}`,
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
            <h3 style={{ color: colors.deepGreen, marginTop: 0, borderBottom: `2px solid ${colors.saturatedBeige}`, paddingBottom: '10px' }}>
              Most Popular This Month
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '15px' }}>
                {topBooks.map((book, index) => (
                    <div key={book.id} style={{
                        padding: '15px',
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        borderLeft: `5px solid ${colors.deepGreen}`,
                        position: 'relative'
                    }}>
                        <span style={{
                            position: 'absolute',
                            top: '-10px',
                            right: '10px',
                            fontSize: '40px',
                            color: colors.saturatedBeige,
                            opacity: 0.5,
                            fontWeight: '900'
                        }}>
                            #{index + 1}
                        </span>
                        <h4 style={{ margin: '0 0 5px 0', color: colors.deepGreen }}>{book.title}</h4>
                        <p style={{ margin: 0, fontSize: '14px', color: '#555' }}>{book.author?.name}</p>
                        <span style={{
                            display: 'inline-block',
                            marginTop: '10px',
                            padding: '2px 8px',
                            backgroundColor: colors.saturatedBeige,
                            borderRadius: '4px',
                            fontSize: '11px',
                            fontWeight: '700',
                            color: colors.deepGreen
                        }}>
                            {book.category}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopBooks;