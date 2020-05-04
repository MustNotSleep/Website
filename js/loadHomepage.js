window.addEventListener('load', loadPage, false);

function loadPage() {

  //image objects consisting of image location, caption, and alt text
  var images = [
  ];
  
  
  for (i = 0; i < images.length; i++) {
   //set image location
   document.getElementById("img".concat((i+1).toString())).src = images[i][0];
   //set caption
   document.getElementById("capt".concat((i+1).toString())).innerHTML = images[i][1];
   //set alt text
   document.getElementById("img".concat((i+1).toString())).alt = images[i][2];
}
  
   for (i = images.length; i < 21; i++) {
  
    document.getElementById("frame".concat((i+1).toString())).style.padding = "0";
    document.getElementById("frame".concat((i+1).toString())).style.height = "0";
  }
}

