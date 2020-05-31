// require('dotenv').config({ path: `${__dirname}/.env` });
// const Confidence = require('confidence');

const properties = {
  serviceName: 'Yum-Server',
  stationUrl: 'https://gbfs.divvybikes.com/gbfs/en/station_information.json',
  stationId: '2',
  stations: [{
    '01 - Rental Details Rental ID': '22178576',
    '01 - Rental Details Local Start Time': '2019-04-01 05:01:08',
    '01 - Rental Details Local End Time': '2019-04-01 05:37:48',
    '01 - Rental Details Bike ID': '4862',
    '01 - Rental Details Duration In Seconds Uncapped': '"2',
    '03 - Rental Start Station ID': '200.0"',
    '03 - Rental Start Station Name': '506',
    '02 - Rental End Station ID': 'Spaulding Ave & Armitage Ave',
    '02 - Rental End Station Name': '283',
    'User Type': 'LaSalle St & Jackson Blvd',
    'Member Gender': 'Subscriber',
    '05 - Member Details Member Birthday Year': 'Male'
  },
  {
    '01 - Rental Details Rental ID': '22178577',
    '01 - Rental Details Local Start Time': '2019-04-01 05:01:16',
    '01 - Rental Details Local End Time': '2019-04-01 05:06:02',
    '01 - Rental Details Bike ID': '4047',
    '01 - Rental Details Duration In Seconds Uncapped': '286.0',
    '03 - Rental Start Station ID': '175',
    '03 - Rental Start Station Name': 'Wells St & Polk St',
    '02 - Rental End Station ID': '41',
    '02 - Rental End Station Name': 'Federal St & Polk St',
    'User Type': 'Subscriber',
    'Member Gender': 'Male',
    '05 - Member Details Member Birthday Year': '1981'
  }]
};

// const store = new Confidence.Store(properties);
// const manifest = store.get('/', { env: process.env.NODE_ENV });

module.exports = properties;
