import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`py-2 ${styles.footer}`}>
      <p className={`text-center ${styles.brand}`}>Oyun Treni</p>
      <div className="d-flex justify-content-center">
        <p className="px-2">
          <span>Telefon: </span>+ 345 295 3577
        </p>
        <p className="px-2">Istanbul, Turkiye</p>
      </div>

      <div
        className={`d-flex px-2 pt-2 justify-content-center ${styles.creator}`}
      >
        <p>Created by RReiso</p>
        <a
          className="link px-2"
          rel="noreferrer"
          href="https://github.com/rreiso"
          target="_blank"
        >
          <p className="sr-only">RReiso github.com profile</p>
          <i
            className={`fa fa-github fa-lg ${styles.github}`}
            aria-hidden="true"
          ></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
