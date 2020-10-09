import fs from 'fs'

let
  frame = fs.readFileSync
    ( process.cwd() +'/storage/index.jpg' )

console.log (frame)
