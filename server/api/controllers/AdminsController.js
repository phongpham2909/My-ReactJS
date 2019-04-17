var Cryptr = require('cryptr');
var connection = require('../database/config');

cryptr = new Cryptr('myTotalySecretKey');

module.exports = {
    LOGIN: (req, res) => {
        var username = req.body.adminName;
        var password = req.body.adminPassword;
        var sqlQuery = 'SELECT * FROM administration WHERE adminEmail = ?';
        connection.query(sqlQuery, [username], (error, results) => {
            var  result = {
                firstname: results[0].adminFirstName,
                lastname: results[0].adminLastName,
                administrationID: results[0].administrationID,
                adminEmail: results[0].adminEmail
            }
            if (error) {
                res.json({  
                    status: false,
                    message: 'there are some error with query'
                })
            } else {
                if (results.length > 0) {
                    decryptedString = cryptr.decrypt(results[0].adminPassword);
                    if (password == decryptedString) {
                        res.json({
                            status: true,
                            message: 'successfully authenticated',
                            result: result,
                        })
                    } else {
                        res.json({
                            status: false,
                            message: "Email and password does not match"
                        });
                    }
                }
                else {
                    res.json({
                        status: false,
                        message: "Email does not exits"
                    });
                }
            }
        });
    },
    REGISTER: (req, res) => {
        var today = new Date();
        var sqlQuery = 'INSERT INTO administration SET ?';
        var encryptedString = cryptr.encrypt(req.body.adminPassword);
        var users = {
            "adminFirstName": req.body.adminFirstName,
            "adminLastName": req.body.adminLastName,
            "adminEmail": req.body.adminEmail,
            "adminPassword": encryptedString,
            "adminCreated": today
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
    FETCH_ADMINISTRATION_BYID: (req, res) => {
        const SELECT_ADMINISTRATION_BYID = 'SELECT administrationID, adminEmail, adminPassword, adminFirstname, adminLastname, adminPhoneNumber, adminAddress, adminAbout, adminAvatar, adminLinkFacebook, adminLinkInstagram, DATE_FORMAT(adminBirthday,"%d/%m/%Y") AS adminBirthday, DATE_FORMAT(adminCreated,"%d/%m/%Y") AS adminCreated FROM administration WHERE administrationID = ?';
        let administrationID = req.params.id;
        connection.query(SELECT_ADMINISTRATION_BYID, [administrationID], (err, response) => {
            if (err) throw err
            res.json(response[0])
        })
    },
    UPDATE_ADMINISTRATION_BYID: (req, res) => {
        let data = req.body;
        let administrationId = req.params.id;
        const sql = 'UPDATE administration SET ? WHERE administrationID = ?';
        connection.query(sql, [data, administrationId], (err, response) => {
            if (err) throw err
            res.json(data)
        })
    }
}

