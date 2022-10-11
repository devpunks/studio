import { METHODS } from "http"
import http from "http"
import { Router, default as express, json } from 'express'

console.log(METHODS)
console.log(http)

export default class Resource extends Router{
  constructor() {
    super().route("/")
    console.warn(this)
  }
}

const app = (new Resource)
  .get('/', function (req, res) {
    res.json({ data: 'SHEESH' }) })
  .get('/welcome', function (req, res) {
    res.send('<h1>Hello</h1> welcome to my http server made with express') })
  .use(function(req, res, next) {
    res.status(404).send("That route doesn't exist") })


class Server extends express() {
  constructor() {
    super()
    console.warn('WTF AM I ', this)
  }
}

(new Server)
  .listen ( process.env.PORT || 3000,
    function () { console.log(`Example app listening on port ${PORT}`) })
