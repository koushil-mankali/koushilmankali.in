import { useState } from "react";

import Link from "next/Link";
import Image from "next/Image";
import { useRouter } from "next/router";

import menuIcon from "../../public/Images/menu.png";
import cancelIcon from "../../public/Images/cancel.png";
import css from "./Navbar.module.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const router = useRouter();

  const handleMenuToogle = () => {
    setToggleMenu(val => !val)
  }
 
  return <div className={css.outerDiv}>
    <div className={css.sec1}>
        <Link href='/'><div className={css.ttl}>Koushil Mankali</div></Link>
        {toggleMenu ? <Image onClick={handleMenuToogle} src={menuIcon} width="20px" height="20px" alt="menu icon" className={css.icon} />
        : <Image onClick={handleMenuToogle} src={cancelIcon} width="20px" height="20px" alt="cancel icon" className={css.icon} /> }
    </div>
    <div className={toggleMenu ? css.sec2 : [css.sec2, css.sec2Click].join(' ')}>
        <Link href="/#home">
          <div
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
        <Link href="/#blog">
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
        </Link>
        <Link href="/#about">
          <div
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
        <Link href="/#resume">
          <div
            className={[css.menuLinkTxt, css.btn].join(' ')}
            onClick={handleMenuToogle}
          >
            resume
          </div>
        </Link>
    </div>
  </div>
};

export default Navbar;
