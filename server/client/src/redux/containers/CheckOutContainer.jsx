import React, { Component } from 'react';
// connect react-redux
import { connect } from 'react-redux';
import CheckOutPage from '../../views/Pages/CheckOutPage/CheckOutPage';
import { actionAddOrderRequest, actionOrderDetailRequest } from '../../redux/actions/actionsCheckout';

class CheckOutContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: []
        }
    }
    componentDidMount() {
        if (localStorage.getItem('CART')) {
            this.setState({
                cart: this.props.cart
            })
        }
    }
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
      }
    render() {
        var { cart } = this.state;
        var { actAddOrder, actAddOrderDetail, history } = this.props;
        return (
            <CheckOutPage 
            cart={cart} 
            format_curency={this.format_curency} 
            actAddOrder={actAddOrder} 
            actAddOrderDetail={actAddOrderDetail}
            history={history}
            >
            </CheckOutPage>
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
        actAddOrder: (order) => {
            dispatch(actionAddOrderRequest(order));
        },
        actAddOrderDetail: (orderdetail) => {
            dispatch(actionOrderDetailRequest(orderdetail));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckOutContainer);