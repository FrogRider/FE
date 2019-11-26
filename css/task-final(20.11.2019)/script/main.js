window.addEventListener('load', () => {
  const container = document.getElementById('left_grid');
  const squares_quantity = 100;
  const desr = `<div class="item-stats">
  <p class="name">Some Item Name</p>
  <p class="descr">Keep In Inventory To Gain Bonus</p>
  <p class="descr">Required Level: 14</p>
  <p class="stat">Stat 1</p>
  <p class="stat">Stat 2</p>
  <p class="stat">Stat 3</p>
  <p class="stat">Stat 4</p>
  </div> `;

  for (let i = 0; i < squares_quantity; i++) {
    const square = document.createElement('div');
    square.innerHTML += desr;
    
    square.classList.add('grid-block');
    container.appendChild(square);
    console.log('created')
  }
});
