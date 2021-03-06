const express = require("express");

const db = require("../data/dbConfig.js");

const server = express();


server.use(express.json());

server.get('/', (req,res) => {

    db.select('*').from('accounts')
    .then( rows => {
        res.status(200).json( { data: rows});
    })
    .catch( error => {
        res.status(500).json( { message: 'Sorry ran into an error homes :('});
    });
});



module.exports = server;
