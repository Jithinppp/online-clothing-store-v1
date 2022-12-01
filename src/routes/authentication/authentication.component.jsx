// components
import { SignContainer } from "./authentication.style";
import SignUpForm from "../../components/sign-up-form/Sign-up-form.component";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";

const Authentication = () => {
  return (
    <SignContainer>
      <SignInForm />
      <SignUpForm />
    </SignContainer>
  );
};
export default Authentication;

// NOTE: the redirectSignIn method takes to new page and it rerender entire app so all the data or states gone
// but if we authenticated the auth state from auth variable hold the current user state values
// there for the useEffect runs and takes the auth variable and store in firestore
// sign-in with googleRedirect
// useEffect(() => {
//   async function fetchData() {
//     const response = await getRedirectResult(auth);
//     if (response) {
//       await createUserDocumentFromAuth(response.user);
// console.log('user created with redirect',response.user);
//     }
//   }
//   fetchData();
// }, []);
