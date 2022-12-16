import { useState } from "react";
import { useDispatch } from "react-redux";

// components
import { SignUpContainer, SignUpFormWrapper } from "./sign-up-form.style";
import {
  MainTitle,
  LightSubtitle,
  DarkBtnPrimary,
} from "../../layouts/shared/Shared.js";
import FormInput from "../form-input/Form-Input.component";

import { signUpStart } from "../../store/user/user.action";

// default state fields vars
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const dispatch = useDispatch();
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
      dispatch(signUpStart(email, password, displayName));
      clearInputs();
    } else {
      alert("wrong credentials");
    }
  };

  return (
    <SignUpContainer className="sign-up_container">
      <MainTitle>Sign Up</MainTitle>
      <LightSubtitle>Let's start with new account</LightSubtitle>
      <SignUpFormWrapper>
        <form onSubmit={submitHandler}>
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
          <DarkBtnPrimary type="submit">Sign Up</DarkBtnPrimary>
        </form>
      </SignUpFormWrapper>
    </SignUpContainer>
  );
};
export default SignUpForm;

// NOTE: the name is same as the state value because to do [name]:value dynamically it takes from event.target
// therefor it should be same as state and name property of the element
// the value should be state value also so we can track of the data
