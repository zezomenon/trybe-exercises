let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaElementos = 0;
let mediaAritmetica = 0;
let qtdeElementos = 0;
for (let i = 0; i < numbers.length; i += 1) {
  somaElementos += numbers[i];
  qtdeElementos = numbers.length;
}

mediaAritmetica = somaElementos / qtdeElementos;
console.log(mediaAritmetica);