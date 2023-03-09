import React from "react";

import Image from "next/image";

import css from "./SkillCard.module.css";

const SkillCard = ({ item = {} }) => {
  const { imgSrc, name } = item;
  return (
    <div className={css.outerDiv}>
      {imgSrc == "restapi" ? (
        <div className={css.noLogo}>REST API</div>
      ) : imgSrc == "" ? (
        <div className={css.noLogo}>No Logo</div>
      ) : (
        <Image
          src={imgSrc}
          alt="logo"
          width="80px"
          height="80px"
          className={css.img}
        />
      )}
      <div className={css.nameC}>{name}</div>
    </div>
  );
};

export default SkillCard;
