import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProfilePage from '../../views/Pages/ProfilePage/ProfilePage';
import { actFetchCustomerByIdRequest, actUpdateInfoCustomerRequest } from '../actions/index';
import { actGetOrdersCustomerReq } from '../actions/actionsOrderCustomer';

class ProfileContainer extends Component {
    componentDidMount(){
        var { match } = this.props;
        var id = match.params.id;
        this.props.actGetOrdersCustomer(id);
    }
    render() {
        var {
            infoCustomer,
            match,
            history,
            actFetchCustomerById,
            actUpdateInfoCustomer,
            ordersCustomer } = this.props;
        return (
            <ProfilePage
                infoCustomer={infoCustomer}
                match={match}
                ordersCustomer={ordersCustomer}
                history={history}
                actFetchCustomerById={actFetchCustomerById}
                actUpdateInfoCustomer={actUpdateInfoCustomer}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        infoCustomer: state.customer,
        ordersCustomer: state.ordersCustomer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        actFetchCustomerById: (id) => {
            dispatch(actFetchCustomerByIdRequest(id));
        },
        actUpdateInfoCustomer: (customer) => {
            dispatch(actUpdateInfoCustomerRequest(customer));
        },
        actGetOrdersCustomer: (id) => {
            dispatch(actGetOrdersCustomerReq(id))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);