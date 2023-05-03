var express = require("express")
var app = express();

const http = require('http');
const server = require('http').Server(app);
const io = require('socket.io')(server);
// const PORT = process.end.PORT || 8000;

const defURL = "http://localhost:8000/"

app.use(express.static('public'));

app.set("view engine", "ejs");

app.get("/vote", function(req, res){
res.render("pages/vote", {socketURL:defURL});
});

app.get("/result", function(req, res){
res.render("pages/result", {socketURL:defURL});
});

io.sockets.on('connection', function(socket){
	socket.on('vote_twice', function(vote){
	io.emit('vote_twice', vote);
	});

	socket.on('vote_bp', function(vote){
	io.emit('vote_bp', vote);
	});
});

server.listen(8000);
console.log("server is listening on port: 8000");


