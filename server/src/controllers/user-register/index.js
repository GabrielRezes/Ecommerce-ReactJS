const User = require('../../models/User');
const { createPasswordHash } = require('../../services/auth');

module.exports = async ( req, res ) => {
  const { name, email, password, confirmpassword } = req.body;

  if(!name) return res.status(422).json({msg:'Nome é obrigatório'});  
  if(!email) return res.status(422).json({msg:'Email é obrigatório'});  
  if(!password) return res.status(422).json({msg:'Senha é obrigatório'});  
  if(password !== confirmpassword) return res.status(422).json({msg:'As senhas não são iguais'});
  
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
};
