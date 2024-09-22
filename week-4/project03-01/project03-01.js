/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Steve Culmer
      Date:   31 Aug 24

      Filename: project03-01.js
*/

//reference the collection of menu items
let menuItems = document.getElementsByClassName("menuItem"); // Array of menu items from the HTML form

// Loop through the menu items and add an EventListener for the change event, using the calcTotal() function
for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("change", calcTotal); // Add event listener to each enu item
}

// Function to calculate total cost of the order
function calcTotal() {
  let orderTotal = 0; // Variable to hold the order total

  // Loop through the menu items and add the value of the checked menu items to the order total
  for (let i = 0; i < menuItems.length; i++) {
    if (menuItems[i].checked) {
      orderTotal += Number(menuItems[i].value); // Add the value of the checked menu item to order total
    }
  }

  document.getElementById("billTotal").innerHTML = formatCurrency(orderTotal); // Display the order total
}

  // Function to display a numeric vale as a text string in the format $##.##
  function formatCurrency(value) {
    return  "$" + value.toFixed(2);
  }
