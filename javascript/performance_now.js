//The performance.now() method returns a DOMHighResTimeStamp, measured in milliseconds.
//performance.now() is relative to page load and more precise in orders of magnitude.
//Use cases include benchmarking and other cases where a high-resolution time is required
//such as media (gaming, audio, video, //etc.)

let startTime = performance.now();
doSomething();
const endTime = performance.now();
console.log("this doSomething took " + (endTime - startTime) + " milliseconds.");
