//Create web server 

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     const readable = fs.createReadStream(path.join(__dirname, 'big-image.jpg'));
//     readable.pipe(res);
// });

// server.listen(3000);

// Path: comments.js
//Create a web server that's going to send a response of big image (bigger than 3MB) to any client that sends a request to your specified server:port. Use the best way for performance.

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     fs.readFile(path.join(__dirname, 'big-image.jpg'), (err, data) => {
//         if (err) throw new Error('Error');
//         res.end(data);
//     });
// });

// server.listen(3000);

// Path: comments.js
//Create a web server that's going to send a response of big image (bigger than 3MB) to any client that sends a request to your specified server:port. Use the best way for performance.

// const http = require('http');
// const fs = require('fs');
// const path = require('path');

// const server = http.createServer((req, res) => {
//     const readable = fs.createReadStream(path.join(__dirname, 'big