import {
  FETCH_REPOSITORIES_STARTED,
  FETCH_REPOSITORIES_SUCCEEDED,
  FETCH_REPOSITORIES_FAILED,
  FETCH_REPOSITORIES_FINISHED,
  FETCH_REPO_INFO_STARTED,
  FETCH_REPO_INFO_SUCCEEDED,
  FETCH_REPO_INFO_FAILED,
  FETCH_REPO_INFO_FINISHED,
  CLEAN_REPOSITORIES,
} from 'constants/actionTypes';
import {
  STARTED, SUCCEDED, FAILED, FINISHED
} from 'constants/statuses';
import { updateItemInArray } from 'utils/manipulators';

const initialState = {
  data: [],
  status: {
    name: FINISHED,
    isLoading: false,
  },
  error: {},
};

const repositoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REPOSITORIES_STARTED: {
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

    case FETCH_REPO_INFO_STARTED: {
      const newStatus = {
        name: STARTED,
        isLoading: true,
      };

      return { ...state, status: newStatus, error: {} };
    }

    case FETCH_REPO_INFO_SUCCEEDED: {
      const newStatus = {
        name: SUCCEDED,
        isLoading: false,
      };
      const newData = updateItemInArray(state.data, action.payload.data, 'full_name');

      return { ...state, status: newStatus, data: newData };
    }

    case FETCH_REPO_INFO_FAILED: {
      const newStatus = {
        name: FAILED,
        isLoading: false,
      }

      return { ...state, status: newStatus, error: action.payload.error };
    }

    case FETCH_REPO_INFO_FINISHED: {
      const newStatus = {
        name: FINISHED,
        isLoading: false,
      };

      return { ...state, status: newStatus };
    }

    case CLEAN_REPOSITORIES: {
      return initialState;
    }

    default:
      return state;
  };
};

export default repositoriesReducer;
