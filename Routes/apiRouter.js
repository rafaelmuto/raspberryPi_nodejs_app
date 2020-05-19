const express = require('express');
const led = require('sense-hat-led');

const router = express.Router();

router.get('/', (req, res, nxt) => {
  console.log('api route');
  res.send('api route test');
});

router.get('/matrix/:red/:green/:blue', (req, res, nxt) => {
  const RGB = [
    parseInt(req.params.red),
    parseInt(req.params.green),
    parseInt(req.params.blue)
  ];

  console.log(RGB);

  led.sync.clear(RGB);

  res.send('=> matrix:' + RGB);
});

router.get('/led/showtxt/:msg', (req, res, nxt) => {
  let msg = req.param.msg;
  console.log('==> LED Display Message: ' + msg);
  led.sync.clear();
  led.sync.showMessage(msg, 0.1 / 2);
  led.sync.clear();

  res.status(200).json({ msg: msg });
});

module.exports = router;
