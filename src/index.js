const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'robert',
    password: 'robertsql7',
    database: 'dairy_data_db'
});

connection.connect();

connection.query('SELECT * FROM heifers', (err,rows) => {
    if(err) throw err;

    console.log(rows);
});

connection.end();
