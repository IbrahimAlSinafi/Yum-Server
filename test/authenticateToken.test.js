/* eslint-disable no-undef */

const { authenticateToken } = require('../lib/JWT/authenticateToken');

describe('validate athentication token', () => {
const request = {
    headers:  {
        authorization: 'Bearer ' +
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiSWJyYWhpbSIsImlhdCI6MTU5MTA0MTIyOH0.Netmd-GCvIJVkcM6UjfT_GBUQwPBuIwvqMZdZCc-OQY'
    }
}
    it('validate token successfully', () => {
        const res = authenticateToken(request);
        expect(res).toEqual({
            'authorized': true,
            'code': 401, // default response
            'response': 'unauthorized', // default response
          });
    })

    const request2 = {
        headers:  {
            authorization: 'Bearer ' +
                'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWxpIiwiaWF0IjoxNTkxMTA5NTY4fQ.aeWkAWJLwEisgEVJ-y4v4WYpZLCLmP2E00VJk5cUDlw'
        }
    }

    it('validate token invalide <unauthorized>', () => {
        const res = authenticateToken(request2);
        expect(res).toEqual({
            'authorized': false,
            'code': 401,
            'response': 'unauthorized',
          });
    })

    const request3 = {
        headers:  {
            authorization: 'Bearer ' +
                'fake token'
        }
    }

    it('validate token invalide <forbidden>', () => {
        const res = authenticateToken(request3);
        expect(res).toEqual({
            'authorized': false,
            'code': 403,
            'response': 'forbidden',
          });
    })
})