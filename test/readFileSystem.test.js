/* eslint-disable no-undef */
const readFileSystem = require('../lib/helper/readFileSystem');

describe('read from file system', () => {
  it('readFileSync', async () => {
    const file = readFileSystem;
    expect(file).toContain('01 - Rental Details Rental ID,01 - Rental Details Local Start Time,01 - Rental Details Local End Time,01 - Rental Details Bike ID,01 - Rental Details Duration In Seconds Uncapped,03 - Rental Start Station ID,03 - Rental Start Station Name,02 - Rental End Station ID,02 - Rental End Station Name,User Type,Member Gender,05 - Member Details Member Birthday Year')
  })
});