const Joystick = require("sense-hat-joystick").Joystick;
const joystick = new Joystick();

// possible events: left, right, up, down and enter
joystick.on("left", () => {
  console.log("nothing left.");
});

joystick.on("up", () => {
  console.log("up you go!");
});

joystick.on("down", () => {
  console.log("going down...");
});

joystick.on("right", () => {
  console.log("all right!");
});

joystick.on("middle", () => {
  console.log("outch!");
});
