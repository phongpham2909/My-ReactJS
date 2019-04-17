import React from 'react';
import * as Types from "../../constants/actionTypes";
import DeleteForever from "@material-ui/icons/DeleteForever";
import * as Message from '../../constants/message';
import { toast } from 'react-toastify';
import { css } from 'glamor';

var data = JSON.parse(localStorage.getItem('CART'));

var initialState = data ? data : [];

var findProductInCart = (cart, product) => {
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.productID === product.productID) {
        index = i;
        break;
      }
    }
  }
  return index;
};
const SuccessRemoveProductInCart = () => (
  <div>
      <span>
          <DeleteForever />
      </span>
      &nbsp;
      <span>
          <b>SUCCESS: </b> {Message.MSG_DELETE_CART_SUCCESS}
      </span>
  </div>
)

const cart = (state = initialState, action) => {
  var { product, quantity } = action;
  var index = -1; // không tìm thấy => index = -1
  switch (action.type) {
    case Types.ADD_TO_CART:
      index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      }
      else {
        state.push({
          product,
          quantity
        })
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    case Types.DELETE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1){
        state.splice(index, 1);
      }
      localStorage.setItem('CART', JSON.stringify(state));
      toast(<SuccessRemoveProductInCart/>, {
        position: toast.POSITION.TOP_RIGHT,
        className: css({
            background: '#43a047 !important',
            color: '#fff !important',
            boxShadow: '2px 2px 20px 2px rgba(0,0,0,0.3) !important',
        }),
        progressClassName: css({
            background: '#fff !important'
        })
    });
      return [...state];
    case Types.UPDATE_PRODUCT_IN_CART:
      index = findProductInCart(state, product);
      if (index !== -1){
        state[index].quantity = quantity;
      }
      localStorage.setItem('CART', JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
};

export default cart;
