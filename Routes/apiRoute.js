const express = require('express');
const led = require('sense-hat-led');

const router = express.Router();

router.get('/matrix/:red/:green/:blue', (req, res, nxt) => {
  console.log(
    '=>/api/matrix/' +
      req.params.red +
      '/' +
      req.params.green +
      '/' +
      req.params.blue
  );

  const RGB = [req.params.red, req.params.green, req.params.blue];
  led.sync.clear(RGB);
  res.send(
    '=>/api/matrix/' +
      req.params.red +
      '/' +
      req.params.green +
      '/' +
      req.params.blue
  );
});

module.exports = router;
