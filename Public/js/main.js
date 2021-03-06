console.log('main.js');

document.getElementById('api_led_clear_btn').addEventListener('click', () => {
  fetch('/api/led/clear')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

document.getElementById('api_led_fill_btn').addEventListener('click', () => {
  let RGB = [
    parseInt(document.getElementById('led_fill_R').value),
    parseInt(document.getElementById('led_fill_G').value),
    parseInt(document.getElementById('led_fill_B').value)
  ];

  RGB = RGB.map(color => {
    if (isNaN(color) || color < 0) return 0;
    if (color > 255) return 255;
    else return color;
  });

  fetch('/api/led/fill/' + RGB[0] + '/' + RGB[1] + '/' + RGB[2])
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

document
  .getElementById('api_led_text_std_btn')
  .addEventListener('click', () => {
    const text = document.getElementById('led_text_std').value;

    fetch('/api/led/showtxt/' + text)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err));
  });

document.getElementById('api_imu_getdata_btn').addEventListener('click', () => {
  fetch('/api/imu/getdata/')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
