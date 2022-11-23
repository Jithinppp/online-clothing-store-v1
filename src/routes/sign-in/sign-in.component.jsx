import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase";

const SignIn = () => {
  // sign-in and create user
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log(user);
    const userRef = await createUserDocumentFromAuth(user);
    console.log(userRef);
  };
  return (
    <main className="sign-in_container">
      sign in
      <button onClick={logGoogleUser}>sign in with popup</button>
    </main>
  );
};
export default SignIn;
