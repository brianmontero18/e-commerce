var url = 'https://api.mercadolibre.com/';

export const getQueryResult = (query) => {
  return fetch(`${url}/sites/MLA/search?q=:${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(processMessages);
};

const processMessages = (message) => {
  return {
    author: {
      name: 'Brian',
      lastname: 'Montero'
    },
    categories: getCategory(message),
    items: message.results.slice(0, 4).map(getItem)
  }
};

const getItem = (item, index) => {
  return {
    id: item.id,
    title: item.title,
    price: {
      currency: item.currency_id,
      amount: item.price,
      decimals: item.installments.rate
    },
    picture: item.thumbnail,
    condition: item.condition,
    free_shipping: item.shipping.free_shipping 
  }
};

const getCategory = (message) => {
  var categories = [];

  message.filters.forEach(filter => {
    if(filter.id === 'category') {
      filter.values.forEach(value => {
        value.path_from_root.forEach(root => {
          if(value.id !== root.id) {
            categories.push(root.name);
          }
        });
        categories.push(value.name);
      });

      return categories;
    } else {
      categories.push(filter.values[0].name);
    }
  });

  return categories;
};