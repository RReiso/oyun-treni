import axios from "axios";
import React from "react";
import { Card } from "react-bootstrap";
import ProductDetails from "../../components/ProductDetails";

const Index = ({ productList }) => {
  return (
    <>
      <h4 className="text-center mt-5">All items</h4>
      <Card className="mb-5 mt-3 p-2 mx-auto" style={{ maxWidth: "35rem" }}>
        {productList.map((product) => (
          <ProductDetails key={product._id} product={product} />
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
