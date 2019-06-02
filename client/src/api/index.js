var url = 'http://localhost:9000';

export const fetchApi = (endpoint, parameters) => {
  return fetch(`${url}${endpoint}${parameters}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then((res) => res);
};