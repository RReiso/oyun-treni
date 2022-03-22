import React from "react";
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="m-3" style={{ maxWidth: "20rem" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="my-2">{product.desc}</Card.Text>
        {product.price && <Card.Text>Price: {product.price}</Card.Text>}
        <Button className="mt-3" variant="info">
          Buy now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
