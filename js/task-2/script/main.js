// const guess = document.getElementById('guess');
// const input = document.getElementById('input');
// const start = document.getElementById('start');
// const rangeField = document.getElementById('range');

// const displayRange = () =>
//   (rangeField.innerHTML = `[${range[0]} , ${range[1]}]`);

// let attemptsCounter = 0;
// let range = [1, 100];

// const setup = () => {
//   num = Math.round(Math.random() * 100);
//   start.style.display = 'none';
//   guess.style.display = 'block';
//   input.style.pointerEvents = 'initial';
// };

// const endGame = () => {
//   start.style.display = 'block';
//   guess.style.display = 'none';
//   input.style.pointerEvents = 'none';
//   input.value = '';
// };

// const guesser = () => {
//   let val = input.value;
//   if (val >= range[0] && val <= range[1]) {
//     attemptsCounter++;
//     if (val > num) {
//       range[1] = +val;
//       displayRange();
//       alert('Загаданное число меньше');
//     }
//     if (val < num) {
//       range[0] = +val;
//       displayRange();
//       alert('Загаданное число больше');
//     }
//     if (val == num) {
//       alert(`Вы угадали число. Количество попыток: ${attemptsCounter}`);
//       endGame();
//     }
//   } else {
//     alert(
//       `Загаданное число находится в диапазоне от ${range[0]} до ${range[1]}`
//     );
//   }
// };

// start.addEventListener('click', () => setup());
// guess.addEventListener('click', () => guesser());

class Guesser {

  constructor() {
    this.attemptsCounter = 0;
    this.range = [0, 100];
  }
  guess = document.getElementById('guess');
  input = document.getElementById('input');
  start = document.getElementById('start');
  rangeField = document.getElementById('range');

  setRange = r => {
    Array.isArray(r) ? this.range = r : console.error(`setRange type error. Received ${typeof r} instead of array`);
  } //setter

  getAttemptsCounter = () => this.attemptsCounter; 

  displayRange = () => (this.rangeField.innerHTML = `[${this.range[0]} , ${this.range[1]}]`); 

  setup = () => {
    this.num = Math.round(Math.random() * this.range[1]);
    this.start.style.display = 'none';
    this.guess.style.display = 'block';
    this.input.style.pointerEvents = 'initial';
    this.rangeField.innerHTML = 'Try to guess';
    console.log(this.num)
  };

  endGame = () => {
    this.start.style.display = 'block';
    this.guess.style.display = 'none';
    this.input.style.pointerEvents = 'none';
    this.input.value = '';
    this.rangeField.innerHTML = 'Try to guess';
  };

  guesser = () => {
    let val = this.input.value;
    if (val >= this.range[0] && val <= this.range[1]) {
      this.attemptsCounter++;
      if (val > this.num) {
        this.range[1] = +val;
        this.displayRange();
        alert('Загаданное число меньше');
      }
      if (val < this.num) {
        this.range[0] = +val;
        this.displayRange();
        alert('Загаданное число больше');
      }
      if (val == this.num) {
        alert(`Вы угадали число. Количество попыток: ${this.getAttemptsCounter()}`);
        this.endGame();
      }
    } else {
      alert(
        `Загаданное число находится в диапазоне от ${this.range[0]} до ${this.range[1]}`
      );
    }
  };
}

let g =new Guesser;
g.setRange([1,150]);
g.setRange(10);
start.addEventListener('click', () => g.setup());
guess.addEventListener('click', () => g.guesser());
