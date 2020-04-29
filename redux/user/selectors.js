import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUserToken = createSelector(
  [selectUser],
  (user) => user.token
);
