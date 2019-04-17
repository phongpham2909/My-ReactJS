'use strict';
const connection = require('../database/config');

module.exports = {
    GET_ALL_PRODUCTS: (req, res) => {
        const SELECT_ALL_PRODUCTS = 'SELECT * FROM products ORDER BY productID DESC';
        connection.query(SELECT_ALL_PRODUCTS, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    GET_PRODUCT_BY_ID: (req, res) => {
        const SELECT_PRODUCT_BY_ID = 'SELECT * FROM products WHERE productID = ?';
        let productId = req.params.id;
        connection.query(SELECT_PRODUCT_BY_ID, [productId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    GET_PRODUCT_SALE: (req, res) => {
        const SELECT_PRODUCT_SALE = 'SELECT * FROM products WHERE productSale > 0 ORDER BY productID LIMIT 6';
        connection.query(SELECT_PRODUCT_SALE, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    GET_PRODUCT_FEATURED: (req, res) => {
        const SELECT_PRODUCT_FEATURED = 'SELECT * FROM products WHERE productFeatured = 1 ORDER BY productID LIMIT 6';
        connection.query(SELECT_PRODUCT_FEATURED, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    POST_PRODUCT: (req, res) => {
        let data = req.body;
        const sql = 'INSERT INTO products SET ?';
        connection.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    UPDATE_PRODUCT_BY_ID: (req, res) => {
        let data = req.body;
        let productId = req.params.id;
        const sql = 'UPDATE products SET ? WHERE productID = ?';
        connection.query(sql, [data, productId], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    DELETE_PRODUCT_BY_ID: (req, res) => {
        const DELETE_PRODUCT_BY_ID = 'DELETE FROM products WHERE productID = ?';
        let productId = req.params.id;
        connection.query(DELETE_PRODUCT_BY_ID, [productId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    }
}