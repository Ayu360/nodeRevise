const eventEmitter = require("events");
const customeEmitter = new eventEmitter();

customeEmitter.on("request", (name, id) => {
  console.log(`data recieved\n user: ${name}, id: ${id}`);
});
customeEmitter.emit("request");
console.log("Start the execution");
/*
require("events") returns an event class and then we create an instance of this retured class.
It has many usefull functions/methods but two of the most important methods are: on() & emit()

1. On event method is used to register the event, first parameter is name & other is callback
2. Emit event method is used to invoke the enent, so the first parameter should be same as "on".

note: event overloading is allowed and we can even create two events that look actually identical
and they both will execute if invoked. But the order of event will be the order in which they are
wrote in script. So nothing is stoping me from writing the following:*/

customeEmitter.emit("request2");

customeEmitter.on("request2", () => {
  console.log(`second event identical to third one`);
});

customeEmitter.on("request2", () => {
  console.log(`just temp event`);
});

customeEmitter.emit("request2");

// We see that first customeEmitter.emit("request2") is not printing anything since it envokes before declaration

//ANOTHER PATTERN:

const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Hello world");
});

server.listen(5000);

/*
What's going on above? 
Since http class is made such that (by node developers ) such that it extends the eventEmitter class.
So it also has the access to "on" method. So we created a server and then we are looking for request
event to trigger. "request" is not that we named it of our own! we can't write "request1" or anything
else! Why?

Think of it in this way, if it's just an event creation, how it has "req" nad "res" parameter, how 
node knows that req is request object but not some number or string. "request" is the event type 
already defined. so when we say sever.on("request") it sends the req object and req and takes up
response in "res". We are not creating our own customized event here like we are doing in line no. 
4, 22 ,26.

If you want proof open following link: "https://nodejs.org/dist/latest-v14.x/docs/api/http.html"
1. Now look for htttp:server (open it in sepreate window) you will find it extends eventEmitter class
2. In server list, you will find request event as well.

*/
