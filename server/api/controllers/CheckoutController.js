'use strict';
const connection = require('../database/config');
const randomstring = require("randomstring");

module.exports = {
    POST_ORDER: (req, res) => {
        var today = new Date();
        const sqlQuery = 'INSERT INTO orders SET ?';
        var result = {
            orderReference: randomstring.generate({
                length: 6,
                charset: 'numeric'
            }),
            orderCustomerName: req.body.orderCustomerName,
            orderTotalAmount: req.body.orderTotalAmount,
            orderNumberPhone: req.body.orderNumberPhone,
            orderAddress: req.body.orderAddress,
            orderDescription: req.body.orderDescription,
            customerID: req.body.customerID,
            paymentID: req.body.paymentID,
            orderStatusID: req.body.orderStatusID,
            orderCreated: today
        }
        connection.query(sqlQuery, result, (error, results) => {
            if (error) {
                res.json({
                    status: false,
                    message: 'there are some error with query'
                })
            } else {
                res.json({
                    status: true,
                    data: result,
                    message: 'sucessfully'
                });
            }
        })
    },
    POST_ORDER_DETAIL: (req, res) => {
        const sqlQuery = 'INSERT INTO orderdetail SET orderID = (SELECT orderID FROM orders ORDER BY orderID DESC LIMIT 1), ?';
        var result = {
            productID: req.body.productID,
            colorID: req.body.colorID,
            sizeID: req.body.sizeID,
            productPrice: req.body.productPrice,
            quantity: req.body.quantity,
            productSale: req.body.productSale
        }
        connection.query(sqlQuery, result, (error, results) => {
            if (error) {
                res.json({
                    status: false,
                    message: 'there are some error with query'
                })
            } else {
                res.json({
                    status: true,
                    data: result,
                    message: 'sucessfully'
                });
            }
        })
    },
    GET_ALL_ORDERS: (req, res) => {
        const sqlQuery = 'SELECT orders.orderID, orders.orderReference, orders.orderCustomerName, orders.orderTotalAmount, payment.paymentType, orderstatus.orderStatusType,DATE_FORMAT(orderCreated,"%d/%m/%Y %T") AS Created FROM orders,orderstatus,payment WHERE payment.paymentID= orders.paymentID AND orderstatus.orderStatusID = orders.orderStatusID';
        connection.query(sqlQuery, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    GET_ORDER_BY_ID: (req, res) => {
        let data = req.body;
        let orderId = req.params.id;
        const sqlQuery = '';
        connection.query(sqlQuery, [data, orderId], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    }
}

