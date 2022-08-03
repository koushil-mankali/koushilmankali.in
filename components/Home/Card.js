import Image from "next/image";
import Link from "next/link";

import cardCss from "./Card.module.scss";

let Card = (props) => {
  let { postData } = props;
  let { image, title, url } = postData;
  return (
    <Link href={"posts/" + url}>
      <a className={cardCss.card}>
        <div className={cardCss.imgDiv}>
          <Image
            src={"/Images/postImages/" + image}
            alt="project pic"
            width="400px"
            height="300px"
            className={cardCss.imgTag}
          />
        </div>
        <div className={cardCss.ttl}>{title}</div>
        <div className={cardCss.bdy}>
          <div className={cardCss.viewBtn}>
            <Link href={"posts/" + url}>
              <a>View</a>
            </Link>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
