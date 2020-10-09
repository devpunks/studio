import { createReadStream as read } from 'fs'

let
  encoding = 'Base64'
, frame = read
    ( process.cwd() +'/storage/index.jpg', encoding )

console.log (frame)
