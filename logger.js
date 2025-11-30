// https://youtube.com/watch?v=lWmbK6iZML4
// Pino vs Winston
//   - https://betterstack.com/community/comparisons/pino-vs-winston
//   - https://dev.to/wallacefreitas/pino-vs-winston-choosing-the-right-logger-for-your-nodejs-application-369n
// Choosing a logging framework - https://betterstack.com/community/guides/logging/logging-framework/
// Logging libraries - https://betterstack.com/community/guides/logging/best-nodejs-logging-libraries
// Structured logging in Node.js with Winston - https://thedreaming.org/2020/06/24/structured-logging-nodejs
console.log ('LOGGERRRRRRRRRRRRRRRR')

const LEVELS = {
  error: 0 // highest
, warning: 1
, info: 2
, http: 3
, debug: 4
} // LEVELS

function log ( { method, protocol, hostname, path, query, url } ) {
  console.log ( 'URL: ', url )
  console.log ( 'Query: ', query )

  return method + ' '
    + `${ protocol }://${ hostname }:${ process.env.PORT }${ path }`
} // log

export default ( location = './index.log' ) =>
  ( req, res, next ) =>
    console.log ( new Date, location, log ( req ), next ( req, res ) )
