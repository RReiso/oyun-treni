import axios from "axios";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import CreateModal from "../../components/CreateModal";
import ProductDetails from "../../components/ProductDetails";

const Index = ({ productList }) => {
  const [modalShow, setModalShow] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
    } catch (error) {
      console.log("error :>> ", error.message);
    }
  };

  return (
    <>
      <h4 className="text-center mt-5">All items</h4>
      <Button
        className="mt-4 mx-auto d-flex"
        variant="danger"
        onClick={() => setModalShow(true)}
      >
        Add new item
      </Button>

      <CreateModal show={modalShow} onHide={() => setModalShow(false)} />
      <Card className="mb-5 mt-3 p-2 mx-auto" style={{ maxWidth: "35rem" }}>
        {productList.map((product) => (
          <ProductDetails
            handleDelete={handleDelete}
            key={product._id}
            product={product}
          />
        ))}
      </Card>
    </>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
