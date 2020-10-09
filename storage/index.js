import { createReadStream as read } from 'fs'
import AWS from 'aws-sdk'

let
  encoding = 'base64' // 'binary'
, frame = read
    ( process.cwd() +'/storage/index.jpg', encoding )


//frame.pipe(process.stdout)


//AWS.config.loadFromPath('./s3_config.json');
var bucket = new AWS.S3( { params: {Bucket: 'porchpod'} } )


var s3 = new AWS.S3({
    accessKeyId: 'AKIA5QFW6ZCP2CJA6M42',
    secretAccessKey:'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',
});

s3.listBuckets(function(err, data) {
    console.log(data);
});
