'use strict';
const fetch = require('node-fetch');
const _ = require('lodash');
const { stationUrl } = require('../../manifest');

const oneStation = async (stationId, authenticationRes) => {
  let res;
  let output;
  let returnRes = Object.assign({}, authenticationRes);
  try{
    if (returnRes.authorized){
      const options = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      }

      res = await fetch(stationUrl, options);
      output = await res.json();
      if (_.get(output, "data.stations")) {
        returnRes.response =  output.data.stations.filter(ele => ele.station_id === stationId)
        returnRes.code = 200;
      }
    }
  } catch (error) {
    throw Error(error); 
  }
  return returnRes;
}


module.exports = { oneStation }