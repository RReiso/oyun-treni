import axios from "axios";
import React from "react";
import ProductCard from "./ProductCard";

const AllProducts = ({ productList, show }) => {
  // const getSampleProducts = () => {
  //   let sampleProducts = [];
  //   for (let i = 0; i < show; i++) {
  //     sampleProducts.push(productList[i]);
  //   }
  //   return sampleProducts;
  // };

  return (
    <div className="mt-3 d-flex flex-wrap justify-content-center align-items-center">
      {show
        ? getSampleProducts().map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        : productList.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
    </div>
  );
};

export default AllProducts;

// export const getServerSideProps = async () => {
//   const res = await axios.get("http://localhost:3000/api/products");
//   console.log("res", res);

//   return {
//     props: {
//       productList: res.data,
//     },
//   };
// };
