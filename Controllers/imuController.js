const imu = require('node-sense-hat').Imu;

exports.getData = (req, res, nxt) => {
  const IMU = new imu.IMU();

  IMU.getValue((err, data) => {
    if (err !== null) {
      res.status(500).json({
        msg: 'IMU sensor data gathering error.',
        data: null,
        error: err
      });
    }
    res.status(200).json({ msg: 'IMU sensor data.', data: data });
  });
};
