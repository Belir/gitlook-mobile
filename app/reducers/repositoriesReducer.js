import {
  FETCH_REPOSITORIES_STARTED,
  FETCH_REPOSITORIES_SUCCEEDED,
  FETCH_REPOSITORIES_FAILED,
  FETCH_REPOSITORIES_FINISHED
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
    case FETCH_REPOSITORIES_STARTED: {
      const newStatus = {
        name: STARTED,
        isLoading: true,
      };

      return { ...state, status: newStatus, error: {} };
    }

    case FETCH_REPOSITORIES_SUCCEEDED: {
      const newStatus = {
        name: SUCCEDED,
        isLoading: false,
      };
      const newData = action.payload.data.items;

      return { ...state, status: newStatus, data: newData };
    }

    case FETCH_REPOSITORIES_FAILED: {
      const newStatus = {
        name: FAILED,
        isLoading: false,
      }

      return { ...state, status: newStatus, error: action.payload.error };
    }

    case FETCH_REPOSITORIES_FINISHED: {
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
