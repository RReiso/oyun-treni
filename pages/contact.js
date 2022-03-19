import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/Contact.module.scss";

const Contact = () => {
  return (
    <>
      <p
        className="m-3 fs-5 mt-5 text-center mx-sm-auto"
        style={{ maxWidth: "30rem" }}
      >
        If you have any questions, comments or feedback, we would like to hear
        from you. We make it a priority to respond within 24h.
      </p>
      <Card className={`p-3 m-3 mb-4 mx-sm-auto mt-5 ${styles.contact}`}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="input" placeholder="Your name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Your email" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Your message" />
          </Form.Group>

          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </>
  );
};

export default Contact;
