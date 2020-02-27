function randomImage() {

  var randomNum = Math.floor(Math.random()*6)+1;
  var randomStr = randomNum.toString();
  var elem = document.getElementById("randImg");
  var captions = ["test1", "test2", "test3", "test4", "test5", "test6"]
  document.getElementById("randImg").src = "/images/unsubscribed/".concat(randomStr.concat(".jpg"));
  document.getElementById("randCaption").innerHTML = captions[randomNum-1];
}
