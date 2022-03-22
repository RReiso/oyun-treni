import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreateModal({ show, onHide }) {
  const [productDetails, setProductDetails] = useState({
    title: "",
    desc: "",
    price: 0,
    imgLink: "",
    productLink: "",
  });

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              value={productDetails.title}
              name="title"
              required
              onChange={(e) => {
                setProductDetails({
                  ...productDetails,
                  title: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              value={productDetails.desc}
              name="desc"
              required
              onChange={(e) => {
                setProductDetails({
                  ...productDetails,
                  desc: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              value={productDetails.price}
              min="0"
              name="price"
              step="0.01"
              onChange={(e) => {
                setProductDetails({
                  ...productDetails,
                  price: e.target.value,
                });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Link to product</Form.Label>
            <Form.Control
              type="text"
              name="productLink"
              value={productDetails.link}
              onChange={(e) => {
                setProductDetails({
                  ...productDetails,
                  productLink: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Button className="btn-sm" variant="info" type="submit">
            Create item
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-sm" variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreateModal;
