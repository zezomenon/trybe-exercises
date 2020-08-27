let a = 10;
let b = 3;

let total = a % b;
console.log(total);

switch (total) {
  case 0:
    console.log("positive");
    break;
  case 1:
    console.log("negative");
    break;
  default:
    console.log("zero");
    break;
}