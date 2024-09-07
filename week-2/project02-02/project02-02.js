/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Steve Culmer
      Date:   25 Aug 24

      Filename: project02-02.js
 */
 
// declare global constants for the application
function verifyForm() {
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;

      name && email && phone ? alert("Thank you") : alert("Please fill out all fields");

<<<<<<< HEAD
      name = (nameInput === "" && name === "");
      email = (emailInput === "" && email === "");
      phone = (phoneInput === "" && phone === "");
      document.getElementById("Submit").innerHTML = "$" + "Please fill in all fields";

      getSubmit();

      //add event handler for submit button
      document.getElementById(SubmitEvent).onchange = getSubmit;
}
=======
}
document.getElementById("submit").addEventListener("click", verifyForm);
>>>>>>> 4aafa8134cf866bbfbd6e1b8b91221e24b1a49da
