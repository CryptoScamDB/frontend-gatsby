let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let request = require('request');
const crypto = require('crypto');

const ENV = process.env.NODE_ENV || 'test';
require('dotenv').config({
  path: `${__dirname}/../.env.${ENV === 'test' ? 'development' : 'production'}`
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

function generateUUID() {
  const hexstring = crypto.randomBytes(16).toString('hex');
  const uuid =
    hexstring.substring(0, 8) +
    '-' +
    hexstring.substring(8, 12) +
    '-' +
    hexstring.substring(12, 16) +
    '-' +
    hexstring.substring(16, 20) +
    '-' +
    hexstring.substring(20);
  return uuid;
}

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/heartbeat', (req, res, next) => {
  return res.json({ status_code: 200, message: 'I am alive' });
});

app.post('/api/report', (req, res, next) => {
  console.log(req.body['g_recaptcha_response']);

  if (
    req.body['g_recaptcha_response'] === undefined ||
    req.body['g_recaptcha_response'] === '' ||
    req.body['g_recaptcha_response'] === null
  ) {
    res.status(403);
    return res.json({ status_code: 403, message: 'Please complete the captcha' });
  }

  request(
    `${process.env.GOOGLE_CAPTCHA_VERIFICATION_URL}?secret=${
      process.env.GOOGLE_RECAPTCHA_SECRET_KEY
    }&response=${req.body['g_recaptcha_response']}&remoteip=${req.connection.remoteAddress}`,
    function(error, response, body) {
      console.log(body);
      process.exit(0);
      if (body.success !== undefined && !body.success) {
        res.status(403);
        return res.json({ status_code: 403, message: 'Failed captcha' });
      }
    }
  );

  res.status(201);
  res.send(
    JSON.stringify({ status_code: 201, message: 'Report submitted', report_id: generateUUID() })
  );
});

app.listen(3000);
console.log('Server running on port 3000');
