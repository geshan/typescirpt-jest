import { myCoveredFunction } from '../../../src/services/newExchanges'

describe('newExchange', () => {
  it('cover', async () => {
    expect(myCoveredFunction(3, 5)).toStrictEqual(8)
  })
})
