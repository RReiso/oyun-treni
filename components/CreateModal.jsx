import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

function CreateModal({ setError, show, onHide }) {
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [productDetails, setProductDetails] = useState({
    title: "",
    desc: "",
    price: 0,
    img: "",
    link: "",
  });

  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append(
        "upload_preset",
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET
      );
      try {
        if (
          file.type !== "image/png" &&
          file.type !== "image/jpeg" &&
          file.type !== "image/jpg"
        ) {
          setError(true);
          throw new Error("Wrong file type");
        }

        const uploadResult = await axios.post(
          process.env.NEXT_PUBLIC_CLOUDINARY_URL,
          formData
        );
        productDetails.img = uploadResult.data.url;
        await axios.post("/api/products", productDetails);
        setProductDetails({
          title: "",
          desc: "",
          price: 0,
          img: "",
          link: "",
        });
        setError(false);
        setIsLoading(false);
        onHide();
        router.push("/admin");
      } catch (error) {
        console.error("error.message :>> ", error.message);
        setError(true);
        setIsLoading(false);
        onHide();
      }
    } else {
      try {
        await axios.post("/api/products", productDetails);
        setProductDetails({
          title: "",
          desc: "",
          price: 0,
          img: "",
          link: "",
        });
        setError(false);
        setIsLoading(false);
        onHide();
        router.push("/admin");
      } catch (error) {
        console.error("error.message :>> ", error.message);
        setError(true);
        setIsLoading(false);
        onHide();
      }
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
          <p className="alert alert-info text-center">
            Paste an image link starting with &apos;https://productimages.
            hepsiburada.net&apos; OR upload your image!
          </p>
          <div className="d-sm-flex">
            <Form.Group className="mb-3 me-1">
              <Form.Label>Link to Image</Form.Label>
              <Form.Control
                type="text"
                value={productDetails.img}
                name="img"
                onChange={(e) => {
                  setProductDetails({
                    ...productDetails,
                    img: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Chose an image</Form.Label>
              <Form.Control
                type="file"
                name="img"
                onChange={(e) => {
                  setFile(e.target.files[0]);
                }}
              />
            </Form.Group>
          </div>
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

          {isLoading ? (
            <Button className="btn-sm" variant="info" type="submit" disabled>
              Loading, please wait...
            </Button>
          ) : (
            <Button className="btn-sm" variant="info" type="submit">
              Create item
            </Button>
          )}
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
