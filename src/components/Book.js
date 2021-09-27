import React, { Component, useContext } from 'react';
import OrderContext from './OrderContext';

export default function Book({ book, books, onChangeShelf }) {
  const handleChange = (eventTarget, book) => {
    if (onChangeShelf) onChangeShelf(eventTarget, book);
  };
  return (
    <div className="book">
      <div className="book-top">
        {book.imageLinks ? (
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`,
            }}
          />
        ) : (
          <div className="book-cover">No Cover</div>
        )}
        <div className="book-shelf-changer">
          <select
            value={book.shelf}
            onChange={(event) => handleChange(event.target.value, book)}
          >
            <option value="none" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}
