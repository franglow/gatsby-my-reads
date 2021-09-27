import React from 'react';
import * as BooksAPI from '../utils/BooksAPI';
import Book from './Book';

export default function SearchResults({ books, querys }) {
  const fetchBooks = () => {
    BooksAPI.getAll().then((res) => setBooks(res));
  };
  const updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then((newShelfsOrderArray) => {
      fetchBooks();
    });
  };
  const handleChange = (e, book) => {
    const bookModified = books.filter(
      (bookHisory) => bookHisory.id === book.id
    );
    {
      bookModified[0].shelf = e;
    }
    const booksUnmodified = books.filter(
      (bookHisory) => bookHisory.id !== book.id
    );
    if (updateShelf) onChangeShelf(e, book);
  };
  if (querys && books.length) {
    return (
      <ol className="books-grid">
        {books.map((book) => (
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
    );
  }
  return null;
}
