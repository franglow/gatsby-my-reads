import React, { useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import BookShelf from './BookShelf';

export default function BookList() {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <BookShelf />
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}
