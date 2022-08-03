import Link from "next/link";

import hCss from "./Header.module.scss";

let Header = () => {
  let switchTheme = () => {
    document.body.classList.toggle("light");
    localStorage.setItem(
      "theme",
      document.body.classList.contains("light") ? "light" : "dark"
    );
  };

  let menuOpen = (e) => {
    document.getElementById("header").classList.toggle(hCss.headerRes);
  };

  return (
    <div className={`${hCss.header}`} id="header">
      <div className={`${hCss.ttld}`}>
        <Link href="/">
          <a className={hCss.ttl}>Koushil Mankali</a>
        </Link>
        <div className={`${hCss.bar} ${hCss.cmmn}`} onClick={menuOpen}>
          &#9776;
        </div>
      </div>
      <div className={`${hCss.menu} ${hCss.menuRes}`}>
        <label className={`${hCss.switch} ${hCss.cmmn}`}>
          <input
            type="checkbox"
            className={hCss.input}
            onChange={switchTheme}
          />
          <span className={`${hCss.slider} ${hCss.round}`}></span>
        </label>
        <Link href="/#projects">
          <a className={`${hCss.proj} ${hCss.cmmn}`}>Projects</a>
        </Link>
        <Link href="/#about">
          <a className={` ${hCss.abt} ${hCss.cmmn}`}>About</a>
        </Link>
        <Link href="/#contact">
          <a className={`${hCss.cnt} ${hCss.cmmn}`}>Contact</a>
        </Link>
        <Link href="/resume/koushil mankali resume.pdf">
          <a className={`${hCss.resume} ${hCss.cmmn}`}>Resume</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
