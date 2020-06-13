/* eslint-disable no-undef */

const { file_to_json, ridersBasedOnAge, last20Trips, compare_dates } = require('../lib/helper/file_to_json')
const { ridersData } = require('../fixtures/ridersData');
const { file } = require('../fixtures/file.js');

const { stations } = require('../manifest');

describe('file_to_json functions test', () => {
  it('compare dates <same date>', () => {
    const date1 = '2019-04-01'
    const date2 = '2019-04-01'
    const bool = compare_dates(date1, date2);
    expect(bool).toEqual(true);
  });
  it('compare dates <different date>', () => {
    const date1 = '2019-04-01'
    const date2 = '2019-04-03'
    const bool = compare_dates(date1, date2);
    expect(bool).toEqual(false);
  });
  it('return riders based on age group', () => {
    const riders = ridersBasedOnAge(ridersData);
    expect(riders).toEqual({
      '0-20': 1,
      '21-30': 17,
      '31-40': 14,
      '41-50': 4,
      '51+': 13,
      unknown: 16
    });
  })
  it('return last 20 trips for each given stations', () => {
    const trips = last20Trips(ridersData, stations[0]);
    // i.e based on our ridersData, we only have one machting
    expect(trips).toEqual([
      {
        '01 - Rental Details Rental ID': '22178576',
        '01 - Rental Details Local Start Time': '2019-04-03 05:01:08',
        '01 - Rental Details Local End Time': '2019-04-03 05:37:48',
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
        '01 - Rental Details Rental ID': '22178576',
        '01 - Rental Details Local Start Time': '2019-04-02 05:01:08',
        '01 - Rental Details Local End Time': '2019-04-02 05:37:48',
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
      }
    ])
  })
  it('convert file system into array of JSON objects', () => {
      
    const arr = file_to_json(file);
    expect(arr).toEqual([
      {
        '01 - Rental Details Rental ID': '22178529',
        '01 - Rental Details Local Start Time': '2019-04-01 00:02:22',
        '01 - Rental Details Local End Time': '2019-04-01 00:09:48',
        '01 - Rental Details Bike ID': '6251',
        '01 - Rental Details Duration In Seconds Uncapped': '446.0',
        '03 - Rental Start Station ID': '81',
        '03 - Rental Start Station Name': 'Daley Center Plaza',
        '02 - Rental End Station ID': '56',
        '02 - Rental End Station Name': 'Desplaines St & Kinzie St',
        'User Type': 'Subscriber',
        'Member Gender': 'Male',
        '05 - Member Details Member Birthday Year': '1975'
      },
      {
        '01 - Rental Details Rental ID': '22178530',
        '01 - Rental Details Local Start Time': '2019-04-01 00:03:02',
        '01 - Rental Details Local End Time': '2019-04-01 00:20:30',
        '01 - Rental Details Bike ID': '6226',
        '01 - Rental Details Duration In Seconds Uncapped': '"1',
        '03 - Rental Start Station ID': '048.0"',
        '03 - Rental Start Station Name': '317',
        '02 - Rental End Station ID': 'Wood St & Taylor St',
        '02 - Rental End Station Name': '59',
        'User Type': 'Wabash Ave & Roosevelt Rd',
        'Member Gender': 'Subscriber',
        '05 - Member Details Member Birthday Year': 'Female'
      }
    ])
  })
})

  