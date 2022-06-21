const calculator = require ('./calculator');
const calc = calculator();

test('adds negatives', ()=> {
    expect(calc.add(-5, -2)).toBe(-7);
})

test('adds decimals', () => {
    expect(calc.add(0.8, 1.2)).toBe(0.8+1.2);
})

test('subtracts negatives', () => {
    expect(calc.subtract(-3, -1)).toBe(-2);
})

test('subtracts decimals', () => {
    expect(calc.subtract(1.5, 0.8)).toBe(1.5-0.8);
})

test('multiplies negatives', () => {
    expect(calc.multiply(9, -3)).toBe(-27);
})

test('multiplies decimals', () => {
    expect(calc.multiply(0.5, 2)).toBe(1);
})

test('divides negatives', () => {
    expect(calc.divide(-8, -2)).toBe(4);
})

test('divides decimals', () => {
    expect(calc.divide(2, 0.5)).toBe(4);
})

