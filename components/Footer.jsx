import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`py-2 ${styles.footer}`}>
      <p className={`text-center ${styles.brand}`}>Oyun Treni</p>
      <div
        className={`d-sm-flex mx-sm-auto justify-content-center ${styles.company}`}
      >
        <p className="px-2">
          <span>Telefon: </span>+ 345 295 3577
        </p>
        <p className="px-2">Istanbul, Turkiye</p>
      </div>

      <div className={styles.creator}>
        <a
          className={`px-2 d-flex px-2 pt-2 justify-content-center align-items-center ${styles.github}`}
          rel="noreferrer"
          href="https://github.com/rreiso"
          target="_blank"
        >
          <p>Created by RReiso</p>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
