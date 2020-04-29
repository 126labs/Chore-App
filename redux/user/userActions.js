
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
