import { UPDATE_SEARCH_PHRASE } from 'constants/actionTypes';

const initialState = {
  searchPhrase: '',
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
