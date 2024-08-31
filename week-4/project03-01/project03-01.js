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
        let i = 0; //initial counter value
        
        window.addEventListener("load", menuItems);

        //write each of the menu items
        while (i < 5) {
            id[i].innerHTML = menuItems[i];

            //increase the counter by 1
            i++;
        }
    }





 // Function to display a numeric value as a text string in the format $##.## 
 function formatCurrency(value) {
    return "$" + value.toFixed(2);
 }