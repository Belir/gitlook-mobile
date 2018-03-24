import {
  UPDATE_SEARCH_PHRASE_STARTED,
  UPDATE_SEARCH_PHRASE_SUCCEEDED,
  UPDATE_SEARCH_PHRASE_FAILED,
  UPDATE_SEARCH_PHRASE_FINISHED
} from 'constants/actionTypes';
import {
  STARTED, SUCCEDED, FAILED, FINISHED
} from 'constants/statuses';

const initialState = {
  data: {
    phrase: '',
  },
  status: {
    name: FINISHED,
    isLoading: false,
  },
  error: {},
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_PHRASE_STARTED: {
      const newStatus = {
        name: STARTED,
        isLoading: true,
      };

      return { ...state, status: newStatus, error: {} };
    }

    case UPDATE_SEARCH_PHRASE_SUCCEEDED: {
      const newStatus = {
        name: SUCCEDED,
        isLoading: false,
      };

      return { ...state, status: newStatus, data: action.payload.data };
    }

    case UPDATE_SEARCH_PHRASE_FAILED: {
      const newStatus = {
        name: FAILED,
        isLoading: false,
      }

      return { ...state, status: newStatus, error: action.payload.error };
    }

    case UPDATE_SEARCH_PHRASE_FINISHED: {
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

export default searchReducer;
