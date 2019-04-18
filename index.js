const isBalancedPair = require('./library/isBalancedPair');

console.log('(){}[]', isBalancedPair('(){}[]'));
console.log('[({})](]', isBalancedPair('[({})](]'));