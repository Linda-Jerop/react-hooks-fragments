import React from 'react';

// Component demonstrating fragments with keys in array mapping
function Bookshelf({ books }) {
  return (
    <section className="bookshelf">
      <h3>My Book Collection</h3>
      {books.map((book) => (
        <React.Fragment key={book.id}>
          <h4 className="book-title">{book.title}</h4>
          <h5 className="book-author">by {book.author}</h5>
          <hr style={{ margin: '15px 0', border: 'none', borderTop: '1px solid #ddd' }} />
        </React.Fragment>
      ))}
    </section>
  );
}

export default Bookshelf;