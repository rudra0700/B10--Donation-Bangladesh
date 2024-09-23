// common function

function getInputValue(id) {
  return Number(document.getElementById(id).value);
}

function getInnerTextValue(id) {
  return Number(document.getElementById(id).innerText);
}

function getTheId(id) {
  return document.getElementById(id);
}

function removeClass(element, classes) {
  element.classList.remove(classes);
}

function addClass(element, classes) {
  element.classList.add(classes);
}

function removeColors(element, ...colors) {
  element.classList.remove(...colors);
}

function addColors(element, ...colors) {
  element.classList.add(...colors);
}

function createElement(element) {
  return document.createElement(element);
}

function updateInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function updateInputValue(id, value) {
  document.getElementById(id).value = value;
}

function showAlert(alertMessage) {
  alert(alertMessage);
}

function updateBalance(availableBalance, inputFieldValue) {
  return availableBalance - inputFieldValue;
}
