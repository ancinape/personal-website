var toyPaths = ["js/ball.js","js/term.js"];
var toyPath = toyPaths[Math.floor(Math.random() * toyPaths.length)];

// For debugging terminal
//toyPath = "js/term.js";

module.exports = {
    toyPath: toyPath
  };