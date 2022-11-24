import { useState } from "react";
import "./sign-up-form.style.css";
import FormInput from "../form-input/Form-Input.component";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

// default state fields
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  // state for form fields
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  // changeHandler for input changes
  const formChangeHandler = (event) => {
    const { name, value } = event.target;
    //  setting form as an object with spreading pervious data and new data as
    // [name]:val this make whatever the key in name and val
    setFormFields({ ...formFields, [name]: value });
  };

  // clear input
  const clearInputs = () => {
    setFormFields(defaultFormFields);
  };
  // form submit
  const submitHandler = async (e) => {
    e.preventDefault();
    if (password === confirmPassword && password.length >= 6) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword(
          email,
          password
        );
        await createUserDocumentFromAuth(user, { displayName });
        console.log(user);
        clearInputs();
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("wrong credentials");
    }
  };

  return (
    <div className="sign-up_container">
      <h1 className="sign-in_title">Sign Up</h1>
      <p className="sign-in_subtitle">Let's start with new account</p>
      <form className="sign-up_form" onSubmit={submitHandler}>
        <FormInput
          placeholder="Display name"
          type="text"
          required
          name="displayName"
          value={displayName}
          onChange={formChangeHandler}
        />
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
        <FormInput
          placeholder="Confirm password"
          type="password"
          required
          name="confirmPassword"
          value={confirmPassword}
          onChange={formChangeHandler}
        />
        <button className="form-submit_button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};
export default SignUpForm;

// NOTE: the name is same as the state value because to do [name]:value dynamically it takes from event.target
// therefor it should be same as state and name property of the element
// the value should be state value also so we can track of the data
