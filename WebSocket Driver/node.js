var http = require("http");
var url = require("url");
var path = require("path");
var fs = require("fs");

function onRequest(req, res) {
    var filename = req.url || "/index.html";
    var ext = path.extname(filename);
    var localPath = __dirname;
    var validExtensions = {
        ".html": "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".txt": "text/plain",
        ".jpg": "image/jpeg",
        ".gif": "image/gif",
        ".png": "image/png"
    };

    var isValidExt = validExtensions[ext];
    console.log(isValidExt);
    if (isValidExt) {
        localPath += filename;
        fs.exists(localPath, function(exists) {
            if (exists) {
                console.log("Serving file: " + localPath);
                getFile(localPath, res, isValidExt);
            } else {
                console.log("File not found: " + localPath);
                res.writeHead(404);
                res.end();
            }
        });
    }
}
var server = http.createServer(onRequest).listen(8080);

function getFile(localPath, res, mimeType) {
    fs.readFile(localPath, function(err, contents) {
        if (!err) {
            res.setHeader("Content-Length", contents.length);
            res.setHeader("Content-Type", mimeType);
            res.statusCode = 200;
            res.end(contents);
        } else {
            res.writeHead(500);
            res.end();
        }
    });
}

var io = require('socket.io').listen(server);

io.on('connection', function(socket) {
    socket.emit('gradeA', { msg: "Grade is A"});
    socket.emit('gradeB', { msg: "Grade is B"});
    socket.emit('gradeC', { msg: "Grade is C"});
    socket.emit('gradeD', { msg: "Grade is D"});
    socket.emit('gradeF', { msg: "Grade is F"});
});