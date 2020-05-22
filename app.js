console.log('==> running app.js');

const express = require('express');
const path = require('path');
const Datastore = require('nedb');
const led = require('sense-hat-led');
const Joystick = require('node-sense-hat').Joystick;

const apiRouter = require('./Routes/apiRouter');

// starting express.js:
const app = express();
// starting neDB:
const db = new Datastore('database.db');
db.loadDatabase();
// setting view engine:
app.set('view engine', 'pug');
app.set('views', 'Views');
// serving static files folder:
app.use(express.static(path.join(__dirname, 'Public')));

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
  return res.sendFile(__dirname + '/Public/html/main.html');
});

app.use('*', (req, res, nxt) => {
  console.log('=> Err404');
  res.status(404).send('Err404');
});

app.use((err, req, res, nxt) => {
  console.log('=> Err500');
  res.status(500).send('Err500');
});

app.listen(8080, () => {
  led.sync.clear();
  console.log('-> starting server @ port 8080');
  led.sync.showMessage('raspberry pi nodeJS server on...', 0.1 / 4);
  led.sync.clear();
});
