// imports
const express = require('express');
const database = require('./src/database');
const auth = require('./src/middleware/auth');

const app = express();

app.use(express.json());

const userRegister = require('./src/controllers/user-register');
const userLogin = require('./src/controllers/user-login');
const userCart = require('./src/controllers/user-cart');


app.post('/auth/register', async (req, res) => userRegister(req, res));

app.post('/auth/login', async(req, res) => userLogin(req, res));

app.use(auth);

app.get('/cart/:id', async (req, res) => userCart(req, res));


database(); 
app.listen(3001, () => console.log(`App listening on port 3001`));