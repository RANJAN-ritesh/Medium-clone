import { INC, DEC, LOGGED_IN_USER } from "./actionType";
export const incCount = (payload) => ({
  type: INC,
  payload,
});
export const decCount = (payload) => ({
  type: DEC,
  payload,
});

// export const verifyAuth = (payload) => ({
//   type: LOGGED_IN_USER,
//   payload,
// });
