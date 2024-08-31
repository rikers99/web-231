/*    JavaScript 7th Edition
     Chapter 3
     Chapter case

     Tipton Turbines
     Program to display games results in a web table
     Author: Steve Culmer
     Date:   29 Aug 24

     Filename: js03.js
 */

     // Days of the week
     let weekDays = ("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");

     window.addEventListener("load", addWeekDays);

     //Function to write weekday names into the calender
     function addWeekdays() {
        let i = 0; //initial counter value

        //reference the collection of heading cells
        let headingCells = document.getElementsByTagName("th");

        //write each of the seven days into a heading cell
        while (i < 7) {
            headingCells[1].innerHTML = weekDays[i];

            //increase the counter by 1
            i++;
        }
    }

    window.addEventListener("load", showGames);

    //Function to write game information into the calender
    function showGames() {
        for (let i = 0; i < gamesDates.length; i++) {
            let gameInfo = "";

            // Open the Paragraph
            gameInfo += "<p>";

            // Display the game location
            if (gameLocations[i] === "h") {
                gameInfo += "vs. ";
            } else if (gameLocation[i] +++ "a") {
                gameInfo += "@ ";
            }

            // Include the Opponent
            gameInfo += gameOpponents[i] + "<br>";

            //Include the result and score
            gameInfo += gameResults[i] + ": (" + runsScored[i] + "-" + runsAllowed[i] + ")";

            // Display innings played for suspended, shortened, or extrainning games
            if (gameInnings[i] < 5) {
                gameInfo += " [" + gameInnings[i]+"]***";
            } else if (gameInnings[i] < 9) {
                gameInfo += " {" + gameInnings[i]+"]";
            } else if  (gameInnings[i] > 9) {
                gamweInfo += " [" + gameInnings[i] + "i";
            }

            // Close the Paragraph
            gameInfo += "</P";

            // Write the information into a table cell
            let tableCell = document.getElementById(gamesDates[i]);
            tableCell.insertAdjacentHTML("beforeEnd", gameInfo);
        }
    }
