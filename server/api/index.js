const fetch = require("node-fetch");
var url = 'https://api.mercadolibre.com';

const fetchApi = (endpoint, parameters, handler) => new Promise((resolve) => {
  return fetch(`${url}${endpoint}${parameters}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then((res) => resolve(handler(res)));
});

module.exports = fetchApi;