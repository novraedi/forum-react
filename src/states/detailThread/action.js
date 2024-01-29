import api from '../../utils/api';

const ActionType = {
  RECEIVE_DETAIL_THREAD: 'RECEIVE_DETAIL_THREAD',
  CLEAR_DETAIL_THREAD: 'CLEAR_DETAIL_THREAD',
  ADD_DETAIL_THREAD_COMMENT: 'ADD_DETAIL_THREAD_COMMENT',
  ADD_VOTE_COMMENT: 'ADD_VOTE_COMMENT',
  DOWN_VOTE_COMMENT: 'DOWN_VOTE_COMMENT',
  CLEAR_VOTE_COMMENT: 'CLEAR_VOTE_COMMENT',
};

function receiveDetailThreadActionCreator(detailThread) {
  return {
    type: ActionType.RECEIVE_DETAIL_THREAD,
    payload: {
      detailThread,
    },
  };
}

function clearDetailThreadActionCreator() {
  return {
    type: ActionType.CLEAR_DETAIL_THREAD,
  };
}

function addDetailThreadCommentActionCreator(comment) {
  return {
    type: ActionType.ADD_DETAIL_THREAD_COMMENT,
    payload: {
      comment,
    },
  };
}

function addVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.ADD_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function downVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.DOWN_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function clearVoteCommentActionCreator({ commentId, userId }) {
  return {
    type: ActionType.CLEAR_VOTE_COMMENT,
    payload: {
      commentId,
      userId,
    },
  };
}

function asyncReceiveDetailThread(threadId) {
  return async (dispatch) => {
    try {
      const detailThread = await api.getDetailThread(threadId);
      dispatch(receiveDetailThreadActionCreator(detailThread));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddDetailThreadComment({ threadId, content }) {
  return async (dispatch) => {
    try {
      const comment = await api.createThreadComment({ threadId, content });
      dispatch(addDetailThreadCommentActionCreator(comment));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncAddVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(addVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.upVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(addVoteCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

function asyncDownVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.downVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(downVoteCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

function asyncClearVoteComment({ threadId, commentId }) {
  return async (dispatch, getState) => {
    const { authUser } = getState();
    dispatch(clearVoteCommentActionCreator({ commentId, userId: authUser.id }));

    try {
      await api.clearVoteComment({ threadId, commentId });
    } catch (error) {
      alert(error.message);
      dispatch(clearVoteCommentActionCreator({ commentId, userId: authUser.id }));
    }
  };
}

export {
  ActionType,
  receiveDetailThreadActionCreator,
  clearDetailThreadActionCreator,
  addDetailThreadCommentActionCreator,
  addVoteCommentActionCreator,
  downVoteCommentActionCreator,
  clearVoteCommentActionCreator,
  asyncReceiveDetailThread,
  asyncAddDetailThreadComment,
  asyncAddVoteComment,
  asyncDownVoteComment,
  asyncClearVoteComment,
};
