import React from "react";
import Image from "next/image";

import css from "./Footer.module.css";

const Footer = () => {
  const upArrowBtnHandler = () => {
    window?.scrollTo({
      top: 0,
    });
  };

  return (
    <div className={css.footer} id="footer">
      <div>
        <span className={css.txt1}>Made with ❤️ in India by</span>
        <a
          href="https://www.linkedin.com/in/koushil-mankali/"
          target="_blank"
          className={css.txt2}
          rel="noreferrer"
        >
          Koushil Mankali
        </a>
      </div>
      <div className={css.footerBar}>
        <a
          href="https://www.koushilmankali.in/sitemap.xml"
          target="_blank"
          className={css.btn}
          rel="noreferrer"
        >
          Sitemap
        </a>
        <div className={css.upArrowBtn} onClick={upArrowBtnHandler}>
          <Image src="/images/go-up.png" width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
