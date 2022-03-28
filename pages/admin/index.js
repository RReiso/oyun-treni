import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Card, Button } from "react-bootstrap";
import CreateModal from "../../components/CreateModal";
import ProductDetails from "../../components/ProductDetails";

const Index = ({ productList, error, admin }) => {
  const [updateError, setUpdateError] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();

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
      {admin && (
        <Button
          className="mt-4 ms-auto d-flex mx-3"
          variant="danger"
          onClick={() => handleLogout()}
        >
          Log out
        </Button>
      )}
      {updateError && (
        <div
          className="alert alert-danger text-center mx-auto mt-5"
          role="alert"
          style={{ maxWidth: "15rem" }}
        >
          Error updating item!
        </div>
      )}
      {error ? (
        <div
          className="alert alert-danger text-center mx-auto mt-5"
          role="alert"
          style={{ maxWidth: "15rem" }}
        >
          {console.log(error)}
          Error loading items
        </div>
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
            setError={setUpdateError}
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <Card className="mb-5 mt-3 p-2 mx-auto" style={{ maxWidth: "35rem" }}>
            {productList.map((product) => (
              <ProductDetails
                setError={setUpdateError}
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
    const res = await axios.get(
      `http://${context.req.headers.host}/api/products`
    );
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
