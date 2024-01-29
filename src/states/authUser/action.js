import api from '../../utils/api';

const ActionType = {
  SET_AUTH: 'SET_AUTH',
  UNSET_AUTH: 'UNSET_AUTH',
};

function setAuthActionCreator(authUser) {
  return {
    type: ActionType.SET_AUTH,
    payload: {
      authUser,
    },
  };
}

function unsetAuthActionCreator() {
  return {
    type: ActionType.UNSET_AUTH,
    payload: {
      authUser: null,
    },
  };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await api.login({ email, password });
      api.putAccessToken(token);
      const authUser = await api.getOwnProfile();
      dispatch(setAuthActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUnsetAuthUser() {
  return async (dispatch) => {
    dispatch(unsetAuthActionCreator());
    api.putAccessToken('');
  };
}

export {
  ActionType,
  setAuthActionCreator,
  unsetAuthActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
