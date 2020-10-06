// Aji Hidayat

// Soal 1

// Release 0
class Animal {
  constructor(name) {
    this._name = name;
    this.legs = 4;
    this.cold_blooded = false;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
}

var sheep = new Animal("shaun");
console.log(sheep.name);
console.log(sheep.legs);
console.log(sheep.cold_blooded);

// Release 1
class Ape extends Animal {
  constructor(name, legs = 2) {
    super(name);
    this.legs = legs;
  }
  yell() {
    return "Auooo";
  }
}
var sungokong = new Ape("kera sakti");
sungokong.yell();
console.log(sungokong);

class Frog extends Animal {
  constructor(name) {
    super(name);
  }
  jump() {
    return "hop hop";
  }
}

var kodok = new Frog("buduk");
kodok.jump();
console.log(kodok);

// Soal 2
class Clock {
  constructor({ template }) {
    this._template = template;
    this.timer;
  }
  render() {
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    var output = this._template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);
    console.log(output);
  }
  stop() {
    clearInterval(this.timer);
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

var clock = new Clock({ template: "h:m:s" });
clock.start();
