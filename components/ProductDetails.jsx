import React, { useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";
import EditModal from "./EditModal";
import checkType from "../utils/checkImageType";

const ProductDetails = ({ product, setError }) => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="border-bottom p-2 d-sm-flex align-items-center">
      <div>
        <Image
          layout="intrinsic"
          width={200}
          height={150}
          src={checkType(product.img)}
          alt={product.title}
        />
      </div>
      <div className="d-sm-flex justify-content-between">
        <p className="fw-bold ps-sm-4 pe-sm-2 mx-2">{product.title}</p>
        {product.price > 0 && (
          <p className="px-sm-2 mx-2">₺ {Number(product.price).toFixed(2)}</p>
        )}
      </div>
      <Button
        className="m-1 ms-sm-auto"
        variant="info"
        onClick={() => setModalShow(true)}
      >
        Edit
      </Button>

      <EditModal
        setError={setError}
        show={modalShow}
        product={product}
        onHide={() => setModalShow(false)}
      />
    </div>
  );
};

export default ProductDetails;
