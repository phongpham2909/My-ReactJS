import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfilePage from '../../views/Pages/ProfilePage/ProfilePage';
import { actFetchCustomerByIdRequest, actUpdateInfoCustomerRequest } from '../actions/index';

class ProfileContainer extends Component {
    render() {
        var {
            infoCustomer,
            match,
            history,
            actFetchCustomerById,
            actUpdateInfoCustomer } = this.props;
        return (
            <ProfilePage
                infoCustomer={infoCustomer}
                match={match}
                history={history}
                actFetchCustomerById={actFetchCustomerById}
                actUpdateInfoCustomer={actUpdateInfoCustomer}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        infoCustomer: state.customer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchCustomerById: (id) => {
            dispatch(actFetchCustomerByIdRequest(id));
        },
        actUpdateInfoCustomer: (customer) => {
            dispatch(actUpdateInfoCustomerRequest(customer));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);