import React, { Component } from 'react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
// Components
import ShoppingCartPage from '../../views/Pages/ShoppingCartPage/ShoppingCartPage';
import SectionCartItem from '../../views/Pages/ShoppingCartPage/Sections/SectionCartItem';
// connect redux
import { connect } from 'react-redux';
import * as Message from '../../redux/constants/message';
import { actRemoveProductInCart, actUpdateProductInCart } from '../actions/index';
// Style CSS
import shoppingCartStyle from "../../assets/jss/material-kit-pro-react/views/shoppingCartStyle";

class CartContainer extends Component {
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    showShoppingCart = (cart) => {
        var { classes, actRemoveProductInCart, actUpdateProductInCart } = this.props;
        var result = <TableRow>
            <TableCell colSpan={3} className={classes.customBorderBottom1}>
                <h3>{Message.MSG_CART_EMPTY}</h3>
            </TableCell>
        </TableRow>;
        if (cart.length > 0) {
            result = cart.map((item, index) => {
                return (
                    <SectionCartItem
                        key={index}
                        item={item}
                        index={index}
                        format_curency={this.format_curency}
                        actRemoveProductInCart={actRemoveProductInCart}
                        actUpdateProductInCart={actUpdateProductInCart}
                    />
                );
            });
        }
        return result;
    }
    render() {
        var { cart } = this.props;
        return (
            <ShoppingCartPage cart={cart} format_curency={this.format_curency} handleClearCart={this.handleClearCart}>
                {this.showShoppingCart(cart)}
            </ShoppingCartPage>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}
const mapDispatchToProps = dispatch => {
    return {
        actRemoveProductInCart: (product) => {
            dispatch(actRemoveProductInCart(product));
        },
        actUpdateProductInCart: (product, quantity) => {
            dispatch(actUpdateProductInCart(product, quantity));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(shoppingCartStyle)(CartContainer));