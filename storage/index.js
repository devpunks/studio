import { readFileSync as read } from 'fs'

let
  frame = read
    ( process.cwd() +'/storage/index.jpg' )

console.log (frame)
