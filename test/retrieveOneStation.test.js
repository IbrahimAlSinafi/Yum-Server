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
    response: ''
  }

  it('mocking retrieveOneStation https call with correct authentication', async () => {
    fetch.mockResolvedValueOnce({json: () => oneStationResponse});
    const res = await oneStation(stationId, authenticationRes);
    expect(res.response).toEqual(oneStationResponse.data.stations);
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
