console.log('==> running app.js');

const express = require('express');
const Datastore = require('nedb');
const led = require('sense-hat-led');
const Joystick = require('sense-hat-joystick').Joystick;

const apiRouter = require('./Routes/apiRouter');

// starting express.js:
const app = express();
// starting neDB:
const db = new Datastore('database.db');
db.loadDatabase();

// sense-hat joystick test:
const joystick = new Joystick();
let RGB = [0, 0, 0];
joystick.on('up', () => {
  RGB = [0, 0, 0];
  led.sync.clear();
  console.log('=>' + RGB);
});
joystick.on('left', () => {
  RGB[0] += 10;
  led.sync.clear(RGB);
  console.log('=>' + RGB);
});
joystick.on('down', () => {
  RGB[1] += 10;
  led.sync.clear(RGB);
  console.log('=>' + RGB);
});
joystick.on('right', () => {
  RGB[2] += 10;
  led.sync.clear(RGB);
  console.log('=>' + RGB);
});

// ==> middlewares:
app.use('/api', apiRouter);
app.use('/', (req, res, nxt) => {
  res.send('hello world from raspberry pi + sensehat');
});

app.listen(8080, () => {
  led.sync.clear();
  console.log('-> starting server @ port 8080');
  led.sync.showMessage('raspberry pi nodeJS server on...', 0.2 / 10);
  // led.sync.clear(32, 160, 16);
});
