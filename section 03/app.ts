const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req) 
    const responseObject = { message: 'This is a simple object' }
    res.end(JSON.stringify(responseObject));
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
});