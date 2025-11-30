import http from 'http'
import { json, // parser
, Router // router
, default as express // server
} from 'express'

import log from './logger.js'

const
  { METHODS } = http
, { PORT = 3000 } = process.env

console.log ( METHODS )
console.log ( json )

export default class Resource extends Router {
  constructor() {
    super ().route ( '/' )
    console.warn ( this )
  }
}

const app = ( new Resource )
  .use ( log )
  .get ( '/', ( req, res ) => res.json ( { data: 'SHEESH' } ) )
  .get ( '/welcome', ( req, res ) =>
    res.send ( '<h1>Hello</h1> welcome to my http server made with express' ) )
  .use ( ( req, res, next ) => res.status ( 404 ).send ( "That route doesn't exist" ) )


void ( new express () )
  .use( app )
  .listen ( PORT, _ => console.log ( `Listening on port ${PORT}` ) )
