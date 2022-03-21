import axios from "axios";
import Image from "next/image";
import ProductCard from "../components/ProductCard";
import Slider from "../components/Slider";
import styles from "../styles/Home.module.scss";

export default function Home({ productList }) {
  return (
    <>
      <Slider />
      <div>
        {productList.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
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
