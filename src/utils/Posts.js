import React, { useContext, useEffect, useState } from 'react';
import OrderContext from '../components/OrderContext';
import * as BooksAPI from './BooksAPI';

const Posts = () => {
  // const [books, setBooks] = useState([]);

  const [books, setBooks] = useContext(OrderContext);

  const fetchBooks = () => {
    BooksAPI.getAll().then((res) => setBooks(res));
  };

  const updateShelf = (shelf, book) => {
    BooksAPI.update(book, shelf).then((data) => console.log('data:', data));
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const libro = {
    id: 'IOejDAAAQBAJ',
  };

  console.log('books', books);
  return (
    <div>
      <ol>
        {books.length &&
          books.map((book) => (
            <li key={book.id}>
              <h1>{book.title}</h1>
              <p>Shelf: {book.shelf}</p>
              <p>ID: {book.id}</p>
            </li>
          ))}
      </ol>

      <button onClick={() => updateShelf('wantToRead', libro)}>SWITCH</button>
    </div>
  );
};

export default Posts;

/*
master gatsby
en el video 38 usa el react contexte para mover el estado arriba del root
y luego pasarlo desde ahi hasta abajo y asi tener esas desponibilidad.




*/
