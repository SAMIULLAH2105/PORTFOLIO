import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../../../react-portfolio-main/src/utils.js";
import { getImageUrl } from "../../utils.js";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:samiullah.codes@gmail.com">
            samiullah.codes@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/shaikhsamiullah">
            linkedin.com/in/shaikhsamiullah
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/SAMIULLAH2105">
            github.com/SAMIULLAH2105
          </a>
        </li>
      </ul>

    
    </footer>
  );
};
