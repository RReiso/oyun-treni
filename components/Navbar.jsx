import React from "react";
import Image from "next/image";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styles from "../styles/Navbar.module.scss";

const Navigation = () => {
  return (
    <Navbar
      className={`px-2 ps-sm-4 pe-sm-5 py-3 ${styles.navigation}`}
      bg="primary"
      variant="dark"
      expand="md"
    >
      <Image src={"/images/train.png"} width="100px" height="60px" alt="tren" />
      <Navbar.Brand className={`ms-2 mx-sm-3 ${styles.brand}`} href="/">
        Oyun Treni
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/all">Tumurunler</Nav.Link>
          <Nav.Link href="/new">Yeni</Nav.Link>
          <Nav.Link className={styles.sale} href="/sale">
            Satiş
          </Nav.Link>
          <Nav.Link className="ms-md-4" href="/contact">
            İletişim
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
