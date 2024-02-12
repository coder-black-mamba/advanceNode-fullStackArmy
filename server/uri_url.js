import http from "http"

const students = [{
    id: 1,
    first_name: "Rahul",
    last_name: "Sharma",
    age: 23
},
{
    id: 2,
    first_name: "Abu",
    last_name: "Sayed",
    age: 23
}
]






const server = http.createServer((req, res) => {


    console.log(req.url);
    // res.end("Hello World");

    // check all the things
    // console.log(req);
    // console.log("Server Is Running");
    // console.log(req.url);
    // console.log(req.method);
    // console.log(req.headers);
    // console.log(req.headers.host);
    // console.log(req.headers.origin);
    // console.log(req.headers.referer);
    // console.log(req.headers.useragent);
    // console.log(req.headers.accept);
    // console.log(req.headers.acceptencoding);
    // console.log(req.headers.acceptlanguage);
    // console.log(req.headers.connection);
    // console.log(req.headers.contentlength);
    // console.log(req.headers.contenttype);
    // console.log(req.headers.host);
    // console.log(req.headers.origin);
    // console.log(req.headers.referer);
    // console.log(req.headers.useragent);
    // console.log(req.headers.accept);
    // console.log(req.headers.acceptencoding);

    if (req.url === "/") {
        res.end("Hello World");
    } else if (req.url === "/about") {
        res.end("Hello About");

    } else if (req.url === "/students") {
        res.statusCode=200;
        res.end(JSON.stringify(students));

    } else if (req.url === "/students" && req.method === "POST") {
        res.end("Hello Post Contact");
    }

});

const PORT = 3000;
server.listen
server.listen(PORT, (err) => {
    console.log(`Server Is Listening On http://localhost:${PORT} :)`)
})