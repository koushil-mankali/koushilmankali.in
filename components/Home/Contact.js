import { useState } from "react";

import ContactForm from "../../pages/api/contactForm";

import contactCss from "./Contact.module.scss";

let Contact = () => {
  let [state, setState] = useState({
    name: "",
    mail: "",
    mess: "",
  });
  let [error, setError] = useState({
    error: false,
    status: null,
  });

  let inputChange = (e) => {
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });
  };

  let sendFunc = (e) => {
    e.preventDefault();

    return setError({
      error: true,
      mess: "Sorry currently mail service is not working kindly send me mail manually at koushilmankali@gmail.com",
    });

    if (state.name == "") {
      return setError({ error: true, mess: "Please fill the name field!" });
    }
    if (state.mail == "") {
      return setError({ error: true, mess: "Please fill the email field!" });
    }
    if (!state.mail.includes("@")) {
      return setError({ error: true, mess: "Please enter a valid email!" });
    }
    if (state.mess.length < 10) {
      return setError({
        error: true,
        mess: "Please enter message of minimum lenght 10.",
      });
    }
    setError(false);
    // ContactForm(state);

    document.getElementById("contactForm").reset();
    setState({
      name: "",
      mail: "",
      mess: "",
    });
  };

  return (
    <div className={contactCss.container} id="contact">
      <h1>Contact Me</h1>
      {error.error ? (
        <div className={contactCss.error}>{error.mess}</div>
      ) : null}
      <div className={contactCss.innerContainer}>
        <form
          className={contactCss.form}
          onSubmit={sendFunc}
          method="POST"
          id="contactForm"
        >
          <div className={contactCss.inptDiv}>
            <label htmlFor="name" className={contactCss.label}>
              Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={inputChange}
              className={contactCss.inpt}
            />
          </div>
          <div className={contactCss.inptDiv}>
            <label htmlFor="mail" className={contactCss.label}>
              E-Mail:
            </label>
            <input
              type="text"
              name="mail"
              id="mail"
              onChange={inputChange}
              className={contactCss.inpt}
            />
          </div>
          <div className={contactCss.mess}>
            <label htmlFor="mess" className={contactCss.label}>
              Message:
            </label>
            <textarea
              name="mess"
              id="mess"
              onChange={inputChange}
              className={contactCss.messText}
              rows="10"
            />
          </div>
          <span className={contactCss.btn}>
            <button className={contactCss.sendBtn} type="submit">
              Send!
            </button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
