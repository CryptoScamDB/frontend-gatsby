let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let request = require('request').defaults({ strictSSL: false }); //@todo - look at importing the self signed certificate
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
  if (
    req.body['g_recaptcha_response'] === undefined ||
    req.body['g_recaptcha_response'] === '' ||
    req.body['g_recaptcha_response'] === null
  ) {
    res.status(403);
    return res.json({ status_code: 403, message: 'Please complete the captcha' });
  }

  // Check the Google ReCAPTCHA is by a human
  request(
    `${process.env.GOOGLE_CAPTCHA_VERIFICATION_URL}?secret=${
      process.env.GOOGLE_RECAPTCHA_SECRET_KEY
    }&response=${req.body['g_recaptcha_response']}&remoteip=${req.connection.remoteAddress}`,
    function(error, response, body) {
      if (body.success !== undefined && !body.success) {
        res.status(403);
        return res.json({ status_code: 403, message: 'Failed captcha' });
      }
    }
  );

  // Send a report to the actual CSDB API
  const objReportBody = JSON.parse(req.body['full_report']);

  if (
    objReportBody.hasOwnProperty('userAddress') === false ||
    objReportBody.hasOwnProperty('badAddresses') === false ||
    objReportBody.hasOwnProperty('badDomain') === false ||
    objReportBody.hasOwnProperty('badPersonalMessage') === false ||
    objReportBody.hasOwnProperty('badSomethingElse') === false
  ) {
    res.status(403);
    return res.json({ status_code: 400, message: 'Missing report keys' });
  }

  const strReportId = generateUUID();
  const objDate = new Date();
  const strReason = `User Address: ${objReportBody.userAddress}\r\n\r\n
                     [Bad] Addresses: ${objReportBody.badAddresses}\r\n
                     [Bad] Domain: ${objReportBody.badDomain}\r\n
                     [Bad] Personal Message: ${objReportBody.badPersonalMessage}\r\n
                     [Bad] Other Details: ${objReportBody.badSomethingElse}\r\n\r\n\r\n
                     Report ID: ${strReportId}
                     Timestamp: ${objDate.getFullYear()}-${objDate.getMonth()}-${objDate.getDate()}T${objDate.getHours()}:${objDate.getMinutes()}`;

  request(
    {
      url: 'https://api/cryptoscamdb.org/v1/report',
      method: 'POST',
      form: {
        reason: strReason
      }
    },
    function(error, httpResponse, body) {
      if (error === null) {
        res.status(201);
        return res.send(
          JSON.stringify({ status_code: 201, message: 'Report submitted', report_id: strReportId })
        );
      }

      res.status(400);
      return res.json({ status_code: 400, message: 'Something is wrong. Please try again later' });
    }
  );
});

app.listen(3000);
console.log('Server running on port 3000');
