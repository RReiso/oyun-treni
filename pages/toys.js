import axios from "axios";
import React from "react";
import AllProducts from "../components/AllProducts";

const Toys = ({ productList, error }) => {
  return (
    <>
      {error ? (
        <div>Error loading items</div>
      ) : (
        <>
          <h4 className="fw-normal text-center mt-5 mx-2">
            Browse the variety of our toys!
          </h4>
          <AllProducts productList={productList} />;
        </>
      )}
    </>
  );
};

export default Toys;

export const getServerSideProps = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/products");
    return {
      props: {
        productList: res.data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: error.message,
      },
    };
  }
};
