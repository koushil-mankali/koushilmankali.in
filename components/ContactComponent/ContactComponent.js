import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';

import AlertComponent from "../AlertComponent/AlertComponent";
import css from "./ContactComponent.module.css";

const ContactComponent = () => {

    const initialValues = {
        username: "",
        email:"",
        message:"",
    }

    const validationSchema = Yup.object({
        username: Yup.string().min(3, "Minimum 3 charecters required!").required("Required!"),
        email: Yup.string().email("Email is required!").required("Required!"),
        message: Yup.string().min(5, "Minimum 5 charecters required!").required("Required!")
    });

    const submitForm = (values) => {
        console.log(values, 'values')
    }

  return (
    <div className={css.outerDiv} id="contact">
      <div className={css.innerDiv}>
        <div className={css.ttl}>
          <span className={css.ttlS}>Contact</span> Me
        </div>
        <div className={css.bdy}>
          <div className={css.mailBox}>
          <AlertComponent />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={submitForm}
            >
                {
                    (formik) => {
                        return <Form>
                            <div className={css.field}>
                                <Field name="username" type="text" placeholder="Name" className={css.inpField}/>
                                <ErrorMessage name="username">
                                    {msg => <div className={css.errorMessage}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className={css.field}>
                                <Field name="email" type="email" placeholder="Email" className={css.inpField}/>
                                <ErrorMessage name="email">
                                    {msg => <div className={css.errorMessage}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <div className={css.field}>
                                <Field name="message" as="textarea" placeholder="Message" className={css.inpFieldT}/>
                                <ErrorMessage name="message">
                                    {msg => <div className={css.errorMessage}>{msg}</div>}
                                </ErrorMessage>
                            </div>
                            <button className={css.sendBtn}>Send Message</button>
                        </Form>
                    }
                }
            </Formik>
          </div>
          <div className={css.btns}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/koushil-mankali/"
              className={css.btn}
              style={{ backgroundColor: "#9BDAF3" }}
            >
              LinkedIn
            </a>
            <a
              target="_blank"
              href="https://github.com/koushil-mankali"
              className={css.btn}
              style={{
                backgroundColor: "rgb(55, 59, 65)",
                color: "var(--white-alpha-color)",
              }}
            >
              Github
            </a>
            <a
              target="_blank"
              href="mailto:kousilmankali@gmail.com"
              className={css.btn}
              style={{ backgroundColor: "#FEB2B2" }}
            >
              Gmail
            </a>
            <a
              target="_blank"
              href="https://wa.me/8465995039"
              className={css.btn}
              style={{ backgroundColor: "rgb(37, 211, 102)" }}
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;
