  
window.addEventListener('load', loadPage(), false);

function loadPage(p1, p2, p3) {

  //image objects consisting of image location, caption, and alt text
  var images = [
    [p1, p2, p3]
  ];
  
   //set image location
   document.getElementById("img1").src = images[0][0];
   //set caption
   document.getElementById("capt1").innerHTML = images[0][1];
   //set alt text
   document.getElementById("img1").alt = images[0][2];

}
