window.addEventListener('load', loadPage("/images/25BFF15E-EBE2-493F-B200-2BF65D27AA2B.jpeg", "Still life", "Still life painting"), false);

function loadPage(url, caption, alt_text) {

  //image objects consisting of image location, caption, and alt text
  var images = [
    [url, caption, alt_text]
  ];
  
  for (i = 0; i < images.length; i++) {
   //set image location
   document.getElementById("img".concat((i+1).toString())).src = images[i][0];
   //set caption
   document.getElementById("capt".concat((i+1).toString())).innerHTML = images[i][1];
   //set alt text
   document.getElementById("img".concat((i+1).toString())).alt = images[i][2];
}
    for (i = images.length; i < 99; i++) {
  
      document.getElementById("frame".concat((i+1).toString())).style.padding = "0";
      document.getElementById("frame".concat((i+1).toString())).style.height = "0";
    
  }
}
