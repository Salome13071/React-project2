import React from "react";
import styles from "./Header.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  return (
    <div className={styles.headerMain}>
      <div className={styles.headerContainer}>
        <div className={styles.logoBox}>
          <div className={styles.logoImg}>
            <img src="./assets/cats-icon.svg" alt="Logo" />
          </div>
          <p className={styles.logoText}>Cat's Frends</p>
        </div>
        <div className={styles.navDiv}>
          <nav className={styles.navButtons}>
            <Button onClick={() => navigate("/")}>Home</Button>
            <Button onClick={() => navigate("/about")}>About </Button>
            <Button onClick={() => navigate("/contact")}>Contact </Button>
            <Button onClick={() => navigate("/blog")}>Blog </Button>
          </nav>
        </div>
        <div className={styles.iconsBox}></div>
      </div>
    </div>
  );
}

export default Header;
