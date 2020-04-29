import UserActionsTypes from "./types";

const INITIAL_STATE = {
  token: null,
  error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionsTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null
      };

    case UserActionsTypes.SIGN_IN_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    case UserActionsTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        token: null,
        error: null
      };

    case UserActionsTypes.SIGN_OUT_FAILURE:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default userReducer;
