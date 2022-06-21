const ceasarCipher = require ('./ceasarCipher');

test('works', () => {
    expect(ceasarCipher('abcd')).toBe('bcde');
})

test('works with z', () => {
    expect(ceasarCipher('xyzab')).toBe('yzabc');
})

test('works with mixed cases', () => {
    expect(ceasarCipher('XaRssdETf')).toBe('YbStteFUg');
});

test('works with extra symbols', () => {
    expect(ceasarCipher('erf.WER/efdD!')).toBe('fsg.XFS/fgeE!');
});