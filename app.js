const path = require("path");

//printing path seperator:
console.log(path.sep);

//creating a path:
const fileName = path.join("./content", "subfolder", "test.txt");
console.log(fileName);

//knowing base file:
const baseName = path.basename(fileName);
console.log(baseName);
