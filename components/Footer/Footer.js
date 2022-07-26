import React from "react";

import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <div>
        <span className={css.txt1}>Made in ❤️ with India by</span>
        <a
          href="https://www.linkedin.com/in/koushil-mankali/"
          target="_blank"
          className={css.txt2}
          rel="noreferrer"
        >
          Koushil Mankali
        </a>
      </div>
    </div>
  );
};

export default Footer;
