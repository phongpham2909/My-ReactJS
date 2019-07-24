import React, { Component } from 'react';
// views components
import OrderDetailPage from '../../../views/Dashboard/OrderDetail/OrderDetail';
// connect redux
import { connect } from 'react-redux';
import { actGetOrderByIdRequest, actGetProductsOrderRequest } from '../../actions/actionsCheckout';

class OrderDetailContainer extends Component {
    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.actGetOrderById(id);
            this.props.actGetProductsOrder(id);
        }
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    }
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        var { match, orderByID, history, productsOrder } = this.props;
        return (
            <OrderDetailPage
                match={match}
                orderByID={orderByID}
                history={history}
                productsOrder={productsOrder}
                format_curency={this.format_curency}
            />
        );
    }
}
const mapStateToProps = state => {
    return {
        orderByID: state.orderByID,
        productsOrder: state.productsOrder
    }
}
const mapDispatchToProps = dispatch => {
    return {
        actGetOrderById: (id) => {
            dispatch(actGetOrderByIdRequest(id));
        },
        actGetProductsOrder: (id) => {
            dispatch(actGetProductsOrderRequest(id));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailContainer);