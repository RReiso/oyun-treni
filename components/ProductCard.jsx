import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = ({ product }) => {
  return (
    <Card className="m-3" style={{ maxWidth: "20rem" }}>
      <Card.Img variant="top" src={product.img} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text className="my-2">{product.desc}</Card.Text>
        {product.price > 0 && (
          <Card.Text>Price: ₺{Number(product.price).toFixed(2)}</Card.Text>
        )}
        {product.link ? (
          <Link href={product.link}>
            <a className=" btn btn-info mt-3" target="_blank" rel="noreferrer">
              Buy
            </a>
          </Link>
        ) : (
          <Link href="/contact">
            <a className=" btn btn-info mt-3">Inquire</a>
          </Link>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
