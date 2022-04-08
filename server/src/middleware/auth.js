const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const [, token] = authHeader && authHeader.split(' ');

  if(!token) return res.status(401).json({msg: 'Token inválido'});
  
  try {
    const secret = process.env.SECRET;

    jwt.verify(token, secret);
    
    next();

  } catch (err) {
    console.log(err);
    res.status(400).json({msg: 'Token inválido'}); 
  }
};

