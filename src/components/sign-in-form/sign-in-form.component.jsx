import { useState } from "react";

// components
import { SignInContainer, Separator, SignInFormWrapper } from "./sign-in.style";
import {
  LightSubtitle,
  MainTitle,
  LightBtnPrimary,
  DarkBtnPrimary,
} from "../../layouts/Shared";
import { ReactComponent as GoogleIcon } from "../../assets/images/1534129544.svg";
import FormInput from "../form-input/Form-Input.component";

// firebase utils
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
    <SignInContainer>
      <MainTitle>Welcome back !</MainTitle>
      <LightSubtitle>please enter your details</LightSubtitle>
      <LightBtnPrimary onClick={logGoogleUser}>
        Log in with
        <GoogleIcon className="google_icon" />
      </LightBtnPrimary>
      <Separator>or</Separator>
      <SignInFormWrapper>
        <form onSubmit={submitHandler}>
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
          <DarkBtnPrimary type="submit">Sign in</DarkBtnPrimary>
        </form>
      </SignInFormWrapper>
    </SignInContainer>
  );
};

export default SignInForm;
