import BookForm from "./BookForm";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const navigate = useNavigate();
  const bookLS = JSON.parse(window.localStorage.getItem("books"));
  const { id } = useParams();
  const bookToEdit = bookLS.find((book) => book.id === id);

  const handleOnSubmit = (book) => {
    console.log(book);
    const updatedBooks = bookLS.map((b) => {
      //   console.log(b.id);
      //   console.log(book.id);
      if (b.id === book.id) {
        return book;
      } else {
        return b;
      }
    });

    window.localStorage.setItem("books", JSON.stringify(updatedBooks));
    navigate("/");
  };

  return (
    <div>
      <BookForm
        book={bookToEdit}
        handleOnSubmit={handleOnSubmit}
        isEdit={true}
      />
    </div>
  );
};

export default EditBook;
