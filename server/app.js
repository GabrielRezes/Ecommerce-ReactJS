// imports
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

// Config JSON response
app.use(express.json());


// ------------------------------

// Models
const User = require('./models/User');

// ------------------------------


//ROUTES:
// Public Route
app.get('/', (req, res) => {
  res.status(200).json({msg: "Bem vindo"});
});

// Private Route
app.get('/user/:id', checkToken, async (req, res) => {
  const id = req.params.id;

  // check user exists
  const user = await User.findById(id, '-password');

  if(!user) return res.status(404).json({msg: 'Usuário não encontrado'});

  res.status(200).json({user});
})

// Middleware validation tokens
function checkToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]

  if(!token) return res.status(401).json({msg: 'Acesso negado'});

  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);

    next();

  } catch (err) {
    console.log(err);
    res.status(400).json({msg: 'Token inválido'}); 
  }
};


// Register User
app.post('/auth/register', async(req, res) => {

  const { name, email, password, confirmpassword } = req.body;

  // validations
  if(!name) return res.status(422).json({msg:'Nome é obrigatório'});  
  if(!email) return res.status(422).json({msg:'Email é obrigatório'});  
  if(!password) return res.status(422).json({msg:'Senha é obrigatório'});  
  if(password !== confirmpassword) return res.status(422).json({msg:'As senhas não são iguais'});
  
  // check if user exists
  const userExists = await User.findOne({email: email})

  if(userExists) return res.status(422).json({msg: 'Por favor, utilize outro email'});
  
  // create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  // create user
  const user = new User({
    name,
    email,
    password: passwordHash
  });

  try {
    await user.save();
    res.status(201).json({msg: 'Usuário criado com sucesso'});
  } catch(err) {
    console.log('error');
  }

});

// Login user
app.post('/auth/login', async(req, res) => {
  const { email, password } = req.body;
  

  // validations
  if(!email) return res.status(422).json({msg:'Email é obrigatório'});
  if(!password) return res.status(422).json({msg:'Senha é obrigatório'});  
  
  // check if user userExists
  const user = await User.findOne({email: email});

  if(!user) return res.status(404).json({msg: 'Usuário não encontrado'});
  
  // check if password match
  const checkPassword = await bcrypt.compare(password, user.password);
  
  if(!checkPassword) return res.status(422).json({msg: 'Senha inválida'})

  try {
    const secret = process.env.SECRET;
    const token = jwt.sign({ id: user._id }, secret);
    
    res.status(200).json({msg: 'Autenticação realizada com sucesso', token});
    
  } catch (err) {
    console.log(err)
    res.status(500).json({msg: 'Algo deu errado, tente novamente mais tarde!'});
  }
});



// ------------------------------

// Credencials
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbAddress = process.env.DB_ADDRESS;

mongoose.connect(dbAddress)
  .then(() => {
    app.listen(3001);
    console.log('DB connected');    
  })
  .catch((err) => console.log(err));
