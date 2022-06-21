const analyzeArray = require('./analyzeArray');

test('works', () => {
    let obj = {average: 2, min: 1, max: 3, length: 3};
    expect(analyzeArray([1,2,3])).toStrictEqual(obj);
})

test('works with only one number', () => {
    let obj = {average: 2, min: 2, max: 2, length: 1};
    expect(analyzeArray([2])).toStrictEqual(obj);
})

test('works with negatives', () => {
    let obj = {average: 0.5, min: -8, max: 15, length: 6};
    expect(analyzeArray([-8,-7,15,-3,4,2])).toStrictEqual(obj);
})