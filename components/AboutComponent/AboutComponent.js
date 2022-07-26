import css from './AboutComponent.module.css'

import LeftSecComponent from './components/LeftSecComponent/LeftSecComponent'
import RightSecComponent from './components/RightSecComponent/RightSecComponent'

const AboutComponent = () => {
  return <div className={css.outerDiv} id='about'>
    <div className={css.innerDiv}>
      <div className={css.ttl}>All <span className={css.ttlS}>About</span> Me</div>
      <div className={css.bdy}>
        <LeftSecComponent />
        <RightSecComponent />
      </div>
    </div>
  </div>
}

export default AboutComponent