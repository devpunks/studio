// https://youtube.com/watch?v=lWmbK6iZML4
// Pino vs Winston
//   - https://betterstack.com/community/comparisons/pino-vs-winston
//   - https://dev.to/wallacefreitas/pino-vs-winston-choosing-the-right-logger-for-your-nodejs-application-369n
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

class Logger {
  constructor ( location = './index.log' ) {
    console.log ('Log location: ', location )
  }
}

export default function ( location = './index.log' ) {
  console.log ( 'This: ', this )

  return function ( req, res ) {
    console.log ( new Date, ' Logging to: ', location )
  }
}
