import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styles from "../styles/Contact.module.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAIL_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setMessageSent(true);
  };

  return (
    <>
      {messageSent ? (
        <div
          className="card  my-5 mx-3 mx-sm-auto p-3"
          style={{ maxWidth: "30rem" }}
        >
          <h5>Message sent!</h5>
          <p>
            Thank you for your message. We will make sure to respond within 24
            hours!
          </p>
        </div>
      ) : (
        <div>
          <p
            className="m-3 fs-5 mt-5 text-center mx-sm-auto"
            style={{ maxWidth: "30rem" }}
          >
            If you have any questions, comments or feedback, we would like to
            hear from you. We make it a priority to respond within 24h.
          </p>
          <Card className={`p-3 m-3 mb-4 mx-sm-auto mt-5 ${styles.contact}`}>
            <Form onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  name="email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Your message"
                  name="message"
                  required
                />
              </Form.Group>

              <Button variant="info" type="submit">
                Send message
              </Button>
            </Form>
          </Card>
        </div>
      )}
    </>
  );
};

export default Contact;
