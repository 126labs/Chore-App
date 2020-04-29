
import UserActionsTypes from "./types";

export const emailSignInStart = (emailAndPassword) => ({
  type: UserActionsTypes.EMAIL_SIGN_IN_START,
  payload: emailAndPassword
});

export const signInSuccess = (token) => ({
  type: UserActionsTypes.SIGN_IN_SUCCESS,
  payload: token
});

export const signInFailure = (errorMessage) => ({
  type: UserActionsTypes.SIGN_IN_FAILURE,
  payload: errorMessage
});

export const signOutStart = () => ({
  type: UserActionsTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
  type: UserActionsTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (errorMessage) => ({
  type: UserActionsTypes.SIGN_OUT_FAILURE,
  payload: errorMessage
});
