//кнопка мой телефон
function myFunction() {
  var x = document.getElementById("myDIV");
  var displayValue = window.getComputedStyle(x).display;
  if (displayValue === "none") {
      x.style.display = "block";
  } else {
      x.style.display = "none";
  }
}