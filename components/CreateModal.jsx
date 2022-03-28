import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreateModal({ setError, show, onHide }) {
  const [file, setFile] = useState(null);
  const [productDetails, setProductDetails] = useState({
    title: "",
    desc: "",
    price: 0,
    img: "",
    productLink: "",
  });

  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
    );
    try {
      const uploadResult = await axios.post(
        process.env.NEXT_PUBLIC_CLOUDINARY_URL,
        formData
      );
      productDetails.img = uploadResult.data.url;
      await axios.post("/api/products", productDetails);
      setError(false);
      onHide();
      router.push("/admin");
    } catch (error) {
      console.log("error.message :>> ", error.message);
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
        <Form onSubmit={handleClick}>
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
            <Form.Label>Chose an image</Form.Label>
            <Form.Control
              type="file"
              name="img"
              required
              onChange={(e) => {
                setFile(e.target.files[0]);
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
