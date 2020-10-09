import { createReadStream as read } from 'fs'
import AWS from 'aws-sdk'

let
  encoding = 'base64' // 'binary'
, frame = read
    ( process.cwd() +'/storage/index.jpg', encoding )


//frame.pipe(process.stdout)


//AWS.config.loadFromPath('./s3_config.json');
var bucket = new AWS.S3( { params: {Bucket: 'porchpod'} } )

console.log (bucket)
