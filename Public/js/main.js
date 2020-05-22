console.log('main.js');

document.getElementById('api_led_clear_btn').addEventListener('click', () => {
  console.log('api_led_clear clicked!');
  fetch('/api/led/clear')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
