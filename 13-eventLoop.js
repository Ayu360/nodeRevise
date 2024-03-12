// What are Event loops?
// The event loop is what allows Node.js to perform non-blocking I/O operations —
// despite the fact that JavaScript is single-threaded — by offloading operations
// to the system kernel whenever possible.

//Since most modern kernels are multi-threaded, they can handle multiple operations
//executing in the background.

const http = require("http");
const server = http.createServer((req, res) => {
  console.log("request event");
  res.end("Hello World");
});

server.listen(5000, () => {
  console.log("Server is on localhost: 5000");
});

console.log("Let test this out");
console.log("I will run first");

//What's happening here is: syncronous process are ran first and event loop
//pushes the non syncronus functions such as listen to wait queue and once
// all the sync code is done it executes listen, and execute is somewhat like
// setInterval, so once listen is executed, it's not actually poped out its
//pushed again in queue.

//LET'S take one more example:
console.log("Start example 2:");
setTimeout(() => {
  console.log("executing from inside of setTimeout");
}, 0);
console.log("Execution end");

//In above case we get o/p: Start example 2: -> Execution end -> executing from........
//But why even after time === 0, it executed the function inside setTimeout in the end?
//The answer is event loop executes line-by-line but in case of async functions it only
//registers the callback and executes once all the sync code is done, even if time===0.
