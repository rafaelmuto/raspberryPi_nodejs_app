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

      return;
    }

    let data = {
      Accelleration: JSON.stringify(data.accel, null, '  '),
      Gyroscope: JSON.stringify(data.gyro, null, '  '),
      Compass: JSON.stringify(data.compass, null, '  '),
      Fusion: JSON.stringify(data.fusionPose, null, '  '),
      Temperature: data.temperature,
      Pressure: data.pressure,
      Humidity: data.humidity
    };
  });

  res.status(200).json({ msg: 'IMU sensor data.', data: data });
};
