require('dotenv').config()
const path = require('path');
const express = require('express');
const router = require('./src/router/Router');
const bodyparser = require('body-parser');
const app = express();


//midlleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/uplaod')));

const baseUrl = '/api/v1';
app.use(baseUrl, router);

app.listen(process.env.APP_PORT || 3001, () => console.log(`serve renning in ${process.env.APP_PORT}`))