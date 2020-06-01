
require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
}
    
// Authenticate User
const authenticateUser = (request) => {
  const username = request.payload.username
  const user = { name: username }

  const accessToken = generateAccessToken(user)
  console.log('accessToken: ', accessToken);
  return accessToken;
}
module.exports = { authenticateUser }