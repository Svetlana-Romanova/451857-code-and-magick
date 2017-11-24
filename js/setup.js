'use strict';

var namesAll = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnamesAll = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColorsAll = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColorsAll = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderElement = function (arr) {
  var renderNumber = Math.floor(Math.random() * (arr.length - 1) + 1);
  return renderNumber;
};

var wizards = [
  {
    name: namesAll[renderElement(namesAll)],
    surname: namesAll[renderElement(surnamesAll)],
    coatColor: coatColorsAll[renderElement(coatColorsAll)],
    eyesColor: eyesColorsAll[renderElement(eyesColorsAll)],
  },
  {
    name: namesAll[renderElement(namesAll)],
    surname: namesAll[renderElement(surnamesAll)],
    coatColor: coatColorsAll[renderElement(coatColorsAll)],
    eyesColor: eyesColorsAll[renderElement(eyesColorsAll)],
  },
  {
    name: namesAll[renderElement(namesAll)],
    surname: namesAll[renderElement(surnamesAll)],
    coatColor: coatColorsAll[renderElement(coatColorsAll)],
    eyesColor: eyesColorsAll[renderElement(eyesColorsAll)],
  },
  {
    name: namesAll[renderElement(namesAll)],
    surname: namesAll[renderElement(surnamesAll)],
    coatColor: coatColorsAll[renderElement(coatColorsAll)],
    eyesColor: eyesColorsAll[renderElement(eyesColorsAll)],
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};

var createFragment = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < 4; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
};

createFragment();
document.querySelector('.setup-similar').classList.remove('hidden');

