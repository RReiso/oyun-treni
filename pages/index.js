import axios from "axios";
import Link from "next/link";
import AllProducts from "../components/AllProducts";
import Slider from "../components/Slider";

export default function Home({ productList }) {
  return (
    <>
      <Slider />
      <AllProducts productList={productList} />
      <div className="text-center mb-3">
        <Link href="/toys">
          <a className=" btn btn-danger px-5 my-3">See more</a>
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
