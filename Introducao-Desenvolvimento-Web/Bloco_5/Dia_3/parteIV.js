var personName = '';

function complainMessage() {
  alert('I told you not to do that ' + personName);
}

function typeAndScream() {
  document.getElementById('audio').play();
  personName = document.getElementById('name').value;
}

function goDark() {
  var body = document.getElementsByTagName('body')[0];
  if (body.className == '') {
    body.className = 'dark';
  } else {
    body.className = '';
  }
}

function finishTheStory() {
  document.getElementById('story').innerHTML =
    'So I carefully searched the damp dungeon. There you are! I grinned a smile with all 98 of my gleaming teeth. Dinner time!';
}

let getMood = document.getElementById('mood');
getMood.addEventListener('click', goDark);

let myName = document.getElementById('name').oninput = typeAndScream;

let dont = document.getElementById('dont');
dont.addEventListener('click', complainMessage);

let tellme = document.getElementById('tell');
tellme.addEventListener('click', finishTheStory);
