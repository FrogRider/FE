window.addEventListener('load', () => {
  const gridLeft = document.getElementById('left_grid');
  const left_quantity = 100;
  const gridRight = document.getElementById('right_grid');
  const right_quantity = 60;
  const desr = `<div class="item-stats">
  <p class="name">Some Item Name</p>
  <p class="descr">Keep In Inventory To Gain Bonus</p>
  <p class="descr">Required Level: 14</p>
  <p class="stat">Stat 1</p>
  <p class="stat">Stat 2</p>
  <p class="stat">Stat 3</p>
  <p class="stat">Stat 4</p>
  </div> `;

  for (let i = 0; i < left_quantity; i++) {
    const square1 = document.createElement('div');
    square1.innerHTML += desr;

    square1.classList.add('grid-block');
    gridLeft.appendChild(square1);

    switch (i) {
      case 3:
        square1.classList.add('box');
        break;
      case 60:
        square1.classList.add('belt');
        break;
      case 59:
        square1.classList.add('fire');
        break;
      case 36:
        square1.classList.add('book');
        break;
    }
  }

  for (let i = 0; i < right_quantity; i++) {
    const square2 = document.createElement('div');
    square2.innerHTML += desr;

    square2.classList.add('grid-block');
    gridRight.appendChild(square2);
  }
});
