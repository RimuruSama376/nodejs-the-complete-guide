const http = require('http');
const cors = require('cors'); // Import the cors package

const server = http.createServer((req, res) => {
    // Set up CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allow specific HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allow specific headers

    if (req.method === 'OPTIONS') {
        // Handle preflight requests (OPTIONS requests)
        res.writeHead(200);
        res.end();
        return;
    }

    console.log(req);
    const responseObject = { msg: 'This is a simple msg' };
    res.end(JSON.stringify(responseObject));
});

server.listen(4000, () => {
    console.log('Server is running on port 4000'); // Correct the port number in the log message
});
