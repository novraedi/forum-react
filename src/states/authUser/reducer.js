import { ActionType } from './action';

function authUserReducer(authUser = null, action = {}) {
  switch (action.type) {
    case ActionType.SET_AUTH:
      return action.payload.authUser;
    case ActionType.UNSET_AUTH:
      return action.payload.authUser;
    default:
      return authUser;
  }
}

export default authUserReducer;
