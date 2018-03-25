import {
  FETCH_USERS_STARTED,
  FETCH_USERS_SUCCEEDED,
  FETCH_USERS_FAILED,
  FETCH_USERS_FINISHED
} from 'constants/actionTypes';
import {
  STARTED, SUCCEDED, FAILED, FINISHED
} from 'constants/statuses';

const initialState = {
  data: {},
  status: {
    name: FINISHED,
    isLoading: false,
  },
  error: {},
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_STARTED: {
      const newStatus = {
        name: STARTED,
        isLoading: true,
      };

      return { ...state, status: newStatus, error: {} };
    }

    case FETCH_USERS_SUCCEEDED: {
      const newStatus = {
        name: SUCCEDED,
        isLoading: false,
      };
      const newData = action.payload.data.items;

      return { ...state, status: newStatus, data: newData };
    }

    case FETCH_USERS_FAILED: {
      const newStatus = {
        name: FAILED,
        isLoading: false,
      }

      return { ...state, status: newStatus, error: action.payload.error };
    }

    case FETCH_USERS_FINISHED: {
      const newStatus = {
        name: FINISHED,
        isLoading: false,
      };

      return { ...state, status: newStatus };
    }

    default:
      return state;
  };
};

export default usersReducer;
