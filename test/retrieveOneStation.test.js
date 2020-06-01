/* eslint-disable no-undef */

jest.mock('node-fetch', ()=>jest.fn())
const fetch = require('node-fetch');

const { oneStationResponse } = require('../fixtures/oneStationResponse');
const { oneStation } = require('../lib/helper/oneStation');
const { stationId } = require('../manifest');
    
describe('mocking node-fetch call', () => {
  const authenticationRes = {
    authorized: true,
    code: 200,
    response: [
      {
        rental_uris: [Object],
        has_kiosk: true,
        station_type: 'classic',
        eightd_has_key_dispenser: false,
        lon: -87.62054800987242,
        electric_bike_surcharge_waiver: false,
        station_id: '2',
        external_id: 'a3a36d9e-a135-11e9-9cda-0a87ae2ba916',
        capacity: 39,
        name: 'Buckingham Fountain',
        rental_methods: [Array],
        short_name: '15541',
        eightd_station_services: [],
        lat: 41.87651122881695
      }
    ]
  }

  it('mocking retrieveOneStation https call with correct authentication', async () => {
    fetch.mockResolvedValueOnce({json: () => oneStationResponse});
    const res = await oneStation(stationId, authenticationRes);
    expect(res).toEqual(oneStationResponse.data);
  });

  const authenticationRes2 = {
    authorized: false,
    code: 403,
    response: 'forbidden'
  }

  it('mocking retrieveOneStation https call with forbidden authentication', async () => {
    fetch.mockResolvedValueOnce({json: () => oneStationResponse});
    const res = await oneStation(stationId, authenticationRes2);
    expect(res).toEqual({
      'authorized': false,
      'code': 403,
      'response': 'forbidden',
    });
  });

  const authenticationRes3 = {
    authorized: false,
    code: 401,
    response: 'unauthorized'
  }

  it('mocking retrieveOneStation https call with unauthorized authentication <using token for a differnt user not listed in manifest>', async () => {
    fetch.mockResolvedValueOnce({json: () => oneStationResponse});
    const res = await oneStation(stationId, authenticationRes3);
    expect(res).toEqual({
      'authorized': false,
      'code': 401,
      'response': 'unauthorized',
    });
  });
});
