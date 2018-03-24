import { UPDATE_SEARCH_PHRASE_REQUESTED } from 'constants/actionTypes';

export const updateSearchPhrase = (newPhrase) => ({
  type: UPDATE_SEARCH_PHRASE_REQUESTED,
  payload: {
    data: {
      phrase: newPhrase,
    }
  },
});
