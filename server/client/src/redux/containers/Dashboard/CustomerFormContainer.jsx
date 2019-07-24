import React, { Component } from 'react';
import CustomerForm from '../../../views/Dashboard/Customer/SectionsForm/CustomerForm';
import { connect } from 'react-redux';
import { actGetCustomerbyID, actUpdateCustomerByID } from '../../actions/actionsCustomer';

class CustomerFormContainer extends Component {
    componentWillMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.GetCustomerByID(id);
        }
    }

    render() {
        const { customerEditing, UpdateCustomer, history } = this.props;
        return (
            <CustomerForm
                customerEditing={customerEditing}
                UpdateCustomer={UpdateCustomer} 
                history={history}
            />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        customerEditing: state.customerEditing
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        GetCustomerByID: (id) => {
            dispatch(actGetCustomerbyID(id));
        },
        UpdateCustomer: (customer) => {
            dispatch(actUpdateCustomerByID(customer));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomerFormContainer);