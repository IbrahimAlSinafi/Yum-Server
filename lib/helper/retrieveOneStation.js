'use strict';
const fetch = require('node-fetch');
const _ = require('lodash');
const jwt = require('jsonwebtoken')
require('dotenv').config()
const { stationUrl, authorisedUsers } = require('../../manifest');

function authenticateToken(request) {
  const returnRes = {
    'authorized': false,
    'code': 401,
    'stations': 'unauthorized',
  }

  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) {
      returnRes.stations = 'forbidden';
      returnRes.code = 403;
    }
    else {
      returnRes.authorized = authorisedUsers.some(ele => ele.username === user.name)
    }
  })
  return returnRes;
}

const retrieveOneStation = async (request, stationId) => {
  let res;
  let output;
  let  returnRes = authenticateToken(request);
  try{
    if (returnRes.authorized){
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }

      res = await fetch(stationUrl, options);
      output = await res.json();
      if (_.get(output, "data.stations")) {
        returnRes.stations =  output.data.stations.filter(ele => ele.station_id === stationId)
        returnRes.code = 200;
      }
    }
  } catch (error) {
    throw Error(error); 
  }
  return returnRes;
}


module.exports = { retrieveOneStation, authenticateToken }