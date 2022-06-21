const capitalyze = require('./capitalyze');

test('capitalizes first', () => {
    expect(capitalyze('asde')).toBe('Asde');
  })

test ('not capitalize on already capital', () => {
    expect(capitalyze('Asde')).toBe('Asde');
})

test ('return empty on empty', () => {
    expect(capitalyze('')).toBe('');
})