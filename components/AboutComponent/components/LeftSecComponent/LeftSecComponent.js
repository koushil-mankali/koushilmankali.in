import React from "react";

import css from './LeftSecComponent.module.css'

import Image from 'next/image'

import koushilImage from "../../../../public/koushil.jpg";

const LeftSecComponent = () => {
  return (
    <div className={css.outerDiv}>
        <div className={css.imgBox}>
            {/* <Image alt="computer enginner image" src={koushilImage} className={css.img} width="400px" height="400px" /> */}
        </div>
        <div className={css.about}>
            Hi, My self Koushil Mankali I enjoy creating websites and making them
            live on the internet. I have started learning web developement in my 3rd
            year of Under Graduation. But actually i have started creating websites
            when i was in my 11th standard on wordpress platform. It was fun to
            create websites and host them online but also i was a computer
            enthusiastic which driven me to create computer and tech related
            websites. So my websites creation or development journey started way
            long.
        </div>
    </div>
  );
};

export default LeftSecComponent;
