const User = require('../../models/User');
const bcrypt = require('bcrypt');

module.exports = async ( req, res ) => {
  const { name, email, password, confirmpassword } = req.body;

  if(!name) return res.status(422).json({msg:'Nome é obrigatório'});  
  if(!email) return res.status(422).json({msg:'Email é obrigatório'});  
  if(!password) return res.status(422).json({msg:'Senha é obrigatório'});  
  if(password !== confirmpassword) return res.status(422).json({msg:'As senhas não são iguais'});
  
  const userExists = await User.findOne({email: email});

  if(userExists) return res.status(422).json({msg: 'Por favor, utilize outro email'});
  
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  const user = new User({
    name,
    email,
    password: passwordHash
  });

  try {
    await user.save();
    res.status(201).json({msg: 'Usuário criado com sucesso'});
  } catch(err) {
    console.log(err);
  };
};
