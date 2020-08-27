let a = 11;

let total = a % 2;
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