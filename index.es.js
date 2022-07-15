import express from 'express'
import { METHODS } from "http"

console.log(METHODS)

export default class { }

// Require express and create an instance of it
const app = express();

// on the request to root (localhost:3000/)
app.get('/', function (req, res) {
	// res.json(JSON.stringify({ foo: 'bar' }));
	res.json({
	data: 'SHEESH'
	})
});

// On localhost:3000/welcome
app.get('/welcome', function (req, res) {
	res.send('<b>Hello</b> welcome to my http server made with express');
});

// Change the 404 message modifing the middleware
app.use(function(req, res, next) {
	res.status(404).send("Sorry, that route doesn't exist. Have a nice day :)");
});

const PORT = process.env.PORT || 3000

app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}`);
});

