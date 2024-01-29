import { ActionType } from './action';

function detailThreadReducer(detailThread = {}, action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_DETAIL_THREAD:
      return action.payload.detailThread;
    case ActionType.CLEAR_DETAIL_THREAD:
      return null;
    case ActionType.ADD_DETAIL_THREAD_COMMENT:
      return {
        ...detailThread,
        comments: detailThread.comments.concat([action.payload.comment]),
      };
    case ActionType.ADD_VOTE_COMMENT:
      return detailThread.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            upVotesBy: comment.upVotesBy.includes(action.payload.userId)
              ? comment.upVotesBy.filter((userId) => userId !== action.payload.userId)
              : comment.upVotesBy.concat([action.payload.userId]),
            downVotesBy: comment.downVotesBy
              .includes(action.payload.userId)
              ? comment.downVotesBy.filter((userId) => userId !== action.payload.userId)
              : comment.downVotesBy,
          };
        }
        return comment;
      });
    case ActionType.DOWN_VOTE_COMMENT:
      return detailThread.comments.map((comment) => {
        if (comment.id === action.payload.commentId) {
          return {
            ...comment,
            downVotesBy: comment.downVotesBy
              .includes(action.payload.userId)
              ? comment.downVotesBy.filter((userId) => userId !== action.payload.userId)
              : comment.downVotesBy.concat([action.payload.userId]),
            upVotesBy: comment.upVotesBy
              .includes(action.payload.userId)
              ? comment.upVotesBy.filter((userId) => userId !== action.payload.userId)
              : comment.upVotesBy,
          };
        }
        return comment;
      });
    case ActionType.CLEAR_VOTE_COMMENT:
      return detailThread.comments.map((comment) => ({
        ...comment,
        upVotesBy: comment.upVotesBy.filter((userId) => userId !== action.payload.userId),
        downVotesBy: comment.downVotesBy.filter((userId) => userId !== action.payload.userId),
      }));
    default:
      return detailThread;
  }
}

export default detailThreadReducer;
