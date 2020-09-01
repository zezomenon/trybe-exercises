let n = 6;
let asterisco = '';
let pos = n;

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < n; j += 1) {
    if (j < pos) {
      asterisco += " ";
    } else {
      asterisco += "*"
    }
  }
  console.log(asterisco);
  asterisco = " ";
  pos -= 1;
}

