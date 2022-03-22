import React from "react";
import ProductCard from "./ProductCard";

const AllProducts = ({ productList }) => {
  return (
    <div className="mt-3 d-flex flex-wrap justify-content-center align-items-center">
      {productList.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
