"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: steve culmer
      Date:   5 oct 24

      Filename: project06-03.js
*/

let subButton = document.getElementById("subButton");

// Validate the payment when the submit button is clicked
subButton.addEventListener("click", validatefirstnameShip);
subButton.addEventListener("click", validatelastnameShip);
subButton.addEventListener("click", validateaddress1Ship);
subButton.addEventListener("click", validateaddress2Ship);
subButton.addEventListener("click", validatecityShip);
subButton.addEventListener("click", validatestateShip);
subButton.addEventListener("click", validatecountryShip);
subButton.addEventListener("click", validatecodeShip);

// Check if the first name is on the shipping address
function validatefirstnameShip() {
  let firstnameShip = document.getElementById("firstnameShip");
  if (firstnameShip.validity.valueMissing) {
    firstnameShip.setCustomValidity("Enter your first name");
    } else {
      firstnameShip.setCustomValidity("");
    }
}

// check if the last name is on the shipping address
function validatelastnameShip() {
  let lastnameShip = document.getElementById("lastnameShip");
  if (lastnameShip.validity.valueMissing) {
    lastnameShip.setCustomValidity("Enter your last name");
  } else {
    lastnameShip.setCustomValidity("");
  }
}

// check if the last name is on the shipping address
function validateaddress1Ship() {
  let address1Ship = document.getElementById("address1Ship");
  if (address1Ship.validity.valueMissing) {
    address1Ship.setCustomValidity("Enter your first address");
  } else {
    address1Ship.setCustomValidity("");
  }
}

// check if the address 2 is on the shipping address
let address2Ship = document.getElementById("address2Ship");
if (address2Ship.validity.valueMissing) {
  address2Ship.setCustomValidity("Enter your second address");
} else {
  address2Ship.setCustomValidity("");
}

// check if the city is on the shipping address
let cityShip = document.getElementById("cityShip");
if (cityShip.validity.valueMissing) {
  cityShip.setCustomValidity("Enter your city");
} else {
  cityShip.setCustomValidity("");
}

//Check if the state is on the shipping address
let stateShip = document.getElementById("stateShip");
if (stateShip.validity.valueMissing) {
  stateShip.setCustomValidity("Enter your state.");
} else {
  stateShip.setCustomValidity("");
}

// Check if the country is on the shipping address
let countryShip = document.getElementById("countryShip");
if (countryShip.validity.valueMissing) {
  countryShip.setCustomValidity("Enter your country.");
} else {
  countryShip.setCustomValidity("");
}

// Check if the postal code is on the shipping address
let codeShip = document.getElementById("codeShip");
if (codeShip.validity.valueMissing) {
  codeShip.setupCustomValidity("Enter your postal code.");
} else {
  codeShip.setCustomValidity("");
}