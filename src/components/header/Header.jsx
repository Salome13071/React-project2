import React from "react";
import styles from "./Header.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.headerContainer}>
        <div className={styles.logoBox}>logo</div>
        <div className="navDiv">
          <nav>
            <li>
              <Button onClick={() => navigate("/home")}>Home</Button>
              <Button onClick={() => navigate("/about")}>About </Button>
              <Button onClick={() => navigate("/contact")}>Contact </Button>
            </li>
          </nav>
        </div>
        <div className="iconsBox"></div>
      </div>
    </div>
  );
}

export default Header;
