import axios from "axios";
import React from "react";
import AllProducts from "../components/AllProducts";

const Toys = ({ productList }) => {
  return (
    <>
      <h5 className="text-center mt-5 mx-2">Browse the variety of our toys!</h5>
      <AllProducts productList={productList} />;
    </>
  );
};

export default Toys;

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  return {
    props: {
      productList: res.data,
    },
  };
};
