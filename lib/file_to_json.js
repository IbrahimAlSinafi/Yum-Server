'use strict';

// convert the file into a readable arrary of JSON objects.
const file_to_json = (data, delimiter = ',') => {
  const titles = data.slice(0, data.indexOf('\n')).split(delimiter);
  return data
    .slice(data.indexOf('\n') + 1)
    .split('\n')
    .map(v => {
      const values = v.split(delimiter);
      return titles.reduce((obj, title, index) => ((obj[title] = values[index]), obj), {});
    });
};

// age group [0-20,21-30,31-40,41-50,51+, unknown],
/**
   * first is to validate currAge is in the numerical format, otherwise, it could be empty string or unknow format
   * 2020 minus given age => map that into the correct age group as follow:
   * 
   * if (2020 - currAge >= 0 && 2020 - currAge <=20) => [0-20]
   * if (2020 - currAge >= 21 && 2020 - currAge <=30) => [21-30]
   * if (2020 - currAge >= 31 && 2020 - currAge <=40) => [31-40]
   * if (2020 - currAge >= 41 && 2020 - currAge <=50) => [41-50]
   * if (2020 - currAge >= 51) => [51+]
   * if (!currAge) => [unknown]
*/
const ridersBasedOnAge = (data) => {
  const currAge = '05 - Member Details Member Birthday Year';
  const res = data.reduce((acc, ele) => {
    if (parseInt(currAge) && ('2020' - ele[currAge]) >= 0 && ('2020' - ele[currAge] <= 20)) {
      acc['0-20'] +=1;
    } else if (parseInt(currAge) && ('2020' - ele[currAge]) >= 21 && ('2020' - ele[currAge] <= 30)) {
      acc['21-30'] +=1;
    } else if (parseInt(currAge) && ('2020' - ele[currAge]) >= 31 && ('2020' - ele[currAge] <= 40)) {
      acc['31-40'] +=1;
    } else if (parseInt(currAge) && ('2020' - ele[currAge]) >= 41 && ('2020' - ele[currAge] <= 50)) {
      acc['41-50'] +=1;
    } 
    else if (parseInt(currAge) && ('2020' - ele[currAge] >= 51)) {
      acc['51+'] +=1;
    } 
    else {
      acc['unknown'] +=1;
    }
    return acc;
  }, {'0-20': 0, '21-30': 0, '31-40': 0, '41-50': 0, '51+': 0, 'unknown': 0});
  return res;
};

// compare the start and end dates of each station
// return true if they are on the same date
var compare_dates = (firstDate, secondDate) => {
  const date_1 = firstDate.split(' ')[0]; // interested with only YYYY-MM-DD
  const date_2 = secondDate.split(' ')[0]; // interested with only YYYY-MM-DD
  if (date_1 === date_2) return true;
  else return false;
}

// filter out all stations that match returnStationName for the given station(s)
// <for a single day> means start and end dates are the same for the matching stations
// <return the last 20 trips> means 
//    a. sort the date by descending order
//    b. return only 20
const last20Trips = (data, station) => {
  const returnStationName = '02 - Rental End Station Name';
  const startDate = '01 - Rental Details Local Start Time';
  const endDate = '01 - Rental Details Local End Time';
  const trips = data.filter(ele => {
    if (ele[returnStationName] === station[returnStationName] && compare_dates(ele[startDate],ele[endDate])) {
      return ele;
    }
  }).sort((a, b) => new Date(b[endDate]) - new Date(a[endDate])) // descending order
    .slice(0, 20) // only last 20 trips

  return trips
}

module.exports = { file_to_json, ridersBasedOnAge, last20Trips }