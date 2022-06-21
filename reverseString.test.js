const reverseString = require('./reverseString');

test('reverse string', () => {
    expect(reverseString('asd')).toBe('dsa');
})

test('works with epmty spaces', () => {
    expect(reverseString('12  300')).toBe('003  21');
})

test('mantains case', () => {
    expect(reverseString('AaBb')).toBe('bBaA');
})