import React from "react";
import styles from "./home.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Home(props) {
  const navigate = useNavigate();

  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeaderBox}>
        <h1 className={styles.mainHeader}>What you know about Cats? </h1>
      </div>
      <div className={styles.textAndImgBox}>
        <div className={styles.catsImgBox}>
          <img
            className={styles.catsImgBoxImg}
            src="./assets/catss.jpg"
            alt="cats"
          />
        </div>
        <div className={styles.catsTextBox}>
          <p className={styles.catsTextBoxText}>
            You may love your cat, but you may not be fully aware of just how
            cool your she — and her overall species — really is. For example,
            did you know that cats have an extra organ that allows them to taste
            scents? Or that they developed meowing as a way to communicate
            exclusively with humans?
          </p>
          <div className={styles.seeMoreButtondiv}>
            <Button
              className={styles.seeMoreButton}
              onClick={() => navigate("/blog")}
            >
              See more
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
