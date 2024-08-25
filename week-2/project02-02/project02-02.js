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
      let name = document.getElementById("nameInput").value;
      let email = document.getElementById("emailInput").value;
      let phone = document.getElementById("phoneInput").value;

      name  = (nameInput === "Name" && name === "");
      email = (emailInput === "Email" && email === "");
      phone = (phoneInput === "Phone" && phone === "");
      document.getElementById("Submit").innerHTML = "$" + "Thank You!";

      name = (nameInput === "" && name === "");
      email = (emailInput === "" && email === "");
      phone = (phoneInput === "" && phone === "");
      document.getElementById("Submit").innerHTML = "$" + "Please fill in all fields";

      getSubmit();
}