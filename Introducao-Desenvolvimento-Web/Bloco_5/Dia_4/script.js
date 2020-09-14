let bgBody = document.querySelector('.container');
let bgColor = document.getElementById('chooseBgColor');

bgBody.style.backgroundColor = bgColor.value;
bgColor.addEventListener('input', function (event) {
  bgBody.style.backgroundColor = event.target.value;
});

let colorText = document.getElementById('chooseTextColor');

bgBody.style.color = colorText.value;
colorText.addEventListener('input', function (event) {
  bgBody.style.color = event.target.value;
});

let article = document.querySelector('.article');
let fontSize = document.getElementById('chooseFontSize');

article.style.fontSize = fontSize.value;
fontSize.addEventListener('input', function (event) {
  article.style.fontSize = `${event.target.value}px`;
});
