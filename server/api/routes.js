'use strict';
module.exports = function(app) {
  var productsCtrl = require('./controllers/ProductsController');

  // todoList Routes
  app.route('/api/products')
    .get(productsCtrl.GET_ALL_PRODUCTS)
    .post(productsCtrl.POST_PRODUCT);

  app.route('/api/products/:id')
    .get(productsCtrl.GET_PRODUCT_BY_ID)
    .put(productsCtrl.UPDATE_PRODUCT_BY_ID)
    .delete(productsCtrl.DELETE_PRODUCT_BY_ID);
};