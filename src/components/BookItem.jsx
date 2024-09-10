// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button, Card } from "react-bootstrap";

import Col from "react-bootstrap/Col";

import "./BookItem.css";

const BookItem = ({
  id,
  bookName,
  author,
  price,
  quantity,
  date,
  handleOnDelete,
}) => {
  const navigate = useNavigate();
  return (
    <Card style={{ width: "18rem" }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookName}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Price: ${price}</div>
          <div>Quantity: {quantity}</div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        <div>
          <Button variant="primary" onClick={() => navigate(`/editbook/${id}`)}>
            Edit
          </Button>{" "}
          <Button variant="danger" onClick={() => handleOnDelete(id)}>
            Delete
          </Button>{" "}
        </div>
      </Card.Body>
    </Card>
  );
};

export default BookItem;
