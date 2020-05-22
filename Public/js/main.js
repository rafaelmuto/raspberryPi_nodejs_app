console.log('main.js');

document.getElementById('api_led_clear_btn').addEventListener('click', () => {
  console.log('api_led_clear_btn clicked!');
  fetch('/api/led/clear')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});

document.getElementById('api_led_fill_btn').addEventListener('click', () => {
  console.log('api_led_fill_btn clicked');

  let R = document.getElementById('led_fill_R').value;
  let G = document.getElementById('led_fill_G').value;
  let B = document.getElementById('led_fill_B').value;

  if (R == null || !Number.isInteger(R)) R = 0;
  if (G == null || !Number.isInteger(G)) G = 0;
  if (B == null || !Number.isInteger(B)) B = 0;

  fetch('/api/led/fill/' + R + '/' + G + '/' + B)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
