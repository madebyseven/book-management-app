import React from "react";
import { useNavigate } from "react-router-dom";

import BookForm from "./BookForm";
import "./AddBook.scss";

const AddBook = () => {
  const navigate = useNavigate();

  const handleOnSubmit = (book) => {
    console.log(book);

    // get books local storage
    const booksLS = JSON.parse(window.localStorage.getItem("books")) || [];
    // push book sa books from localstorage
    booksLS.push(book);
    // booksLS, setItem localstorage
    window.localStorage.setItem("books", JSON.stringify(booksLS));
    console.log("before");
    navigate("../");
    console.log("after");
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
