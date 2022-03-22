import axios from "axios";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function EditModal({ show, onHide, product, handleDelete }) {
  const [productDetails, setProductDetails] = useState({
    title: product.title,
    desc: product.desc,
    price: product.price || 0,
    imgLink: product.image,
    productLink: product.link || "",
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

          <Button
            className="btn-sm me-2"
            variant="danger"
            type="submit"
            onClick={() => handleDelete(product._id)}
          >
            Delete item
          </Button>
          <Button className="btn-sm " variant="info" type="submit">
            Save
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

export default EditModal;
