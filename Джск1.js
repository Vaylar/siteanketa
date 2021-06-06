/*печатаемые текст*/
var i = 0;
var txt = '+380676016324'; 
var speed = 100; 
function typeWriter() {
  i = 0;
  document.getElementById("typeTarget").innerHTML = "";
  write();
}

function write(){
  if (i < txt.length) {
    document.getElementById("typeTarget").innerHTML += txt.charAt(i);
    i++;
    setTimeout(write, speed);
  }
}