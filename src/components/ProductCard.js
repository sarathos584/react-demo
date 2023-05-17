import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
function ProductCard({ item }) {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          style={{ width: "17rem", height: "200px" }}
          src={item.image}
        />
        <Card.Body>
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>$ {item.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link to={`/product-store/${item.id}`} className="btn btn-outline-dark">
            View More{" "}
          </Link>
        </Card.Footer>
      </Card>
    </>
  );
}

export default ProductCard;
