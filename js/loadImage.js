window.addEventListener('load', loadPage, false);

function loadPage() {

  //image objects consisting of image location, caption, and alt text
  var images = [
    ["/images/25BFF15E-EBE2-493F-B200-2BF65D27AA2B.jpeg", "Still life", "Still life painting"]
  ];
  
   //set image location
   document.getElementById("img1").src = images[0][0];
   //set caption
   document.getElementById("capt1").innerHTML = images[0][1];
   //set alt text
   document.getElementById("img1").alt = images[0][2];

}
