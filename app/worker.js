require("globals");

global.onmessage = function(msg) {
    console.log("Inside JS worker ...");
    console.log(msg);
}
