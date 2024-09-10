import React from "react";
import { Outlet } from "react-router-dom";

import AddBook from "./components/AddBook";
import Header from "./components/Header";
import BookList from "./components/BookList";

import "./App.css";
import { Button } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      {/* <BookList initialBooks={books} /> */}
    </div>
  );
};

export default App;
