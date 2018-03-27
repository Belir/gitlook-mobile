import apiCall from 'utils/apiCall';

const BASE_URL = 'https://api.github.com';

export const Search = {
  repositories: (query) =>  (
    apiCall(`${BASE_URL}/search/repositories?q=${query}`)
  ),
  users: (query) => (
    apiCall(`${BASE_URL}/search/users?q=${query}`)
  )
};

export const Users = {
  single: (userLogin) => (
    apiCall(`${BASE_URL}/users/${userLogin}`)
  )
};

export const Repositories = {
  single: (ownerLogin, repoName) => (
    apiCall(`${BASE_URL}/repos/${ownerLogin}/${repoName}`)
  ),
  contributors: (ownerLogin, repoName) => (
    apiCall(`${BASE_URL}/repos/${ownerLogin}/${repoName}/contributors`)
  )
};
