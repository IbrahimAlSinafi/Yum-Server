'use strict';
const { authenticateToken } = require('../lib/JWT/authenticateToken');
const { oneStation } = require('./helper/oneStation');
const { file_to_json , ridersBasedOnAge, last20Trips} = require('./helper/file_to_json');
const { stationId, stations } = require('../manifest');
const readFileSystem = require('./helper/readFileSystem');

const getOneStation = async (request) => {
  // Requirements:
  // 1) Return the information for one station given a station id
  const  authenticationRes = authenticateToken(request);
  const returnRes = await oneStation(stationId, authenticationRes);
  console.log(`1st requirement => Return the information for one station given a station id. i.e <${stationId}>: `, returnRes);
  return returnRes;
}

const getRidersBasedOnAge = async (request) => {
  // Requirements:
  // 2) Given one or more stations, return the number of riders in the following age groups,
  // [0-20,21-30,31-40,41-50,51+, unknown], who ended their trip at that station for a given
  // day.
  const  authenticationRes = authenticateToken(request);
  if (authenticationRes.authorized) {
    const data = await file_to_json(readFileSystem);
    const numOfRiders = ridersBasedOnAge(data);
    authenticationRes.response = numOfRiders;
    authenticationRes.code = 200;
    console.log(`2nd requirment => Given one or more stations, return the number of riders in the following age groups,
    [0-20,21-30,31-40,41-50,51+, unknown], who ended their trip at that station for a given day: `, numOfRiders);
    return authenticationRes
  }
  return authenticationRes;
}

const getLast20Trips = async (request) => {
  // Requirements:
  // 3) Given one or more stations, return the last 20 trips that ended at each station for a single day.
  console.log(`3rd requirment => Given one or more stations, return the last 20 trips that ended at each station for a single day`);
  const  authenticationRes = authenticateToken(request);
  if (authenticationRes.authorized) {  
    const data = await file_to_json(readFileSystem);
    const recentTrips = stations.map(station => {
      const last20trips = last20Trips(data, station);
      console.log(`last20trips based on 02 - Rental End Station Name <${station['02 - Rental End Station Name']}>: `, last20trips)
      return {'02 - Rental End Station Name': last20trips};
    })
    authenticationRes.response = recentTrips;
    authenticationRes.code = 200;
  }
  return authenticationRes;
}

module.exports = { getOneStation, getRidersBasedOnAge, getLast20Trips }