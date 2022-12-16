import { all, call, put, takeLatest } from "redux-saga/effects";
import { USER_ACTION_TYPES } from "./user.types";
import {
  signInSuccess,
  signInFailed,
  signUpSuccess,
  signUpFailed,
  signOutSuccess,
  signOutFailed,
} from "./user.action";
import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
  signOutUser,
  createAuthUserWithEmailAndPassword,
} from "../../utils/firebase";

// create the user in the database
export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    const snapshot = yield call(
      createUserDocumentFromAuth,
      userAuth,
      additionalData
    );
    yield put(signInSuccess({ id: snapshot.id, ...snapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// signInAfterSignUp
export function* signInAfterSignUp({ payload: { user, additionalData } }) {
  console.log(user, additionalData);
  try {
    yield call(getSnapshotFromUserAuth, user, additionalData);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// email password sign in
export function* emailSignIn({ payload: { email, password } }) {
  try {
    const { user } = yield call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// sign in start
export function* googleSignIn() {
  try {
    const { user } = yield call(signInWithGooglePopup);
    yield call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// sign up
export function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    yield put(signUpSuccess(user, { displayName }));
  } catch (error) {
    put(signUpFailed(error));
  }
}

// sign out
export function* signOutCurrentUser() {
  try {
    yield call(signOutUser);
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailed(error));
  }
}

//authenticate saga. what we want to execute after listen to the actionType
export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

// --> entry point generator functions <--

// create a gen function to authenticate entry saga or listener saga
export function* onCheckUserSession() {
  // listen to the action(1) then execute the function(2) we need to as second argument to takeLatest(1,2)
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
// gen fn for listening google signIn popup
export function* onGoogleSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, googleSignIn);
}
// gen fn for listening email and password
export function* onEmailPasswordSignInStart() {
  yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, emailSignIn);
}

// sign up start
export function* onSignUpStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}
// for signUp success
export function* onSignUpSuccess() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

// sign out current user listener
export function* onSignOutStart() {
  yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOutCurrentUser);
}

// create a gen function for root saga
export function* userSagas() {
  yield all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailPasswordSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
