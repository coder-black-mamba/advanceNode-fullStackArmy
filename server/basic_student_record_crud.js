// Basic Crud Application Using Node Js Withput Any Frame Work
import http from 'http';
import fs, { read } from 'fs';
import path from 'path';
import { writeFile, readFile, updateFile, deleteFile } from './db_handler.js'


// function for sending response to client
function sendResponse(res, body, status = 200, type = "application/json") {
    res.writeHead(status, { 'Content-Type': type });
    res.end(body);
}


const routes = {
    '/': {
        "GET": (req, res) => { sendResponse(res, { msg: 'hey sayed' }) }
    },
    '/students': {
        "GET": (req, res) => {
            try {
                const data = readFile("./students.txt");
                if (!(data["errno"] == -2)) {
                    sendResponse(res, data);
                } else {
                    writeFile("./students.txt",{});
                    sendResponse(res, {});
                }
                console.log(data);

            } catch (error) {
                console.log(error);

                sendResponse(res, { msg: 'Unknown Error Occured' }, 500);

            }
        },
        "POST": (req, res) => {
            
            req.on('data', (stream) => {
                const body =stream.toString();
                console.log(body);
                updateFile("./students.txt", body);
            });
            const updatedData = readFile("./students.txt");
            req.on('end',()=>{sendResponse(res,updatedData,200)})
        },
        "PUT": (req, res) => { },
        "DELETE": (req, res) => { }
    },
    default: (req, res) => {
        sendResponse(res, { msg: 'Page Not Found' }, 404);
    }

}





const server = http.createServer((req, res) => {
    const cb = routes[req.url]
    if (cb) {
        // calling the appropiate function
        cb[req.method](req, res);

    } else {
        routes.default(req, res);
    }



});


const PORT = 3000;


server.listen(PORT, err => {
    if (!err) {
        console.log(`Server is Running on http://localhost:${PORT}`);
    }
    else {
        console.log(err);
    }
});