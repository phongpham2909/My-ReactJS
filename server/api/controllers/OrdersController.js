var connection = require('../database/config');

module.exports = {
    FETCH_ALL_ORDERS_CUSTOMER: (req, res) => {
        const FETCH_ALL_ORDERS_CUSTOMER = 'SELECT orders.orderReference, orders.orderTotalAmount, orders.orderAddress, orders.orderCustomerName, orders.orderNumberPhone, orders.orderDescription,orderstatus.orderStatusType,payment.paymentType, orders.orderCreated FROM orders, customers,orderstatus, payment WHERE payment.paymentID=orders.paymentID AND orders.orderStatusID = orderstatus.orderStatusID AND orders.customerID = customers.customerID AND orders.customerID = ?';
        let customerId = req.params.id;
        connection.query(FETCH_ALL_ORDERS_CUSTOMER,  [customerId],(err, response) => {
            if (err) throw err
            res.json(response)
        })
    }
}

