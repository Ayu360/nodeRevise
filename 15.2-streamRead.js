const { createReadStream } = require("fs");
const stream = createReadStream(
  "./content/bigfile.txt",
  { highWaterMark: 90000 },
  { encoding: "utf-8" }
);

stream.on("data", (result) => {
  console.log(result);
});

stream.on("error", (err) => {
  console.log(err);
});

/*
File size (size of stream), by default is equal to 64k (only reads upto 64kb)
To increase we pass an object as second argument { highWaterMark: 90000 }.
To convert the stream from bytes to string use {encoding: "utf-8"}

Note:
These methods reads and write files in chunks!
*/
