import Link from "next/link";

import btn from "./Button.module.scss";

let Button = (props) => {
  return (
    <Link href={props.to}>
      <a className={btn.button}>{props.children}</a>
    </Link>
  );
};
export default Button;
