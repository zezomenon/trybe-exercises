let n = 5;
let asterisco = '';

let meioTriang = (n + 1) / 2;
let esquerda = meioTriang;
let direita = meioTriang;

for (let i = 0; i <= meioTriang; i += 1) {
  for (let j = 1; j <= n; j += 1) {
    if (j > direita && j < esquerda) {
      asterisco += "*";
    } else {
      asterisco += " ";
    }
  }
  console.log(asterisco);
  asterisco = " ";
  direita -= 1;
  esquerda += 1;
}
