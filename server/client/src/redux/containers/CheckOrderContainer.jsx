import React, { Component } from 'react';
import CheckOrderPage from '../../views/Pages/CheckOrderPage/CheckOrderPage';
import { connect } from 'react-redux';

class CheckOrderContainer extends Component {
    render() {
        return (
            <CheckOrderPage>

            </CheckOrderPage>
        );
    }
}

export default connect(null, null)(CheckOrderContainer);