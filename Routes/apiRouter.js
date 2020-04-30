const express = require('express');
const led = require('sense-hat-led');

const router = express.Router();

router.get('/', (req, res, nxt) => {
  console.log('api route');
  res.send('api route test');
});

router.get('/matrix/:red/:green/:blue', (req, res, nxt) => {
  const RGB = [req.params.red, req.params.green, req.params.blue];

  console.log(RGB);

  led.sync.clear(RGB);

  res.send('=> matrix:' + RGB);
});

module.exports = router;
