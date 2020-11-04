let numbers = [];

for (let i = 1; i <= 25; i += 1) {
  numbers.push(i);
}

for (let i = 0; i < numbers.length; i += 1) {
  console.log(`O número ${numbers[i]} divido por 2 é: ${numbers[i]/2}`);
}
