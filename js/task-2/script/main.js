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
  constructor () {
    autoBind(this);
  }

  guess = document.getElementById('guess');
  input = document.getElementById('input');
  start = document.getElementById('start');
  rangeField = document.getElementById('range');
  attemptsCounter = 0;
  range = [1, 100];

  displayRange = () => (this.rangeField.innerHTML = `[${this.range[0]} , ${this.range[1]}]`);

  setup = () => {
    this.num = Math.round(Math.random() * 100);
    console.log(this.num);
    this.start.style.display = 'none';
    this.guess.style.display = 'block';
    this.input.style.pointerEvents = 'initial';
    this.rangeField.innerHTML = 'Try to guess';
  };

  endGame = () => {
    this.start.style.display = 'block';
    this.guess.style.display = 'none';
    this.input.style.pointerEvents = 'none';
    this.input.value = '';
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
        alert(`Вы угадали число. Количество попыток: ${this.attemptsCounter}`);
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
start.addEventListener('click', () => g.setup());
guess.addEventListener('click', () => g.guesser());
