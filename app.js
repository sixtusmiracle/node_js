/**
 * A Command Line Application
 * @name Profile_App
 * @author Sixtus Miracle
 */

//! I need a simple way to look at a treehouse user's badge count and JS points
//* Use Node.js to connect to Treehouse's API to get profile information and print out

const https = require('https'); // require https module
const username = "chalkers";

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

// Connect to the API URL (https://teamtreehouse.com/username.json)
const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {
  let body = "";

  // Read the data
  response.on('data', data => {
    body += data.toString();
  });

  response.on('end', () => {
    // Parse the data
    const profile = JSON.parse(body);
    console.dir(profile.points.total);
    printMessage(username, profile.badges.length, profile.points.JavaScript)

    // Print the data
  });

});