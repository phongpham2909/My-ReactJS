'use strict';
const connection = require('../database/config');

module.exports = {
    GET_ALL_CATEGORY: (req, res) => {
        const SELECT_ALL_CATEGORY = 'SELECT * FROM category';
        connection.query(SELECT_ALL_CATEGORY, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    GET_CATEGORY_BY_ID: (req, res) => {
        const SELECT_CATEGORY_BY_ID = 'SELECT * FROM category WHERE categoryID = ?';
        let categoryId = req.params.id;
        connection.query(SELECT_CATEGORY_BY_ID, [categoryId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    GET_PRODUCT_FOLLOW_CATEGORY: (req, res) => {
        const MyQuery = 'SELECT products.productID,products.productName, products.productPrice, products.productSale, products.productQuantity, products.productImageOfficial, products.productDescription FROM category,products WHERE category.categoryID = products.categoryID AND category.categoryID = ?';
        let categoryId = req.params.id;
        connection.query(MyQuery, [categoryId] , (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    POST_CATEGORY: (req, res) => {
        let data = req.body;
        const sql = 'INSERT INTO category SET ?';
        connection.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    UPDATE_CATEGORY_BY_ID: (req, res) => {
        let data = req.body;
        let categoryId = req.params.id;
        const sql = 'UPDATE category SET ? WHERE categoryID = ?';
        connection.query(sql, [data, categoryId], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    DELETE_CATEGORY_BY_ID: (req, res) => {
        const DELETE_CATEGORY_BY_ID = 'DELETE FROM category WHERE categoryID = ?';
        let categoryId = req.params.id;
        connection.query(DELETE_CATEGORY_BY_ID, [categoryId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    }
}