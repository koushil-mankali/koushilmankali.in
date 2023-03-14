import css from './RightSecComponent.module.css'

import LeftDetailComponent from './components/LeftDetailComponent';
import RightDetailComponent from './components/RightDetailComp';

const RightSecComponent = () => {
  return (
    <div className={css.outerDiv}>
      <LeftDetailComponent ttl="ITalent Digital" txt="Working as a Frontend Developer" dur="2022 Apr - Present" />
      <RightDetailComponent ttl="Amoghnya Tech Sol." txt="Worked as a MERN Stack Developer " dur="2021 July - 2022 Mar" />
      <LeftDetailComponent ttl="B.Tech in CSE" txt="B.Tech in Computer Science and Engineering" dur="2017 - 2021" />
    </div>
  );
}

export default RightSecComponent