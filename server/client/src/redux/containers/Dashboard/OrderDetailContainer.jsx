import React, { Component } from 'react';
// views components
import OrderDetailPage from '../../../views/Dashboard/OrderDetail/OrderDetail';
// connect redux
import { connect } from 'react-redux';

class OrderDetailContainer extends Component {
    render() {
        return (
            <OrderDetailPage>

            </OrderDetailPage>
        );
    }
}

export default connect(null, null)(OrderDetailContainer);