import Link from "next/link";

import css from "./Button.module.css";

const Button = ({txt, link='/'}) => {
  return <Link href={link}>
  <div className={css.btn}>{txt}</div>
</Link>
}

export default Button