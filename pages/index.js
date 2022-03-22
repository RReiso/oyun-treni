import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.scss";

export default function Home({ productList }) {
  return (
    <>
      <Slider />
      <div className="mt-3 d-flex flex-wrap justify-content-center align-items-center">
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      <div className="text-center mb-3">
        <Link href="/toys">
          <a className=" btn btn-danger px-5">See more</a>
        </Link>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");
  console.log("res", res);
  const sampleProducts = [];
  for (let i = 0; i < 6; i++) {
    if (res.data[i]) {
      sampleProducts.push(res.data[i]);
    }
  }
  return {
    props: {
      productList: sampleProducts,
    },
  };
};
