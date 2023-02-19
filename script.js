var som = document.getElementById("som");

$(".menu div").mouseover(function(){
  som.pause();
  som.currentTime = 0;
  som.play();
});