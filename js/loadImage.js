window.addEventListener('load', loadPage("/images/25BFF15E-EBE2-493F-B200-2BF65D27AA2B.jpeg", "Still life", "Still life painting"), false);

function loadPage(url, caption, alt_text) {

  //image objects consisting of image location, caption, and alt text
  var images = [
    [url, caption, alt_text]
  ];
  
   //set image location
   document.getElementById("img1").src = images[0][0];
   //set caption
   document.getElementById("capt1").innerHTML = images[0][1];
   //set alt text
   document.getElementById("img1").alt = images[0][2];

}
