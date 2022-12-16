import { useState } from "react";
import { useDispatch } from "react-redux";

// components
import { SignInContainer, Separator, SignInFormWrapper } from "./sign-in.style";
import {
  LightSubtitle,
  MainTitle,
  LightBtnPrimary,
  DarkBtnPrimary,
} from "../../layouts/shared/Shared.js";
import { ReactComponent as GoogleIcon } from "../../assets/images/1534129544.svg";
import FormInput from "../form-input/Form-Input.component";
// saga
import {
  googleSignInStart,
  emailSignInStart,
} from "../../store/user/user.action";

// default variables
const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const dispatch = useDispatch();
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
      dispatch(emailSignInStart(email, password));
      clearInputs();
    } catch (error) {
      console.log(error);
    }
  };

  // sign-in and create user with googlePopup
  const logGoogleUser = async () => {
    dispatch(googleSignInStart());
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
