const User = require('../../models/User');
const { sign } = require('jsonwebtoken');
const { checkPassword } = require('../../services/auth');
const { createPasswordHash } = require('../../services/auth');

const UserController = {

  async registerUser (req, res) {

    console.log(req .body)
    const { name, email, password } = req.body;

    if(!name) return res.status(422).json({msg:'Nome é obrigatório'});  
    if(!email) return res.status(422).json({msg:'Email é obrigatório'});  
    if(!password) return res.status(422).json({msg:'Senha é obrigatório'});  
    
    const userExists = await User.findOne({email: email});
  
    if(userExists) return res.status(422).json({msg: 'Por favor, utilize outro email'});
    
    const passwordBcrypt = await createPasswordHash(password)
  
    const user = new User({
      name,
      email,
      password: passwordBcrypt
    });
  
    try {
      await user.save();
      res.status(201).json({msg: 'Usuário criado com sucesso'});
    } catch(err) {
      console.log(err);
    };
  },

  async login (req, res) {
    const { email, password } = req.body;

    console.log(req.body)

    if(!email || !password) return res.status(422).send('Email ou Senha incorretos!');

    const user = await User.findOne({email});

    if(!user) return res.status(404).send('Usuário não encontrado');

    const authorized = await checkPassword(password, user);

    if(!authorized) return res.send('Não autorizado')

    console.log('authorized', authorized)

    const { id } = user;

    console.log('secret',process.env.SECRET)
    const token = sign({}, process.env.SECRET, {
      subject: id,
      expiresIn: '7h'
    });

    try {

    res.json({
      user: {
        id,
        email
      },
      token
    }).status(200);

    } catch (err) {
    res.status(500).json({msg: 'Algo deu errado, tente novamente mais tarde!'});
    };
  },

  async getCart (req, res) {
    const id = req.params.id;

    const user = await User.findById(id, '-password');
  
    if(!user) return res.status(404).json({msg: 'Usuário não encontrado'});
  
    res.status(200).json({user});  
  }


};

module.exports = UserController;