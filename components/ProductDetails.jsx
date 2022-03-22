import React, { useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import EditModal from "./EditModal";
import styles from "../styles/ProductDetails.module.scss";

const ProductDetails = ({ product, handleDelete }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="border-bottom p-2 d-flex align-items-center">
      <div>
        <Image
          layout="intrinsic"
          width={200}
          height={150}
          src={product.img}
          alt="First slide"
        />
      </div>
      <div className="d-flex justify-content-between">
        <p className="fw-bold ps-4 pe-2 mx-2">{product.title}</p>
        {product.price && <p className="px-2 mx-2">₺ {product.price}</p>}
      </div>
      <Button
        className="ms-auto"
        variant="info"
        onClick={() => setModalShow(true)}
      >
        Edit
      </Button>

      <EditModal
        handleDelete={handleDelete}
        show={modalShow}
        product={product}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ProductDetails;
