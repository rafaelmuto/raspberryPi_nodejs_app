const led = require('sense-hat-led');

exports.clear = (req, res, nxt) => {
  led.clear();

  res.status(200).json({ msg: 'led matrix cleared.' });
};

exports.fillMatrixRGB = (req, res, nxt) => {
  const RGB = [
    parseInt(req.params.red),
    parseInt(req.params.green),
    parseInt(req.params.blue)
  ];

  RGB.forEach(color => {
    if (color > 255) return 255;
    if (color < 0) return 0;
    else return color;
  });

  led.sync.clear(RGB);

  res.status(200).json({ msg: 'led matrix set', color: RGB });
};

exports.showTextStd = (req, res, nxt) => {
  const txt = req.params.txt;
  led.sync.clear();
  led.sync.showMessage(txt, 0.1 / 2);
  led.sync.clear();

  res.status(200).json({ msg: 'text showed', text: txt });
};
