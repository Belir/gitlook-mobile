const apiCall = async (url, method = 'GET', headers = {}, options = {}) => {
  const response = await fetch(url, {
    method,
    headers: {
      'Content-type': 'application/json',
      ...headers,
    },
    ...options,
  });

  const json = await response.json();

  if (response.ok) {
    return ({
      data: json,
    })
  }

  const { error } = json;

  throw new Error(error || json.message || 'Something went wrong');
};

export default apiCall;
