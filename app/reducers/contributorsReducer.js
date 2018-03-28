import {
  FETCH_REPO_CONTRIBUTORS_STARTED,
  FETCH_REPO_CONTRIBUTORS_SUCCEEDED,
  FETCH_REPO_CONTRIBUTORS_FAILED,
  FETCH_REPO_CONTRIBUTORS_FINISHED,
} from 'constants/actionTypes';
import {
  STARTED, SUCCEDED, FAILED, FINISHED
} from 'constants/statuses';
import { updateKeyIdObject } from 'utils/manipulators';


const initialState = {
  data: {},
  status: {
    name: FINISHED,
    isLoading: false,
  },
  error: {},
};

const contributorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPO_CONTRIBUTORS_STARTED: {
      const newStatus = {
        name: STARTED,
        isLoading: true,
      };

      return {
        ...state,
        status: newStatus,
        error: {},
      };
    }

    case FETCH_REPO_CONTRIBUTORS_SUCCEEDED: {
      const newStatus = {
        name: SUCCEDED,
        isLoading: false,
      };
      const newData = { ...state.data, ...action.payload.data };

      return {
        ...state,
        status: newStatus,
        data: newData,
      };
    }

    case FETCH_REPO_CONTRIBUTORS_FAILED: {
      const newStatus = {
        name: FAILED,
        isLoading: false,
      }

      return {
        ...state,
        status: newStatus,
        error: action.payload.error,
      };
    }

    case FETCH_REPO_CONTRIBUTORS_FINISHED: {
      const newStatus = {
        name: FINISHED,
        isLoading: false,
      };

      return {
        ...state,
        status: newStatus,
      };
    }

    default:
      return state;
  };
};

export default contributorsReducer;
