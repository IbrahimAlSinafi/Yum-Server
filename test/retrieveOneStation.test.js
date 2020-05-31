/* eslint-disable no-undef */

jest.mock('node-fetch', ()=>jest.fn())
const fetch = require('node-fetch');

const { oneStationResponse } = require('../fixtures/oneStationResponse');
const { retrieveOneStation } = require('../lib/helper/retrieveOneStation');
const { stationId } = require('../manifest');
    
describe('mocking node-fetch call', () => {
  it('mocking retrieveOneStation https call', async () => {
    fetch.mockResolvedValueOnce({json: () => oneStationResponse});
    const res = await retrieveOneStation(stationId);
    expect(res).toEqual(oneStationResponse.data.stations);
  });
});