function randomImage() {

  var randomNum = Math.floor(Math.random()*6)+1;
  var randomStr = randomNum.toString();
  var elem = document.getElementById("randImg");
  document.getElementById("randImg").src = "/images/".concat(randomStr.concat(".jpg"));
}
