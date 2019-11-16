window.addEventListener('load', () => {
  const menu = document.querySelector('nav');
  const li = document.querySelectorAll('li');
  // ul[0].children[1].innerHTML += 'zhekos'
  // console.log(ul[0].children)
  for (let i = 0; i < li.length-6; i++){
    let value = li[i].children[1].innerHTML;
    li[i].children[1].innerHTML = "<span>By: </span> " + value;
  }

  menu.classList.add('hide');

  menu.addEventListener('click', e => {
    if (e.offsetX > menu.offsetWidth) {
      menu.classList.toggle('hide');
    }
  });
});
