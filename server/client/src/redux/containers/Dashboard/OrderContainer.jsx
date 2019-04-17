import React, { Component } from 'react';
// view components
import OrderPage from '../../../views/Dashboard/Order/OrderPage';
// connect redux
import { connect } from 'react-redux';
import { actionFetchAllOrdersRequest } from '../../actions/actionsCheckout';

class OrderContainer extends Component {
    componentDidMount() {
        this.props.actionGetAllOrders();
    }
    render() {
        const { orders } = this.props;
        return (
            <OrderPage orders={orders}>

            </OrderPage>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.orders
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actionGetAllOrders: () => {
            dispatch(actionFetchAllOrdersRequest());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderContainer);