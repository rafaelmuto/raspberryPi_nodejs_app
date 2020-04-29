console.log('==> running app.js');

const express = require('express');
const Datastore = require('nedb');
const led = require('sense-hat-led');
const Joystick = require('sense-hat-joystick').Joystick;

// starting express.js:
const app = express();
// starting neDB:
const db = new Datastore('database.db');
db.loadDatabase();
// sense-hat joystick:
const joystick = new Joystick();
joystick.on('enter', () => {
  led.sync.clear();
});
joystick.on('up', () => {
  led.sync.clear(128, 128, 128);
});

// clearing led matrix:
led.sync.clear();

// ==> middlewares:
app.use('/', (req, res, nxt) => {
  res.send('hello world from raspberry pi + sensehat');
});

app.listen(8080, () => {
  console.log('-> starting server @ port 8080');
  led.sync.clear(32, 255, 16);
});
