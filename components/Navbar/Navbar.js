import { useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import menuIcon from "../../public/Images/menu.png";
import cancelIcon from "../../public/Images/cancel.png";
import css from "./Navbar.module.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const router = useRouter();

  const handleMenuToogle = () => {
    setToggleMenu((val) => !val);
  };

  const changeNavTabsAsPerIntersection = () => {
    if (typeof document !== "undefined") {
      const heroDiv = document?.getElementById("hero");
      const aboutDiv = document?.getElementById("about");
      const workDiv = document?.getElementById("work");
      const skillsDiv = document?.getElementById("skills");
      const contactDiv = document?.getElementById("contact");
      let init = 0;

      const divs = [heroDiv, aboutDiv, workDiv, skillsDiv, contactDiv];

      const changeNavTab = (entries) => {
        if (init === 0) {
          init = 1;
          return;
        }
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const divs = document.getElementsByClassName(css.menuLinkTxt);

            for (let i = 0; i <= divs.length; i++) {
              divs[i]?.classList?.remove(css.activeMenuLinkTxt);
            }

            document
              .getElementById(entry.target.id + "Link")
              ?.classList?.add(css.activeMenuLinkTxt);
          }
        });
      };

      const options = {
        root: null,
        rootMargin: "0px 0px 0px 0px",
        threshold: 0.4,
      };

      const observer = new IntersectionObserver(changeNavTab, options);

      divs.forEach((ele) => {
        if (ele) {
          observer?.observe(ele);
        }
      });
    }
  };

  changeNavTabsAsPerIntersection();

  return (
    <div className={css.outerDiv}>
      <div className={css.sec1}>
        <Link href="/">
          <div className={css.ttl}>Koushil Mankali</div>
        </Link>
        {toggleMenu ? (
          <Image
            onClick={handleMenuToogle}
            src={menuIcon}
            width="20px"
            height="20px"
            alt="menu icon"
            className={css.icon}
          />
        ) : (
          <Image
            onClick={handleMenuToogle}
            src={cancelIcon}
            width="20px"
            height="20px"
            alt="cancel icon"
            className={css.icon}
          />
        )}
      </div>
      <div
        className={toggleMenu ? css.sec2 : [css.sec2, css.sec2Click].join(" ")}
      >
        <Link href="/#home">
          <div
            id="heroLink"
            className={
              router.asPath === "/#home" || router.asPath === "/"
                ? [css.menuLinkTxt, css.activeMenuLinkTxt].join(" ")
                : css.menuLinkTxt
            }
            onClick={handleMenuToogle}
          >
            home
          </div>
        </Link>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://blog.koushilmankali.in/"
        >
          <div
            className={
              router.asPath === "/#blog"
                ? [css.menuLinkTxt, css.activeMenuLinkTxt].join(" ")
                : css.menuLinkTxt
            }
            onClick={handleMenuToogle}
          >
            blog
          </div>
        </a>
        <Link href="/#about">
          <div
            id="aboutLink"
            className={
              router.asPath === "/#about"
                ? [css.menuLinkTxt, css.activeMenuLinkTxt].join(" ")
                : css.menuLinkTxt
            }
            onClick={handleMenuToogle}
          >
            about
          </div>
        </Link>
        <Link href="/#work">
          <div
            id="workLink"
            className={
              router.asPath === "/#work"
                ? [css.menuLinkTxt, css.activeMenuLinkTxt].join(" ")
                : css.menuLinkTxt
            }
            onClick={handleMenuToogle}
          >
            work
          </div>
        </Link>
        <Link href="/#skills">
          <div
            id="skillsLink"
            className={
              router.asPath === "/#skills"
                ? [css.menuLinkTxt, css.activeMenuLinkTxt].join(" ")
                : css.menuLinkTxt
            }
            onClick={handleMenuToogle}
          >
            skills
          </div>
        </Link>
        <Link href="/#contact">
          <div
            id="contactLink"
            className={
              router.asPath === "/#contact"
                ? [css.menuLinkTxt, css.activeMenuLinkTxt].join(" ")
                : css.menuLinkTxt
            }
            onClick={handleMenuToogle}
          >
            contact
          </div>
        </Link>
        <Link href="/resume/koushil mankali resume.pdf">
          <div
            className={[css.menuLinkTxt, css.btn].join(" ")}
            onClick={handleMenuToogle}
          >
            resume
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
