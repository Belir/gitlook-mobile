import { UPDATE_SEARCH_PHRASE } from 'constants/actionTypes';
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
    case UPDATE_SEARCH_PHRASE:
      return { ...state, ...action.payload };
    default:
      return state;
  };
};

export default searchReducer;
