var Cryptr = require('cryptr');
var connection = require('../database/config');

cryptr = new Cryptr('myTotalySecretKey');

module.exports = {
    LOGIN: (req, res) => {
        var userEmail = req.body.userEmail;
        var password = req.body.password;
        var sqlQuery = 'SELECT * FROM customers WHERE userEmail = ?';
        connection.query(sqlQuery, [userEmail], (error, results) => {
            var result = {
                firstname: results[0].firstname,
                lastname: results[0].lastname,
                customerID: results[0].customerID,
                userEmail: results[0].userEmail
            }
            if (error) {
                res.json({
                    status: false,
                    message: 'there are some error with query'
                })
            } else {
                if (results.length > 0) {
                    decryptedString = cryptr.decrypt(results[0].password);
                    if (password == decryptedString) {
                        res.json({
                            status: true,
                            message: "successfully authenticated",
                            result: result
                        })
                    } else {
                        res.json({
                            status: false,
                            message: "Email/userEmail and password does not match"
                        });
                    }
                }
                else {
                    res.json({
                        status: false,
                        message: "Email/User does not exits"
                    });
                }
            }
        });
    },
    REGISTER: (req, res) => {
        var today = new Date();
        var sqlQuery = 'INSERT INTO customers SET ?';
        var encryptedString = cryptr.encrypt(req.body.password);
        var users = {
            "firstname": req.body.firstname,
            "lastname": req.body.lastname,
            "userEmail": req.body.userEmail,
            "password": encryptedString,
            "customerCreated": today
        }
        connection.query(sqlQuery, users, (error, results, fields) => {
            if (error) {
                res.json({
                    status: false,
                    message: 'there are some error with query'
                })
            } else {
                res.json({
                    status: true,
                    data: results,
                    message: 'user registered sucessfully'
                })
            }
        });
    },
    FETCH_ALL_CUSTOMER: (req, res) => {
        const SELECT_ALL_CUSTOMER = 'SELECT * FROM customers';
        connection.query(SELECT_ALL_CUSTOMER, (err, response) => {
            if (err) throw err
            res.json(response)
        })
    },
    FETCH_CUSTOMER_BYID: (req, res) => {
        const SELECT_CUSTOMER_BYID = 'SELECT customerID,userEmail, password, firstname, lastname, phoneNumber,address,DATE_FORMAT(customerCreated,"%d/%m/%Y") AS Created, DATE_FORMAT(birthday,"%d/%m/%Y") AS birthday FROM customers WHERE customerID = ?';
        let customerID = req.params.id;
        connection.query(SELECT_CUSTOMER_BYID, [customerID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    UPDATE_CUSTOMER_BYID: (req, res) => {
        let data = req.body;
        let customerId = req.params.id;
        const sql = 'UPDATE customers SET ? WHERE customerID = ?';
        connection.query(sql, [data, customerId], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    }
}

