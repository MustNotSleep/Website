function randomImage() {

  var randomNum = Math.floor(Math.random()*6)+1;
  var randomStr = randomNum.toString();
  var elem = document.getElementById("para1");
  document.getElementById("para1").innerHTML = "/images/".concat(randomStr.concat(".jpg"));
}
