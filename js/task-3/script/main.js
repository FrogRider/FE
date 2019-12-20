class Guesser {
  constructor() {
    this.attemptsCounter = 0;
    this.range = [0, 100];
    this.ai_range = [0, 100];
  }
  guess = document.getElementById("guess");
  input = document.getElementById("input");
  start = document.getElementById("start");
  rangeField = document.getElementById("range");
  num_to_guess = document.getElementById('num_to_guess');
  box_for_nums = document.getElementById('unguessed_nums');

  setRange = r => {
    Array.isArray(r)
      ? (this.range = r)
      : console.error(
          `setRange type error. Received ${typeof r} instead of array`
        );
  }; //setter

  getAttemptsCounter = () => this.attemptsCounter;

  displayRange = () =>
    (this.rangeField.innerHTML = `[${this.range[0]} , ${this.range[1]}]`);

  setup = () => {

    if (this.num_to_guess.value != '' ) {
      this.num_to_guess.style.pointerEvents = "none";
      this.num = Math.round(Math.random() * this.range[1]);
      this.start.style.display = "none";
      this.guess.style.display = "block";
      this.input.style.pointerEvents = "initial";
      this.rangeField.innerHTML = "Try to guess";
      console.log(`Try to guess ${this.num}`);
      console.log(`Ai's next move is ${Math.round((this.ai_range[1] - this.ai_range[0])/2)}`)
    } else alert ('Сначала загадайте свое число')
    
  };

  endGame = () => {
    this.start.style.display = "block";
    this.guess.style.display = "none";
    this.input.style.pointerEvents = "none";
    this.input.value = "";
    this.box_for_nums.innerHTML = '';
    this.rangeField.innerHTML = "Try to guess";
    this.num_to_guess.style.pointerEvents = "initial";
    this.num_to_guess.value = '';
    this.attemptsCounter = 0;
    this.range = [0, 100];
    alert(this.range);
    console.log(this.range);
    this.ai_range = [0, 100];
  };

  ai = () => {
    // debugger;
    let ai_guess = Math.round((this.ai_range[0] + this.ai_range[1])/2);
    // let ai_guess = Math.floor(this.ai_range[0] + Math.random() * (this.ai_range[1] + 1 - this.ai_range[0]));
    if (ai_guess == num_to_guess.value) {
      alert(`Ai wins! Your number is ${ai_guess}`);
      this.endGame();
    } else {
      ai_guess < num_to_guess.value ? this.ai_range[0] = ai_guess : false;
        
      ai_guess > num_to_guess.value ? this.ai_range[1] = ai_guess : false;

      this.box_for_nums.innerHTML += ` ${ai_guess}`
        
    }
    console.log(`ai says ${ai_guess}, [${this.ai_range[0]} , ${this.ai_range[1]}]`)
  }

  guesser = () => {
    console.log(this.range)
    let val = this.input.value;
    if (val !== '') {
      if (val >= this.range[0] && val <= this.range[1]) {
        this.ai();
        this.attemptsCounter++;
        if (val > this.num) {
          this.range[1] = +val;
          this.displayRange();
          this.input.value = "";
          alert("Загаданное число меньше");
        }
        if (val < this.num) {
          this.range[0] = +val;
          this.displayRange();
          this.input.value = "";
          alert("Загаданное число больше");
        }
        if (+val === this.num) {
          alert(
            `Вы угадали число. Количество попыток: ${this.getAttemptsCounter()}`
          );
          this.endGame();
        }
      } else {
        alert(
          `Загаданное число находится в диапазоне от ${this.range[0]} до ${
            this.range[1]
          }`
        );
      }
    } else alert ('Type your number!')
  };
}

let g = new Guesser();
// g.setRange([1, 150]);
// g.setRange(10);
start.addEventListener("click", () => g.setup());
guess.addEventListener("click", () => g.guesser());
