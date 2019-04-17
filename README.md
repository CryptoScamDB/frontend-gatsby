# CryptoScamDB Frontend

Frontend runs on Gatsby and GraphQL getting data from `api.cryptoscamdb.org`.

To run: `yarn develop` and navigate to `https://localhost:8000`

## Production

#### 1) Create `./.env.production` file

```
# The API keys for CSDB - this is used to make POST and PUT requests.
CSDB_API_KEY=xxx

# The CSDB express endpoint
CSDB_EXPRESS_ENDPOINT=xxx

# Google ReCAPTCHA settings
GOOGLE_RECAPTCHA_SITE_KEY=xxx
GOOGLE_RECAPTCHA_SECRET_KEY=xxx
GOOGLE_CAPTCHA_VERIFICATION_URL=https://www.google.com/recaptcha/api/siteverify
```
#### 2) Keep the express server running

Keep the `./server/server.js` alive! Run with `npm run server`. This is so we can keep 
our secrets secret!