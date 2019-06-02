var url = 'https://api.mercadolibre.com';

const fetchData = (endpoint, parameters, handler) => {
  return fetch(`${url}${endpoint}${parameters}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(handler);
};

export const getQueryResult = (query) => fetchData('/sites/MLA/search?q=:', query, processMessages);
export const getProductDetail = (id) => fetchData('/items/', id, processMessagesDetails);

const processMessages = (message) => {
  return {
    ...getAuthor(),
    ...getCategories(message),
    items: message.results.slice(0, 4).map((getItemProps))
  }
};

const processMessagesDetails = (message) => {
  return {
    ...getAuthor(),
    item: {
      ...getItemProps(message),
      sold_quantity: message.sold_quantity,
      description: message.description
    }
  }
};

const getAuthor = () => ({
  author: {
    name: 'Brian',
    lastname: 'Montero'
  }
});

const getItemProps = (item) => ({
  id: item.id,
  title: item.title,
  price: {
    currency: item.currency_id,
    amount: item.price,
    // decimals: item.installments.rate
  },
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping
});

const getCategories = (message) => {
  if(message.filters) {
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

    return {
      categories
    };
  }
};