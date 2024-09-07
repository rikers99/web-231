/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Steve Culmer
      Date:   31 Aug 24

      Filename: project03-01.js
*/

//reference the collection of menu items
let menuItems = document.getElementsByClassName("menuItem");

// Loop through the menu items and add an EventListener for the change event, using the calcTotal() function
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("change", calcTotal);
}

// Function to calculate total cost of the order
function calcTotal() {
  let orderTotal = 0;
  // 1. For loop over menuItems array
  for (let i = 0; i < menuItems.length; i++) {
    calcTotal += menuItems[i];
  }
  // 2. Add if statement to check the .checked property of each checkbox
  var checkbox = document.getElementById("checkbox").Checked;
  console.log(checkbox);
  if(checkbox == "true"){
    console.log = "test";
  }
  // 2.a. Running total of the order.  Example, orderTotal += Number(menuItems[i].value);
  orderTotal += Number(menuItems[i].value);
}

 // Function to display a numeric value as a text string in the format $##.##
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }