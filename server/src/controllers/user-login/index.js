const User = require('../../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) return res.status(422).json({msg:'Email ou Senha incorretos!'});
  
  const user = await User.findOne({email});

  if(!user) return res.status(404).json({msg: 'Usuário não encontrado'});
  
  const checkPassword = await bcrypt.compare(password, user.password);
  
  if(!checkPassword) return res.status(422).json({msg: 'Senha inválida'});

  try {
    const secret = process.env.SECRET;

    console.log(secret)
    const token = jwt.sign({ id: user._id }, secret);
    
    res.status(200).json({msg: `Autenticação de ${email} foi realizada com sucesso`, token});
    
  } catch (err) {
    console.log(err)
    res.status(500).json({msg: 'Algo deu errado, tente novamente mais tarde!'});
  };
};