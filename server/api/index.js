const fetch = require("node-fetch");
var url = 'https://api.mercadolibre.com';

const fetchApi = (endpoint) => {
  return fetch(url + endpoint, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
};

module.exports = fetchApi;