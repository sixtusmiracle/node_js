/**
 * A Command Line Application
 * @name Profile_App
 * @author Sixtus Miracle
 */

//! I need a simple way to look at a treehouse user's badge count and JS points
//* Use Node.js to connect to Treehouse's API to get profile information and print out

const profile = require('./profile'); // .js is optional but the path ./ is mandatory

// console.dir(process.argv.slice(2));
// const users = ["chalkers", "alenaholligan", "davemcfarland"];
const users = process.argv.slice(2);

// users.forEach(username => getProfile(username));
users.forEach(profile.get); // shortened