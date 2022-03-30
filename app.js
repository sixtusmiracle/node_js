/**
 * A Command Line Application
 * @name Profile_App
 * @author Sixtus Miracle
 */

//! I need a simple way to look at a treehouse user's badge count and JS points
//* Use Node.js to connect to Treehouse's API to get profile information and print out

const https = require('https'); // require https module

/**
 * prints error to the console
 * 
 * @param {object} e 
 * @returns custom error mesage
 */
const printError = e => console.error(e.message);

/**
 * prints message to the console
 * 
 * @param {string} username 
 * @param {int} badgeCount 
 * @param {int} points 
 */
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) and ${points} points in JavaScript`;
  console.log(message);
}

function getProfile(username) {
  try {
    // Connect to the API URL (https://teamtreehouse.com/username.json)
    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
      if (response.statusCode === 200) {

        let body = "";

        // Read the data
        response.on('data', data => {
          body += data.toString();
        });
        response.on('end', () => {
          // Parse the data

          const profile = JSON.parse(body);

          // Print the data
          printMessage(username, profile.badges.length, profile.points.JavaScript);
        });

      } else {
        const message = `There was an error getting the profile for ${username} (${response.statusCode})`
        const statusCodeError = new Error(message);
        printError(statusCodeError);
      }
    });

    // request.on("error", error => console.error(`Problem with request: ${error.message}`));
    request.on("error", printError);
  } catch (e) {
    printError(e);
  }
}

// console.dir(process.argv.slice(2));
// const users = ["chalkers", "alenaholligan", "davemcfarland"];
const users = process.argv.slice(2);

// users.forEach(username => getProfile(username));
users.forEach(getProfile); // shortened