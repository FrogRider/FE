window.onload = () => {
  canv = document.getElementById('canv');
  ctx = canv.getContext('2d');
  document.addEventListener("keydown", keyPush);
  setInterval(mainLoop, 1000/fps);
}
  
controls: (function(){
  fps = 10;
  keys = [0,0];
  score = 0;
  if(!sessionStorage['hScore'])
    sessionStorage['hScore'] = 0;
  playerX=playerY=10;
  gridSize=tileCount=20;
  tileGap = 2;
  dotX=dotY=15;
  xVelos=yVelos=0;//velositys
  tailParts=[];
  tail = 5;
}())

function mainLoop() {
  playerX += xVelos;
  playerY += yVelos;
  if (playerX < 0) {
    playerX = tileCount - 1;
  }
  if (playerX > tileCount - 1) {
    playerX = 0;
  }
  if (playerY < 0) {
    playerY = tileCount - 1;
  }
  if (playerY > tileCount - 1) {
    playerY = 0;
  }
  ctx.fillStyle = "#2A2232FF"; //bg
  ctx.fillRect(0, 0, canv.width, canv.height);
  scoreRecorder(score);
  if (dotX == playerX && dotY == playerY) {
    score++;
  }

  ctx.fillStyle = "#00C886FF"; //snake
  for (var i = 0; i < tailParts.length; i++) {
    ctx.fillRect(
      tailParts[i].x * gridSize,
      tailParts[i].y * gridSize,
      gridSize - tileGap,
      gridSize - tileGap
    );
    if (
      tailParts[i].x == playerX &&
      tailParts[i].y == playerY &&
      xVelos + yVelos != 0
    ) {
      if (
        !(keys[0] == "down" && keys[1] == "up") &&
        !(keys[0] == "up" && keys[1] == "down") &&
        !(keys[0] == "left" && keys[1] == "right") &&
        !(keys[0] == "right" && keys[1] == "left")
      ) {
        loose();
      }
    }
  }
  tailParts.push({ x: playerX, y: playerY });
  while (tailParts.length > tail) {
    tailParts.shift();
  }

  if (dotX == playerX && dotY == playerY) {
    tail++;
    dotX = random();
    dotY = random();
    for (var i = 0; i < tailParts.length; i++) {
      if (tailParts[i].x == dotX && tailParts[i].y == dotY) {
        tail--;
        dotX = random();
        dotY = random();
      }
    }
  }

  ctx.fillStyle = "#F90F59FF"; //dot
  ctx.fillRect(
    dotX * gridSize,
    dotY * gridSize,
    gridSize - tileGap,
    gridSize - tileGap
  );
}

const loose = () => {
  tail = 5;
  if (sessionStorage["hScore"] < score) sessionStorage["hScore"] = score;
  score = 0;
  if (sessionStorage["hScore"] > 0)
    document.getElementById("hScore").innerHTML = `Your highest score: ${
      sessionStorage["hScore"]
    } point`;
  if (sessionStorage["hScore"] > 1)
    document.getElementById("hScore").innerHTML += "s";
  pause();
};

const pause = () => {
  xVelos= yVelos = 0;
}

const keyPush = event => {
  switch(event.keyCode){
        case 37: //left
          xVelos=-1; yVelos=0; 
          pushKey('left');
          break;
        case 65:
          xVelos=-1; yVelos=0;
          pushKey('left');
          break;
        case 38://up
          xVelos=0; yVelos=-1; 
          pushKey('up');
          break;
        case 87:
          xVelos=0; yVelos=-1;
          pushKey('up');
          break;
        case 39://right
          xVelos=1; yVelos=0; 
          pushKey('right');
          break;
        case 68:
          xVelos=1; yVelos=0;
          pushKey('right');
          break;
        case 40://down
          xVelos=0; yVelos=1;
          pushKey('down');
          break;
        case 83:
          xVelos=0; yVelos=1;
          pushKey('down');
          break;
      }
}

const pushKey = key => {
  keys.splice(0,1);
  keys.push(key);
}

const scoreRecorder = i => {
  ctx.fillStyle = "#AFACB5FF";
  ctx.font = "bold 10pt Arial";
  ctx.fillText(i, 10, 20);
}

const random = () => {
  return Math.floor(Math.random()*tileCount);
}

swipes: (function(){
  var el = document.getElementById('body');
  var swipe = function(event,x,y){
    var vertical = new Hammer(el);
    var horizontal = new Hammer(el);
    vertical.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });

    if(event == "swipeup" || event == "swipedown"){
      vertical.on(event, function(ev) {xVelos=x; yVelos=y;});
    }else{
      horizontal.on(event, function(ev) {xVelos=x; yVelos=y;});
    }
  }
  swipe("swipeup", 0, -1);
  swipe("swipedown", 0, 1);
  swipe("swipeleft", -1, 0);
  swipe("swiperight", 1, 0);
}())