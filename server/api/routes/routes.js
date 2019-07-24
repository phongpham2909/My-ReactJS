'use strict';
module.exports = function (app) {
  var productsCtrl = require('../controllers/ProductsController');
  var administrationCtrl = require('../controllers/AdminsController');
  var userCtrl = require('../controllers/UsersController');
  var categoryCtrl = require('../controllers/CategoryController');
  var sizeCategoryCtrl = require('../controllers/SizeCategoryController');
  var checkoutCtrl = require('../controllers/CheckoutController');
  var orderCtrl = require('../controllers/OrdersController');

  // todoList Routes
  app.route('/api/products')
    .get(productsCtrl.GET_ALL_PRODUCTS)
    .post(productsCtrl.POST_PRODUCT);
  app.route('/api/products/:id')
    .get(productsCtrl.GET_PRODUCT_BY_ID)
    .put(productsCtrl.UPDATE_PRODUCT_BY_ID)
    .delete(productsCtrl.DELETE_PRODUCT_BY_ID);
  app.route('/api/productsale')
    .get(productsCtrl.GET_PRODUCT_SALE);
  app.route('/api/productfeatured')
    .get(productsCtrl.GET_PRODUCT_FEATURED);

  /* route to handle login for administration */
  app.route('/api/administration/login')
    .post(administrationCtrl.LOGIN);
  app.route('/api/administration/register')
    .post(administrationCtrl.REGISTER);
  app.route('/api/administration/profile/:id')
    .get(administrationCtrl.FETCH_ADMINISTRATION_BYID)
    .put(administrationCtrl.UPDATE_ADMINISTRATION_BYID);

  /* route to handle login and registration for user*/
  app.route('/api/user/login')
    .post(userCtrl.LOGIN);
  app.route('/api/user/register')
    .post(userCtrl.REGISTER);
  app.route('/api/customer/:id')
    .get(userCtrl.FETCH_CUSTOMER_BYID)
    .put(userCtrl.UPDATE_CUSTOMER_BYID);
  app.route('/api/customers')
    .get(userCtrl.FETCH_ALL_CUSTOMER);

  // Category
  app.route('/api/categories')
    .get(categoryCtrl.GET_ALL_CATEGORY)
    .post(categoryCtrl.POST_CATEGORY);
  app.route('/api/category/:id')
    .get(categoryCtrl.GET_CATEGORY_BY_ID)
    .put(categoryCtrl.UPDATE_CATEGORY_BY_ID)
    .delete(categoryCtrl.DELETE_CATEGORY_BY_ID);
  app.route('/api/products-follow-category/:id')
    .get(categoryCtrl.GET_PRODUCT_FOLLOW_CATEGORY);

    // Size Category
    app.route('/api/size-category')
    .get(sizeCategoryCtrl.GET_ALL_CATEGORY)
    .post(sizeCategoryCtrl.POST_CATEGORY);
  app.route('/api/size-category/:id')
    .get(sizeCategoryCtrl.GET_CATEGORY_BY_ID)
    .put(sizeCategoryCtrl.UPDATE_CATEGORY_BY_ID)
    .delete(sizeCategoryCtrl.DELETE_CATEGORY_BY_ID);

  app.route('/api/checkout/orders')
    .post(checkoutCtrl.POST_ORDER);
  app.route('/api/checkout/order-detail')
    .post(checkoutCtrl.POST_ORDER_DETAIL);

  // Order Table Admin
  app.route('/api/get-all-orders')
    .get(checkoutCtrl.GET_ALL_ORDERS);
  app.route('/api/get-order-detail/:id')
    .get(checkoutCtrl.GET_ORDER_DETAIL_BY_ID);
    app.route('/api/get-order/:id')
    .get(checkoutCtrl.GET_ORDER_BY_ID);
  app.route('/api/get-orders-customer/:id')
    .get(orderCtrl.FETCH_ALL_ORDERS_CUSTOMER);
};