    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten() {
  // Dada uma matriz de matrizes, transforme em uma única matriz.
  return arrays.reduce((previousValue, currentValue) => [...previousValue, ...currentValue], []);
}
// peguei a referência para usar spreads, lá no slack. Explicação do Murilo Wolf na dúvida do Moisés.
// source: spreads -> https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator
console.log(flatten());
assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);