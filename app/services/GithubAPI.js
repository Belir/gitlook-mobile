import axios, { create } from 'axios';

const apiClient = create({
  baseURL: 'https://api.github.com',
});

const { get } = apiClient;

export const Search = {
  repositories: (query) =>  (
    get(`/search/repositories?q=${query}`)
  ),
  users: (query) => (
    get(`/search/users?q=${query}`)
  )
};

export const Users = {
  single: (userLogin) => (
    get(`/users/${userLogin}`)
  )
};

export const Repositories = {
  single: (ownerLogin, repoName) => (
    get(`/repos/${ownerLogin}/${repoName}`)
  ),
  collaborators: (ownerLogin, repoName) => (
    get(`/repos/${ownerLogin}/${repoName}/collaborators`, {
      data: {},
      headers: {
        'Accept': 'application/vnd.github.hellcat-preview+json',
      }
    })
  )
};
