"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: steve culmer
      Date:   5 oct 24

      Filename: project06-03.js
*/

window.addEventListener("load", function() {
  let useShip = document.forms.useShip;
  let billShip = document.forms.billShip;

  //Add an event listener for every form element
  for (let i=0; i < useShip.length; i++) {
    useShip.elements[i].addEventListener("copy", billShip);
  }

  //copy the shipping information to the billing information
  function copyShippingToBilling() {
    // Copy the shipping address to the bill address
    let firstname = useShip.firstnameShip;
    let lastname = useShip.lastnameShip;
    let address1 = useShip.address1Ship;
    let address2 = useShip.address2Ship;
    let city = useShip.cityShip;
    let state = useShip.stateShip;
    let country = useShip.countryShip;
    let code = useShip.codeShip;
  }
});