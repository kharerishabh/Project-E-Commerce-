import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import classes from "./ContactUs.module.css";

const ContactUs = (props) => {
  const [isEntering, setIsEntering] = useState(false);
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneNoRef = useRef("");

  function submitUsers(event) {
    event.preventDefault();

    const users = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNo: phoneNoRef.current.value,
    };
    props.onAddUser(users);
    nameRef.current.value = "";
    emailRef.current.value = "";
    phoneNoRef.current.value = "";
  }
  const formFocusHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data will be lost"
        }
      />
      <form
        onFocus={formFocusHandler}
        onSubmit={submitUsers}
        className={classes.form}
      >
        <div className={classes.control}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="email">Email Id</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="phoneno">Phone No</label>
          <input type="number" id="phoneno" ref={phoneNoRef} />
        </div>
        <div className={classes.btn}>
          <button style={{ backgroundColor: "skyblue", color: "black" }}>
            Submit
          </button>
        </div>
      </form>
    </Fragment>
  );
};
export default ContactUs;
