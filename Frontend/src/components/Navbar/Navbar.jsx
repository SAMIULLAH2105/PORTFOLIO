import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfolio
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen} `}
          onClick={() => {
            setMenuOpen(false);
          }}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Project</a>
          </li>
          <li>
            <a href="#ContactForm">Contact</a>
          </li>
          <li>
          <a href="https://docs.google.com/document/d/1Kw66gEB2bOnLCt9NeuAT5YxFrk_kH5Ot/export?format=pdf" target="_blank">Resume</a>


          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
