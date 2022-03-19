import Image from "next/image";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from "../styles/Slider.module.scss";

const Slider = () => {
  return (
    <>
      <Carousel variant="white" className={styles.slider}>
        <Carousel.Item>
          <Image
            layout="responsive"
            width="640px"
            height="427px"
            className="d-block w-100"
            src="/images/boy.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            layout="responsive"
            width="640px"
            height="427px"
            className="d-block w-100"
            src="/images/childhand.jpg"
            alt="Second slide"
          />

          <Carousel.Caption style={{ color: "black" }}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image
            layout="responsive"
            width="640px"
            height="427px"
            className="d-block w-100"
            src="/images/trucks.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/* <Image
        layout="fill"
        // className="d-block w-100"
        src="/images/train.png"
        alt="Third slide"
      /> */}
    </>
  );
};

export default Slider;
