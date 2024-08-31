/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Steve Culmer
      Date:   31 Aug 24

      Filename: project03-01.js
*/

//reference the collection of menu items
let menuItem = document.getElementsByTagName("id");

     //Function to write menu items
     function menuItems() {
        window.addEventListener("load", menuItems);
        let i = 0; //initial counter value
        
        //write each of the menu items
        while (i < 5) {
            id[i].innerHTML = menuItems[i];

            // increase the counter by 1
            i++;
        }

        // Calculate the total cost of the customer order as the menu item is clicked
        let billTotal = "calcTotal";

        //Function to total the bill as the menu item is clicked
        function billTotal() {
            let i = 0; //initial counter value

            CalcTotal += [i](+1);

        }

    }

 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }