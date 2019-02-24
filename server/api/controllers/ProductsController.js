'use strict'
const db = require('../db');

module.exports = {
    GET_ALL_PRODUCTS: (req, res) => {
        let SELECT_ALL_PRODUCTS = 'SELECT * FROM products';
        db.query(SELECT_ALL_PRODUCTS, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    GET_PRODUCT_BY_ID: (req, res) => {
        const SELECT_PRODUCT_BY_ID = 'SELECT * FROM products WHERE productID = ?';
        let productId = req.params.id;
        db.query(SELECT_PRODUCT_BY_ID, [productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    POST_PRODUCT: (req, res) => {
        let data = req.body;
        let sql = 'INSERT INTO products SET ?';
        db.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    UPDATE_PRODUCT_BY_ID: (req, res) => {
        let data = req.body;
        let productId = req.params.id;
        let sql = 'UPDATE products SET ? WHERE productID = ?';
        db.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    DELETE_PRODUCT_BY_ID: (req, res) => {
        let DELETE_PRODUCT_BY_ID = 'DELETE FROM products WHERE productID = ?';
        let productId = req.params.id;
        db.query(DELETE_PRODUCT_BY_ID, [productId], (err, response) => {
            if (err) throw err
            res.json({message: 'Delete success!'})
        })
    }
}