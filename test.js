const isBalancedPair = require('./library/isBalancedPair');

const Mult = require('./library/isBalancedPair');
test('isBalancePair function exists', () => {
    expect(isBalancedPair).toBeDefined();
  });

test('isBalancePair function handles back to back brackets', () => {
    expect(isBalancedPair('([{}])')).toEqual(true);
});

test('isBalancePair function handles nested brackets', () => {
    expect(isBalancedPair('({})[({})]')).toEqual(true);
});

test('isBalancePair function handles unbalanced brackets', () => {
    expect(isBalancedPair('(((({{')).toEqual(false);
    expect(isBalancedPair('}}]]))}])')).toEqual(false);
    expect(isBalancedPair(')(}{][')).toEqual(false);
    expect(isBalancedPair('())({}}{()][][')).toEqual(false);
});   