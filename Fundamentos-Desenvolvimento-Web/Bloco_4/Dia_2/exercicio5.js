let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let maiorNro = 0;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNro) {
    maiorNro = numbers[i];
  }
}

console.log(`O maior numero dentro do array é: ${maiorNro}`);