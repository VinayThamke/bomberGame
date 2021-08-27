var td = document.querySelectorAll('td');
var img = document.querySelectorAll("img");
var counter = document.getElementById('score');
var clickAudio = new Audio("click.wav");
var explosionAudio = new Audio("explosion.wav");
var gameOver = new Audio("endgame.wav");

var i = 0;
var j = 0;
var score = 0;
var x = Math.floor((Math.random()* 16) + 1);

for (let j=0; j<16; j++)
{
  td[j].addEventListener("click", function(){
    if(j==x)
    {
      img[j].src = "bomb.png";
      explosionAudio.play();
      gameOver.play();
      // break;
    }
    else {
      img[j].src = "smiley.png";
      clickAudio.play();
      score += 1;
      counter.innerHTML = score;
    }
  });
}
