exports.getIMU = (req, res, nxt) => {
  res.status(200).json({ msg: 'IMU sensor data.' });
};
