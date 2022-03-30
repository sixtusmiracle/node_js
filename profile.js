const https = require('https'); // require https module
const http = require('http'); // require http module

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

function get(username) {
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
        const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]})`
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

module.exports.get = get;