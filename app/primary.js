function handleAwesomeness(doBackground) {
    if (doBackground) {
        console.log("---> background");
        if (global.TNS_WEBPACK) {
            console.log("---> worker webpack on");
            const TestWorker = require("nativescript-worker-loader!./worker.js");
            worker = new TestWorker();
        } else {
            console.log("---> worker webpack off");
            worker = new Worker("./worker.js");
        }
        return;
    }
    console.log("Handle Awesomeness");
}
module.exports = handleAwesomeness;
