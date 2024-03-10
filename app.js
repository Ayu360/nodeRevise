const os = require("os");
//info about current user
const user = os.userInfo();
console.log(user);

//method to return system's uptime in seconds
console.log(`The system's uptime is ${os.uptime()} seconds`);

//info about current system
const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOs);
