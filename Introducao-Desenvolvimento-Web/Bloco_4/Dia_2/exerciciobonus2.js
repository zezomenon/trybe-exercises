let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// já inicia i = 1 pq não precisa comparar o ultimo elemento novamente, 
// ele já vai ser o maior (ou menor) dos elementos
for (let i = 1; i < numbers.length; i += 1) {
  for (let j = 0; j < i; j += 1) {
    if (numbers[i] > numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}

console.log(numbers);