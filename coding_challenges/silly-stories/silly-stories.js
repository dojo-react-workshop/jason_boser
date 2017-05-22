var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
randomize.addEventListener('click', result);
var story = document.querySelector('.story');

var baseText = "It was 94 farenheit outside, so :insertx: went for a walk. " +
  "When they got to :inserty:, they stared in horror for a few moments, then :insertz:. " +
  "Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, " +
  "and it was a hot day.";

const defaultNames = [
  'Willy the Goblin',
  'Big Daddy',
  'Father Christmas'
];
const defaultLocations = [
  'the soup kitchen',
  'Disneyland',
  'the White House'
];
const defaultActions = [
  'spontaneously combusted',
  'melted into a puddle on the sidewalk',
  'turned into a slug and crawled away'
];

function randomValueFromArray(array){
  return array[Math.floor(Math.random()*array.length)];
}

function result() {
  
  if(customName.value != '') {
    var name = customName.value;
  }else{
    var name = randomValueFromArray(defaultNames);
  }

  if(document.getElementById("uk").checked) {
    var weight = Math.round(300);
    var temperature =  Math.round(94);
  }

  var updatedText = baseText.replace(":insertx:",name);
  updatedText = updatedText.replace(":inserty:",randomValueFromArray(defaultLocations));
  updatedText = updatedText.replace(":insertz:",randomValueFromArray(defaultActions));

  story.textContent = updatedText;
  story.style.visibility = 'visible';
}