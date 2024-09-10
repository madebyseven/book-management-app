import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BookList from "./components/BookList.jsx";
import AddBook from "./components/AddBook.jsx";
import EditBook from "./components/EditBook.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <BookList />,
      },
      {
        path: "addbook",
        element: <AddBook />,
      },
      {
        path: "editbook/:id",
        element: <EditBook />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
