const plus = { symbol: '+', exec: (a, b) => a + b };
const minus = { symbol: '-', exec: (a, b) => a - b };
const multiply = { symbol: 'x', exec: (a, b) => a * b };
const division = { symbol: '÷', exec: (a, b) => parseInt(a / b, 10) };

export default { plus, minus, multiply, division };