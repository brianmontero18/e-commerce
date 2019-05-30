var url = 'https://api.mercadolibre.com/';

export const getProductDetails = () => {
  return fetch(`${url}/sites/MLA/search?q=:${query}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => response);
};

const processMessages = (message) => {

  
  return {
    author: {
      name: 'Brian',
      lastname: 'Montero'
    },
    categories: [

    ],
    items: message.result.slice(0, 4).map(getItem)
  }
}

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

const getCategory = () => {

};