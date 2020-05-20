const express = require('express');
const ledController = require('../Controllers/ledController');

const router = express.Router();

router.get('/', (req, res, nxt) => {
  console.log('/api/');
  res.status(200).json({ msg: req });
});

router.get('/led/clear', ledController.clear);

router.get('/led/fill/:red/:green/:blue', ledController.fillMatrixRGB);

router.get('/led/showtxt/:txt', ledController.showTextStd);

module.exports = router;
