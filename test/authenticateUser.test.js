/* eslint-disable no-undef */

const  { generateAccessToken, authenticateUser } = require('../lib/JWT/authenticateUser')

describe('validate user authentication', () => {
  const request = { payload: { username: 'Ibrahim' } }
  it('validate user', () => {
    const res = authenticateUser(request)
    expect(res).not.toBeUndefined();
  })

  it('validate generate access token', () => {
    const username = request.payload.username
    const user = { name: username }
    const res = generateAccessToken(user);
    expect(res).not.toBeUndefined();
  })
})
