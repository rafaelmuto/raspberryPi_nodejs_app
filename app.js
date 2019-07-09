console.log('==> running app.js', 'background: #222; color: #bada55');

const express = require('express');
const led = require('sense-hat-led');

// starting express.js:
const app = express();

led.sync.clear();

// ==> middlewares:
app.use('/', (req, res, nxt) => {
  res.send('hello world from raspberry pi + sensehat');
});

app.listen(8080, () => {
  console.log('-> starting server @ port 8080');
  led.sync.clear(32, 255, 16);
});
