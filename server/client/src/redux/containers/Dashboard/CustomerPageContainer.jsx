import React, { Component } from 'react';
import CustomerPage from "../../../views/Dashboard/Customer/CustomerPage";
import { connect } from 'react-redux';
import { actGetCustomersReq } from '../../actions/actionsCustomer';

class CustomerPageContainer extends Component {
    componentWillMount(){
        this.props.getCustomers();
    }
    render() {
        const { Customers } = this.props;
        console.log(Customers)
        return (
            <CustomerPage Customers={Customers}>
                
            </CustomerPage>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        Customers: state.Customers
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getCustomers: () => {
            dispatch(actGetCustomersReq());
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CustomerPageContainer);