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
    GET_ORDER_DETAIL_BY_ID: (req, res) => {
        let orderId = req.params.id;
        const sqlQuery = 'SELECT orderdetail.orderID, products.productName,orderdetail.productPrice,orderdetail.quantity,orderdetail.productSale, size.sizeName, color.colorName, products.productImageOfficial FROM orderdetail,products,color,size WHERE orderdetail.productID = products.productID AND orderdetail.colorID = color.colorID AND orderdetail.sizeID = size.sizeID AND orderdetail.orderID = ?';
        connection.query(sqlQuery, [orderId], (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    GET_ORDER_BY_ID: (req, res) => {
        let orderId = req.params.id;
        const sqlQuery = 'SELECT orders.orderID,orders.orderReference,orders.orderCustomerName,orders.orderTotalAmount,orders.orderNumberPhone,orders.orderAddress,orders.orderDescription,payment.paymentType, orderstatus.orderStatusType,customers.userEmail,customers.avatar,orders.orderCreated FROM orders,payment,orderstatus,customers WHERE orders.customerID = customers.customerID AND orders.paymentID = payment.paymentID AND orders.orderStatusID = orderstatus.orderStatusID AND orders.orderID = ?';
        connection.query(sqlQuery, [orderId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    }
}

