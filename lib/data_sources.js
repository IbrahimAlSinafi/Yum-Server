'use strict';
const { oneStation } = require('./oneStation');
const { file_to_json , ridersBasedOnAge, last20Trips} = require('./file_to_json');
const { stationId, stations } = require('../manifest');
const readFileSystem = require('./readFileSystem');

const data_sources = async () => {
  // Requirements:
  // 1) Return the information for one station given a station id
  const oneStationBasedOnStationId = await oneStation(stationId);
  console.log(`station based on given station id <${stationId}>: `, oneStationBasedOnStationId)


  // 2) Given one or more stations, return the number of riders in the following age groups,
  // [0-20,21-30,31-40,41-50,51+, unknown], who ended their trip at that station for a given
  // day.
  const data = await file_to_json(readFileSystem);
  const numOfRiders = ridersBasedOnAge(data);
  console.log('numOfRiders: ', numOfRiders);

  // 3) Given one or more stations, return the last 20 trips that ended at each station for a single day.
  stations.map(station => {
    const last20trips = last20Trips(data, station);
    console.log('last20trips: ', last20trips)
  })
}


module.exports = { data_sources }