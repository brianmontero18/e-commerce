var express = require('express');
var router = express.Router();
var fetchApi = require('../api');

router.get("/", (req, res, next) => {
    fetchApi('/sites/MLA/search', req.url, processMessages).then((result) => {
        res.send(result);
    });
});

router.get("/items/:id", (req, res, next) => {
    fetchApi('/items/', req.url.split('/items/')[1], processMessagesDetails).then((result) => {
        res.send(result);
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

module.exports = router;