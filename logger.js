// https://youtube.com/watch?v=lWmbK6iZML4
// Logging libraries - https://betterstack.com/community/guides/logging/best-nodejs-logging-libraries
// Pino vs Winston - https://betterstack.com/community/comparisons/pino-vs-winston
// Structured logging in Node.js with Winston - https://www.thedreaming.org/2020/06/24/structured-logging-nodejs/
console.log ('LOGGERRRRRRRRRRRRRRRR')

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
