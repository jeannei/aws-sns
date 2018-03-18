const AWS = require('aws-sdk');

const SNS = new AWS.SNS({ region: 'us-east-1' });
const DEFAULT_ARN = 'arn:aws:sns:us-east-1:181010932167:GrandHack_2018';

function subscribe(endpoint = '', protocol = 'sms', arn = DEFAULT_ARN) {
  return new Promise((resolve, reject) => {
    SNS.subscribe(
      { Endpoint: endpoint, Protocol: protocol, TopicArn: arn },
      (err, data) => err ? reject(err) : resolve(data)
    );
  });
}

exports.subscribe = subscribe;
