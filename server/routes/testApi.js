var express = require('express');
var router = express.Router();
var fetchApi = require('../api');

router.get("/", (req, res, next) => {
    fetchApi(`/sites/MLA/search${req.url}`).then((response) => {
        const result = processMessages(response);
        res.send(result);
    });
});

router.get("/items/:id", (req, res, next) => {
  fetchProductDetail(req.url).then((response) => {
      res.send(response);
  });
});

const fetchProductDetail = (url) => new Promise((resolve) => {
  const itemResult = fetchApi(url);
  const description = fetchApi(`${url}/description`);

  Promise.all([itemResult, description]).then(values => {
      let productDetail = processMessagesDetails(values[0]);
      productDetail.item.description = values[1].plain_text;

      resolve(productDetail);
  });
});

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
      sold_quantity: message.sold_quantity
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
  price: getPrice(item),
  picture: item.thumbnail,
  condition: item.condition,
  free_shipping: item.shipping.free_shipping,
  address: item.address ? item.address.city_name : ''
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

const getPrice = (item) => ({
  currency: item.currency_id,
  amount: Number.parseInt(item.price),
  decimals: Number((item.price % 1).toFixed(2))
});

module.exports = router;