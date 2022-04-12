const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const { checkPassword } = require('../../services/auth');

module.exports = async (req, res) => {
  const { email, password } = req.body;

  if(!email || !password) return res.status(422).json({msg:'Email ou Senha incorretos!'});
  
  const user = await User.findOne({email});

  if(!user) return res.status(404).json({msg: 'Usuário não encontrado'});
  
  const authorized = await checkPassword(password, user);

  if(!authorized) return res.json({msg: 'não autorizado'})

  console.log(authorized)

  const { id } = user;

  try {

    res.json({
      user: {
        id,
        email
      },
      token: jwt.sign({ id }, process.env.SECRET,{
        expiresIn: '1h'
      })  
    });
    
  } catch (err) {
    res.status(500).json({msg: 'Algo deu errado, tente novamente mais tarde!'});
  };
};