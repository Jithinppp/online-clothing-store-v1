import { useState } from "react";

// components
import "./sign-in.style.css";
import FormInput from "../form-input/Form-Input.component";
import { ReactComponent as GoogleIcon } from "../../assets/images/1534129544.svg";

// utils
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase";

// default variables
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  // state for form fields
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  // clear input
  const clearInputs = () => {
    setFormFields(defaultFormFields);
  };

  // changeHandler for input changes
  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      // clearing the inputs
      clearInputs();
    } catch (error) {
      // handling the errors
      switch (error.code) {
        case "auth/user-not-found":
          alert("user not found");
          break;
        case "auth/wrong-password":
          alert("wrong password");
          break;
        default:
          console.log(error);
      }
    }
  };

  // sign-in and create user with googlePopup
  const logGoogleUser = async () => {
    try {
      await signInWithGooglePopup();
    } catch (error) {
      // error handling
      alert(error.code);
    }
  };

  return (
    <div className="sign-in_container">
      <h1 className="sign-in_title">Welcome back !</h1>
      <p className="sign-in_subtitle">please enter your details</p>
      <button className="sign-in-popup_button" onClick={logGoogleUser}>
        Log in with
        <GoogleIcon className="google_icon" />
      </button>
      <p className="or_separation">or</p>
      <form className="sign-up_form" onSubmit={submitHandler}>
        <FormInput
          placeholder="Email"
          type="email"
          required
          name="email"
          value={email}
          onChange={formChangeHandler}
        />
        <FormInput
          placeholder="Password"
          type="password"
          required
          name="password"
          value={password}
          onChange={formChangeHandler}
        />
        <button className="form-submit_button" type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignInForm;
