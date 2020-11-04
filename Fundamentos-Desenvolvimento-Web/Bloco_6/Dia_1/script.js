window.onload = function () {
  buttonSaveForm();
}
let fullName = document.getElementById('full-name');
console.log(fullName);
function buttonSaveForm () {
  let buttonSave = document.getElementById('save');
  buttonSave.addEventListener('click', function (event) {
    if (fullName.value === '') {
      event.preventDefault();
      alert('Campo nome está vazio');
    }
  });
}