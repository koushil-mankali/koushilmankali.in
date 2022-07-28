import {createPortal} from 'react-dom'

import css from './AlertComponent.module.css'

const AlertComponent = () => {
 const comp = <div className={css.txt}>Currently email service is not avaliable!</div>

  return comp;
}

export default AlertComponent