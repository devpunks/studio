// https://youtube.com/watch?v=lWmbK6iZML4
// Pino vs Winston -https://betterstack.com/community/comparisons/pino-vs-winston
console.log ('LOGGERRRRRRRRRRRRRRRR')

export default class {

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
