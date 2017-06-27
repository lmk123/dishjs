const { percentage } = require('../dist/nosh.common')

describe('percentage 函数', function () {
  it('能正常运行', function () {
    expect(percentage('not a number')).toBe('')
    expect(percentage('1')).toBe('100.00%')
    expect(percentage(-0.1)).toBe('-10.00%')
    expect(percentage(0.01, 4)).toBe('1.0000%')
  })
})
