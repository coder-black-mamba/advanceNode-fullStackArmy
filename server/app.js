import http from "http"
const server = http.createServer((req, res) => {
    // Basic Response For Sending Heading
    res.writeHead(200, { 'Content-Type': 'application/json' });
    // Basic Response For Writing Body
    res.write("Hello");
    // Basic Response For Ending Body
    res.end(JSON.stringify({
        data: 'Hello World!',
    }));
});

const PORT = 3000;
server.listen
server.listen(PORT,(err)=>{
    console.log(`Server Is Listening On http://localhost:${PORT} :)`)
})