const express = require('express');
const database = require('./src/database');
const auth = require('./src/middleware/auth');
const cors = require('cors');

const ProductController = require('./src/controllers/ProductController');
const UserController = require('./src/controllers/UserController');


const app = express();

app.use(express.json());
app.use(cors());

app.post('/auth/register', UserController.registerUser);
app.post('/auth/login', UserController.login);
app.get('/products', ProductController.getProducts);
app.post('/product/create', ProductController.createProduct);

// app.use(auth);

app.get('/cart/:id', UserController.getCart);

database(); 
app.listen(3001, () => console.log(`App listening on port 3001`));