window.addEventListener('load', randomImage, false);

function randomImage() {

  var images = [
    ["/images/self-portrait.JPG", "Self-portrait, 2019", "Self-portrait drawing"]
  ];
  
  
  var randomNum = Math.floor(Math.random()*images.length)+1;
  document.getElementById("randImg").src = images[randomNum][0]
  document.getElementById("randCaption").innerHTML =images[randomNum][1]
  document.getElementById("randImg").alt = images[randomNum][2]
}
