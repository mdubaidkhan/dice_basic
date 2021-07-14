var x=Math.floor(Math.random()*5)+1;
var imagename="dice"+x+".png";
document.querySelectorAll("img")[0].setAttribute("src",imagename);
var y=Math.floor(Math.random()*5)+1;
var imagename="dice"+y+".png";
document.querySelectorAll("img")[1].setAttribute("src",imagename);
if (x>y){
  document.querySelector("h1").innerHTML="🚩player 1 wins";
}
else if(x===y){
  document.querySelector("h1").innerHTML="Its a draw";
}
else{
  document.querySelector("h1").innerHTML="🚩player 2 wins";
}
