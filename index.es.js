import { METHODS } from "http"
import { Router, default as express } from 'express'

console.log(METHODS)

const PORT = process.env.PORT || 3000

export default class Resource extends Router{
  constructor() {
    console.warn(this)
  }
}

const app = new Router
  .get('/', function (req, res) {
    res.json({ data: 'SHEESH' }) })
  .get('/welcome', function (req, res) {
    res.send('<h1>Hello</h1> welcome to my http server made with express') })
  .use(function(req, res, next) {
    res.status(404).send("That route doesn't exist"); });
app.listen(PORT, function () {
	console.log(`Example app listening on port ${PORT}`);
});

