 import React from 'react'

 import {Formik, Form,} from 'formik'

 import css from './ContactComponent.module.css'
 
 const ContactComponent = () => {
   return <div className={css.outerDiv} id='contact'>
    <div className={css.innerDiv}>
        <div className={css.ttl}><span className={css.ttlS}>Contact</span> Me</div>
        <div className={css.bdy}>
            <div className={css.mailBox}>
                <div>Mail</div>
            </div>
            <div className={css.btns}>
                <a target="_blank" href='' className={css.btn} style={{backgroundColor: "#9BDAF3"}}>LinkedIn</a>
                <a target="_blank" href='' className={css.btn} style={{backgroundColor: "rgb(55, 59, 65)", color: "var(--white-alpha-color)"}}>Github</a>
                <a target="_blank" href='' className={css.btn} style={{backgroundColor: "#FEB2B2"}}>Gmail</a>
                <a target="_blank" href="https://wa.me/8465995039" className={css.btn} style={{backgroundColor: "rgb(37, 211, 102)"}}>Whatsapp</a>
            </div>
        </div>
    </div>
   </div>
 }
 
 export default ContactComponent