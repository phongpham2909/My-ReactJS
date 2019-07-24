import React, { Component } from 'react';
import CompleteOrder from '../../views/Pages/CompleteOrder/CompleteOrder';
import { connect } from 'react-redux';

class ComplteOrderContainer extends Component {
    format_curency = (price) => {
        return price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
    }
    render() {
        const { cart } = this.props;
        return (
            <CompleteOrder cart={cart} format_curency={this.format_curency}>

            </CompleteOrder>
        );
    }
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps, null)(ComplteOrderContainer);