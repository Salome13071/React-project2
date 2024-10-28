import React from "react";
import styles from "./blog.module.css";

function Blog(props) {
  return (
    <div className={styles.blogContainer}>
      <div className={styles.blogMainBox}>
        <h2 className={styles.blogMainheader}>
          Facts About Cat Anatomy & Physiology
        </h2>
        <p className={styles.blogMainText}>
          You may love your cat, but you may not be fully aware of just how cool
          your she — and her overall species — really is. For example, did you
          know that cats have an extra organ that allows them to taste scents?
          Or that they developed meowing as a way to communicate exclusively
          with humans? Clearly, there’s more to your little feline friend than
          meets the eye. So, to help you fully appreciate how awesome cats are,
          we asked cat care professionals on Care.com — namely, cat sitters,
          boarders, and groomers — to share their favorite fun facts about these
          mystical creatures. We then pulled together a list of the 101 most
          amusing cat facts that you can share with your friends and family.
        </p>
        <ul className={styles.blogMainTextList}>
          <li>
            A house cat’s genome is 95.6 percent tiger, and they share many
            behaviors with their jungle ancestors, says Layla Morgan Wilde, a
            cat behavior expert and the founder of Cat Wisdom 101. These
            behaviors include scent marking by scratching, prey play, prey
            stalking, pouncing, chinning, and urine marking.{" "}
          </li>
          <li>
            {" "}
            Cats are believed to be the only mammals who don’t taste sweetness.
          </li>
          <li>
            Cats are nearsighted, but their peripheral vision and night vision
            are much better than that of humans.{" "}
          </li>
          <li>
            {" "}
            Cats are supposed to have 18 toes (five toes on each front paw; four
            toes on each back paw).
          </li>
          <li>Cats can jump up to six times their length. </li>
          <li>Cats have 230 bones, while humans only have 206.</li>
          <li>
            Cats have whiskers on the backs of their front legs, as well.{" "}
          </li>
          <li>
            Cats have nearly twice the amount of neurons in their cerebral
            cortex as dogs.{" "}
          </li>
        </ul>

        <h2 className={styles.blogMainheader}>
          Facts About Cat Health & Wellness
        </h2>

        <ul className={styles.blogMainTextList}>
          <li>Cats can spend up to a third of their waking hours grooming. </li>
          <li>Cats live longer when they stay indoors. </li>
          <li>
            {" "}
            Cats’ purring may be a self-soothing behavior, since they make this
            noise when they’re ill or distressed, as well as when they’re happy.
          </li>
          <li>
            Cats will refuse an unpalatable food to the point of starvation.{" "}
          </li>
          <li>
            {" "}
            Despite popular belief, many cats are actually lactose intolerant.
          </li>
          <li>
            Female cats have the ability to get pregnant when they are only 4
            months old!{" "}
          </li>
          <li>
            Kittens can be spayed or neutered when they are only eight weeks
            old. If possible, these procedures should be performed in the first
            5 months of your cat’s life.{" "}
          </li>
        </ul>
        <img
          className={styles.threeCatsImg}
          src="./assets/three-cats.avif"
          alt="three-cats"
        />
      </div>
    </div>
  );
}

export default Blog;
