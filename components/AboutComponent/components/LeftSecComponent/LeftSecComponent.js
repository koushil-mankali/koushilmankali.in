import Image from 'next/image'

import css from './LeftSecComponent.module.css'

import koushilImage from "../../../../public/koushil.jpg";

const LeftSecComponent = () => {
  return (
    <div className={css.outerDiv}>
        <div className={css.imgBox}>
            <Image alt="computer enginner image" src={koushilImage} className={css.img} width="400px" height="400px" />
        </div>
        <div className={css.about}>
            Hi, My self Koushil Mankali I enjoy creating web applications and making them
            live on the internet.I have started creating websites
            when i was in my 11th standard on wordpress platform. It was fun to
            create websites and host them online, and also I was a computer
            enthusiastic which driven me to create computer and tech related
            blogging websites. So my websites/web application development journey was started way
            long back.
        </div>
    </div>
  );
};

export default LeftSecComponent;
