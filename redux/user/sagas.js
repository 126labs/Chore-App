import {
  takeLatest, put, all, call
} from "redux-saga/effects";

import UserActionsTypes from "./types";
import {
  signInFailure,
  signInSuccess,
  signOutSuccess,
  signOutFailure
} from "./userActions";

export function* getSnapshotFromUserAuth(userAuth) {
  try {
    yield put(
      signInSuccess(userAuth)
    );
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithEmail({ payload: { password = "wa1czc24edasds" } }) {
  try {
    yield getSnapshotFromUserAuth(password);
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* onEmailSignInStart() {
  yield takeLatest(UserActionsTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}


export function* signOut() {
  try {
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignOutStart() {
  yield takeLatest(UserActionsTypes.SIGN_OUT_START, signOut);
}


export function* userSagas() {
  yield all([
    call(onEmailSignInStart),
    call(onSignOutStart)
  ]);
}
