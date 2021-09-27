import React, { useState, Component, useContext, useEffect } from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';
import OrderContext from './OrderContext';

export default function BookShelf() {
  const [books, setBooks] = useContext(OrderContext);
  const fetchBooks = () => {
    BooksAPI.getAll().then((res) => setBooks(res));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then((newShelfsOrderArray) => {
      fetchBooks();
    });
  };

  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === 'currentlyReading')
              .map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    books={books}
                    onChangeShelf={(shelf, book) => {
                      updateShelf(shelf, book);
                    }}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === 'wantToRead')
              .map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    books={books}
                    onChangeShelf={(shelf, book) => {
                      updateShelf(shelf, book);
                    }}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books
              .filter((book) => book.shelf === 'read')
              .map((book) => (
                <li key={book.id}>
                  <Book
                    book={book}
                    books={books}
                    onChangeShelf={(shelf, book) => {
                      updateShelf(shelf, book);
                    }}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
