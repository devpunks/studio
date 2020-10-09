import { createReadStream as read } from 'fs'

let
  encoding = 'base64' // 'binary'
, frame = read
    ( process.cwd() +'/storage/index.jpg', encoding )


frame.pipe(process.stdout)
