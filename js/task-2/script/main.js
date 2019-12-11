const guess = document.getElementById('guess');
const input = document.getElementById('input');
const start = document.getElementById('start');
const rangeField = document.getElementById('range');

const displayRange = () => ( rangeField.innerHTML=`[${range[0]} , ${range[1]}]`);

let attemptsCounter = 0;
let range = [1, 100];

const setup = () => {
  num = Math.round(Math.random() * 100)ж
  start.style.display = 'none';
  guess.style.display = 'block';
  input.style.pointerEvents = 'initial';
};

const endGame = () => {
  start.style.display = 'block';
  guess.style.display = 'none';
  input.style.pointerEvents = 'none';
  input.value = '';
}

const guesser = () => {
  let val = input.value;
  if (val >= range[0] && val <= range[1]) {
    attemptsCounter++;
    if (val > num) {
      range[1] = +val;
      displayRange();
      alert('Загаданное число меньше');
    } 
    if(val < num) {
      range[0] = +val;
      displayRange();
      alert('Загаданное число больше');
    }
    if (val == num) {
      alert(`Вы угадали число. Количество попыток: ${attemptsCounter}`);
      endGame()
    }
  } else {
    alert(`Загаданное число находится в диапазоне от ${range[0]} до ${range[1]}`);
  }
};

start.addEventListener('click', () => setup());
guess.addEventListener('click', () => guesser());
