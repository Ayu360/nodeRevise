const http = require("http");
//console.log(http);

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end("Here is our short history");
  } else if (req.url === "/product") {
    // for (let i = 0; i < 1000; i++) {
    //   for (let j = 0; j < 1000; j++) {
    //     console.log(`${i} ${j}`);
    //   }
    // }
    res.end("Here are our products");
  } else {
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
  }
});

server.listen(5000);

/* What we see here is even though the blocking code (double for loop) is
present only in about section but if ever this resource is requested, all
other requests also have to suffer (load about page and then load other 
pages, you will see lots of loading). So we need to handle it asyncronously!
Since then all these blocking codes will be "ofloaded" and will be executed 
only when our res is ready!
 */
