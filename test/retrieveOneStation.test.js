/* eslint-disable no-undef */

jest.mock('node-fetch', ()=>jest.fn())
const fetch = require('node-fetch');

const { oneStationResponse } = require('../fixtures/oneStationResponse');
const { retrieveOneStation } = require('../lib/helper/retrieveOneStation');
const { stationId } = require('../manifest');
    
describe('mocking node-fetch call', () => {
  const request1 = {
    'headers': {
      'authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSWJyYWhpbSIsImlhdCI6MTU5MDk4MzYyNH0.3pAmcBJq87LyuRzTUDhcaVjtU6v6ZHnWnA_kUnJQU7k',
    }
  }
  it('mocking retrieveOneStation https call with correct authentication', async () => {
    fetch.mockResolvedValueOnce({json: () => oneStationResponse});
    const res = await retrieveOneStation(request1, stationId);
    expect(res).toEqual(oneStationResponse.data);
  });

  const request2 = {
    'headers': {
      'authorization': 'Bearer ' + 'fake JWT',
    }
  }

  it('mocking retrieveOneStation https call with forbidden authentication', async () => {
    fetch.mockResolvedValueOnce({json: () => oneStationResponse});
    const res = await retrieveOneStation(request2, stationId);
    expect(res).toEqual({
      'authorized': false,
      'code': 403,
      'stations': 'forbidden',
    });
  });

  const request3 = {
    'headers': {
      'authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpIiwiaWF0IjoxNTkwOTg2NTQyfQ.fWC4wblT3sy5Z3O6QOVXQ0Ugsh_Vdox20EW7sMvY3us'
    }
  }

  it('mocking retrieveOneStation https call with unauthorized authentication <using token for a differnt user not listed in manifest>', async () => {
    fetch.mockResolvedValueOnce({json: () => oneStationResponse});
    const res = await retrieveOneStation(request3, stationId);
    expect(res).toEqual({
      'authorized': false,
      'code': 401,
      'stations': 'unauthorized',
    });
  });
});