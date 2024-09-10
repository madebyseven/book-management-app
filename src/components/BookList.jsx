import React, { useEffect, useState } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BookItem from "./BookItem";

import "./BookList.css";

// const initialBooks = [
//   {
//     id: "7cc853fc-97a5-4351-8d5d-e79b4fb87a26",
//     bookName: "Harry Potter",
//     author: "J.K Rowing",
//     price: 3.05,
//     quantity: 2,
//     date: "2024-09-10T09:02:50.421Z",
//   },
//   {
//     id: "8fa7871b-6107-4b4d-a0a4-a5f8f14aecd2",
//     bookName: "Harry Potter",
//     author: "J.K Rowing",
//     price: 3.05,
//     quantity: 2,
//     date: "2024-09-10T09:02:50.421Z",
//   },
//   {
//     id: '846ca8da-ae95-4453-a0e5-0a11a4652c3d',
//     bookName: "Harry Potter",
//     author: "J.K Rowing",
//     price: 3.05,
//     quantity: 2,
//     date: "2024-09-10T09:02:50.421Z",
//   },
// ];

const BookList = () => {
  const initialState = JSON.parse(window.localStorage.getItem("books"));
  //   const [books, setBooks] = useState(initialState || initialBooks);
  const [books, setBooks] = useState(initialState || []);
  useEffect(() => {
    window.localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const handleOnDelete = (id) => {
    console.log(id);
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div className="BookList">
      <h3>List of books</h3>
      <Container>
        <Row className="gap-3">
          {books.length > 0 &&
            books.map((book) => (
              <BookItem
                key={book.id}
                {...book}
                handleOnDelete={handleOnDelete}
              />
              // <div>{book.bname}</div>
            ))}
          {!books.length && <p>No available books to show.</p>}
        </Row>
      </Container>
    </div>
  );
};

export default BookList;
