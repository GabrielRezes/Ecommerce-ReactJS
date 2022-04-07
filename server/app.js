// imports
const express = require('express');
const database = require('./src/database');
const { checkToken } = require('./src/middleware');

const app = express();

app.use(express.json());

const userRegister = require('./src/controllers/user-register');
const userLogin = require('./src/controllers/user-login');
const userCart = require('./src/controllers/user-cart');


app.get('/cart/:id', checkToken, async (req, res) => userCart(req, res));

app.post('/auth/register', async(req, res) => userRegister(req, res));

app.post('/auth/login', async(req, res) => userLogin(req, res));


database();
app.listen(3001);
