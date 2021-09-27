import { Link } from 'gatsby';
import React, { useContext, useState } from 'react';
import OrderContext from '../components/OrderContext';
import SearchResults from '../components/SearchResults';
import * as BooksAPI from '../utils/BooksAPI';

export default function SearchBooks() {
  const [query, setQuery] = useState([]);
  const [books, setBooks] = useContext(OrderContext);
  //   const [books, setBooks] = useState([]);
  const fetchBooks = () => {
    BooksAPI.getAll().then((res) => setBooks(res));
  };

  const updateQuery = (eventTargetQuery) => {
    setQuery(eventTargetQuery);
    if (eventTargetQuery) {
      BooksAPI.search(eventTargetQuery).then((searchResults) => {
        console.log('searchResults:', searchResults);
        console.log('searchResultsState:', query);
        if (books !== searchResults) {
          setBooks(searchResults);
        }
      });
    }
  };

  const clearQuery = () => {
    setQuery('');
  };

  const updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then((newShelfsOrderArray) => {
      fetchBooks();
    });
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => updateQuery(event.target.value)}
          />
        </div>
      </div>
      {JSON.stringify(query)}
      <div className="search-books-results">
        <SearchResults books={books} querys={query} />
      </div>
    </div>
  );
}
