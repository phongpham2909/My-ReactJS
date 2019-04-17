'use strict';
const connection = require('../database/config');

module.exports = {
    GET_ALL_CATEGORY: (req, res) => {
        const SELECT_ALL_CATEGORY = 'SELECT * FROM size';
        connection.query(SELECT_ALL_CATEGORY, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    GET_CATEGORY_BY_ID: (req, res) => {
        const SELECT_CATEGORY_BY_ID = 'SELECT * FROM size WHERE sizeID = ?';
        let categoryId = req.params.id;
        connection.query(SELECT_CATEGORY_BY_ID, [categoryId], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    POST_CATEGORY: (req, res) => {
        let data = req.body;
        const sql = 'INSERT INTO size SET ?';
        connection.query(sql, [data], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    UPDATE_CATEGORY_BY_ID: (req, res) => {
        let data = req.body;
        let categoryId = req.params.id;
        const sql = 'UPDATE size SET ? WHERE sizeID = ?';
        connection.query(sql, [data, categoryId], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    },
    DELETE_CATEGORY_BY_ID: (req, res) => {
        const DELETE_CATEGORY_BY_ID = 'DELETE FROM size WHERE sizeID = ?';
        let categoryId = req.params.id;
        connection.query(DELETE_CATEGORY_BY_ID, [categoryId], (err, response) => {
            if (err) throw err
            res.json({ message: 'Delete success!' })
        })
    }
}