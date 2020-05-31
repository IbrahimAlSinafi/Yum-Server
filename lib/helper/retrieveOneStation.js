'use strict';
const fetch = require('node-fetch');
const _ = require('lodash');
const { stationUrl } = require('../../manifest');

const retrieveOneStation = async (stationId) => {
  let response;
  let output;
  let oneStationBasedOnStationId;
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }
  try {
    response = await fetch(stationUrl, options);
    output = await response.json();
    if (_.get(output, "data.stations")) {
      oneStationBasedOnStationId =  output.data.stations.filter(ele => ele.station_id === stationId)
    }
  } catch (error) {
    throw Error(error);                
  }
  return oneStationBasedOnStationId;
}


module.exports = { retrieveOneStation }