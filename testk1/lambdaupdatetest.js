let AWS = require('aws-sdk');
const kinesis = new AWS.Kinesis();

exports.handler = function (event, context, callback) {


    kinesis.describeStream({
        StreamName: 'newk'
    }).promise()
        .then(data => {
            // your logic goes here
        })
        .catch(err => {
            // error handling goes here
            console.log(err);
        });

    callback(null, { "message": "Successfully executed" });
}