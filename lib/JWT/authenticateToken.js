const jwt = require('jsonwebtoken')
require('dotenv').config()
const { authorisedUsers } = require('../../manifest');

function authenticateToken(request) {
  const returnRes = {
    'authorized': false,
    'code': 401,
    'response': 'unauthorized',
  }
  
  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      returnRes.response = 'forbidden';
      returnRes.code = 403;
    }
    else {
      returnRes.authorized = authorisedUsers.some(ele => ele.username === user.name)
    }
  })
  return returnRes;
}

module.exports = { authenticateToken }