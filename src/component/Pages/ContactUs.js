import { useRef } from "react";
import classes from "./ContactUs.module.css";

const ContactUs = (props) => {
    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneNoRef = useRef("");

     function submitUsers(event) {
        event.preventDefault()

        const users = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phoneNoref: phoneNoRef.current.value,
          };
          props.onAddUser(users);
          console.log(users)
          nameRef.current.value = "";
          emailRef.current.value = "";
          phoneNoRef.current.value = "";    
              
    }

  return (
    <form onSubmit={submitUsers}>
      <div className={classes.control}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"  ref={nameRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="email">Email Id</label>
        <input type="email" id="email" ref={emailRef}/>
      </div>
      <div className={classes.control}>
        <label htmlFor="phoneno">Phone No</label>
        <input type="number" id="phoneno"  ref={phoneNoRef}/>
      </div>
      <button>Submit</button>
    </form>
  );
};
export default ContactUs;
