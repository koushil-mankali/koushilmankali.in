import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import Image from "next/image";

import videoIcon from "../../../public/Images/video-camera.png";
import githubIcon from "../../../public/Images/github.png";
import eyeIcon from "../../../public/Images/eye.png";

import css from "./ProjectCard.module.css";

const ProjectCard = ({ item = {} }) => {
  const router = useRouter();

  const handleLink = (e, link) => {
    e.preventDefault();
    router.push(link);
  };

  return (
    <Link href={item?.link || "/"} target="_blank">
      <a target="_blank" className={css.anchor}>
        <div className={css.outerDiv}>
          <div className={css.imgBox}>
            <Image src={item.img} alt="project image" className={css.img} />
          </div>
          <div className={css.bdy}>
            <div className={css.ttl}>{item.ttl}</div>
            <div className={css.desc}>{item.desc?.slice(0, 120)}...</div>
            <div className={css.stack}>
              <span className={css.rtxt}>Tech Stack:</span>
              <span className={css.wtxt}>{item.stack}</span>
            </div>
            <div className={css.btns}>
              <div
                className={css.icon}
                onClick={(e) => handleLink(e, item?.video)}
              >
                <Image src={videoIcon} alt="icon" width="30px" height="30px" />
              </div>
              <div
                className={css.icon}
                onClick={(e) => handleLink(e, item?.git)}
              >
                <Image src={githubIcon} alt="icon" width="30px" height="30px" />
              </div>
              <div
                className={css.icon}
                onClick={(e) => handleLink(e, item?.live)}
              >
                <Image src={eyeIcon} alt="icon" width="30px" height="30px" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default ProjectCard;
