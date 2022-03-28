import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import checkType from "../utils/checkImageType";

function EditModal({ show, onHide, product, setError }) {
  const router = useRouter();
  const [productDetails, setProductDetails] = useState({
    title: product.title,
    desc: product.desc,
    price: product.price || 0,
    img: product.img,
    link: product.link || "",
  });

  const handleDelete = async (e, id) => {
    e.preventDefault();
    try {
      await axios.delete(`/api/products/${id}`);
      setError(false);
      onHide();
      router.push("/admin");
    } catch (error) {
      console.log("error :>> ", error.message);
      setError(true);
      onHide();
    }
  };

  const handleSave = async (e, id) => {
    e.preventDefault();
    try {
      await axios.put(`/api/products/${id}`, productDetails);
      setError(false);
      onHide();
      router.push("/admin");
    } catch (error) {
      console.log("error :>> ", error.message);
      setError(true);
      onHide();
    }
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Image
          src={checkType(productDetails.img)}
          width="90px"
          height="60px"
          alt={productDetails.title}
        />

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
              as="textarea"
              rows={3}
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
              name="link"
              value={productDetails.link}
              onChange={(e) => {
                setProductDetails({
                  ...productDetails,
                  link: e.target.value,
                });
              }}
            />
          </Form.Group>

          <Button
            className="btn-sm me-2"
            variant="danger"
            type="submit"
            onClick={(e) => handleDelete(e, product._id)}
          >
            Delete item
          </Button>
          <Button
            className="btn-sm "
            variant="info"
            type="submit"
            onClick={(e) => handleSave(e, product._id)}
          >
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
