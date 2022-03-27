import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import CreateModal from "../../components/CreateModal";
import ProductDetails from "../../components/ProductDetails";

const Index = ({ productList, error, admin }) => {
  const [createError, setCreateError] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
    } catch (error) {
      console.log("error :>> ", error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(`/api/logout`);
      router.push("/admin/login");
    } catch (error) {
      console.log("error :>> ", error.message);
    }
  };

  return (
    <>
      {createError && <div>Error creating item!</div>}
      {admin && (
        <Button
          className="mt-4 ms-auto d-flex mx-3"
          variant="danger"
          onClick={() => handleLogout()}
        >
          Log out
        </Button>
      )}
      {error ? (
        <div>Error loading items</div>
      ) : (
        <>
          <h4 className="text-center mt-5">All items</h4>
          <Button
            className="mt-4 mx-auto d-flex"
            variant="warning"
            onClick={() => setModalShow(true)}
          >
            Add new item
          </Button>

          <CreateModal
            setError={setCreateError}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
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
      )}
    </>
  );
};

export default Index;

export const getServerSideProps = async (context) => {
  const adminCookie = context.req?.cookies || "";

  if (adminCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  try {
    const res = await axios.get("http://localhost:3000/api/products");
    return {
      props: {
        productList: res.data,
        admin: true,
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
