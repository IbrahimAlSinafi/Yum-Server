'use strict';
const { retrieveOneStation } = require('./helper/retrieveOneStation');
const { file_to_json , ridersBasedOnAge, last20Trips} = require('./helper/file_to_json');
const { stationId, stations } = require('../manifest');
const readFileSystem = require('./helper/readFileSystem');

const data_sources = async (request) => {
  // Requirements:
  // 1) Return the information for one station given a station id
  const returnRes = await retrieveOneStation(request, stationId);
  console.log(`1st requirement => Return the information for one station given a station id. i.e <${stationId}>: `, returnRes);
  return returnRes;
  //******************************************************************** */

  // // 2) Given one or more stations, return the number of riders in the following age groups,
  // // [0-20,21-30,31-40,41-50,51+, unknown], who ended their trip at that station for a given
  // // day.
  // const data = await file_to_json(readFileSystem);
  // const numOfRiders = ridersBasedOnAge(data);
  // console.log(`2nd requirment => Given one or more stations, return the number of riders in the following age groups,
  // [0-20,21-30,31-40,41-50,51+, unknown], who ended their trip at that station for a given day: `, numOfRiders);
  // //******************************************************************** */


  // // 3) Given one or more stations, return the last 20 trips that ended at each station for a single day.
  // console.log(`3rd requirment => Given one or more stations, return the last 20 trips that ended at each station
  //   for a single day`);
  // stations.map(station => {
  //   const last20trips = last20Trips(data, station);
  //   console.log(`last20trips based on 02 - Rental End Station Name <${station['02 - Rental End Station Name']}>: `, last20trips)
  // })
}


module.exports = { data_sources }