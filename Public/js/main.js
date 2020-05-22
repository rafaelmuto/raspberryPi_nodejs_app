console.log('main.js');

document.getElementById('api_led_clear_btn').addEventListener('click', () => {
  console.log('api_led_clear clicked!');
  fetch('http://192.168.15.32:8080/api/led/clear')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
