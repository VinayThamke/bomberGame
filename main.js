let td = document.querySelectorAll('td');
let img = document.querySelectorAll("img");
let counter = document.getElementById('score');
let clickAudio = new Audio("click.wav");
let explosionAudio = new Audio("explosion.wav");
let gameOver = new Audio("endgame.wav");

let i = 0;
let j = 0;
let score = 0;
let x = Math.floor((Math.random()* 16) + 1);
let y = Math.floor((Math.random()* 16) + 1);
console.log(x,y)

if(x==y)
{
  if(x==15)
  {
    y = y - 1
  }else{
    y = y + 1;
  }
  console.log(x, y);
}

for (let j=0; j<16; j++)
{
  td[j].addEventListener("click", function(e){
    if(j==x || j==y)
    {
      img[j].src = "bomb.png";
      explosionAudio.play();
      gameOver.play();
      alert("Game Over");
    }
    else {
      img[j].src = "smiley.png";
      clickAudio.play();
      score += 1;
      counter.innerHTML = score;
      this.removeEventListener('click', arguments.callee);
    }
  });
  
}
