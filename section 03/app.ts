const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req) 
    console.log('test out a simple request') 
})

server.listen(3000)