import { UPDATE_SEARCH_PHRASE } from 'constants/actionTypes';

export const updateSearchPhrase = (newPhrase) => ({
  type: UPDATE_SEARCH_PHRASE,
  payload: {
    searchPhrase: newPhrase,
  },
});
