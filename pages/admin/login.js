import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/Contact.module.scss";
import { useRouter } from "next/router";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", { email, password });
      router.push("/admin");
    } catch (error) {
      console.log("error.message :>> ", error.message);
      setError(true);
    }
  };

  return (
    <>
      <Card className={`p-3 m-3 mb-4 mx-sm-auto mt-5 ${styles.contact}`}>
        <Form onSubmit={handleClick}>
          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              required
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              autoComplete="password"
              type="password"
              placeholder="Password"
              required
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button variant="info" type="submit">
            Log in
          </Button>
        </Form>
      </Card>
      {error && (
        <Alert
          variant="danger"
          className={`p-3 m-3 mb-4 mx-sm-auto ${styles.contact}`}
        >
          <p>Error! Try again later.</p>
        </Alert>
      )}
    </>
  );
};

export default Login;

export const getServerSideProps = async (context) => {
  const adminCookie = context.req?.cookies || "";

  if (adminCookie.token === process.env.TOKEN) {
    return {
      redirect: {
        destination: "/admin",
        permanent: false,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};
