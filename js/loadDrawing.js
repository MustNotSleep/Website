window.addEventListener('load', loadPage, false);

  //image objects consisting of image location, caption, and alt text
  var images = [
    ["/images/self-portrait/self-portrait-2019.PNG", "Self-portrait", "Self portrait drawing"],
    ["/images/self-portrait/self-portrait-2019.PNG", "Self-portrait2", "Self portrait drawing2"],
    ["/images/self-portrait/self-portrait-2019.PNG", "Self-portrait3", "Self portrait drawing3"]
  ];
  


function loadPage() {

  for (i = 0; i < images.length; i++) {
   //set image location
   document.getElementById("img".concat((i+1).toString())).src = images[i][0];
   //set caption
   document.getElementById("capt".concat((i+1).toString())).innerHTML = images[i][1];
   //set alt text
   document.getElementById("img".concat((i+1).toString())).alt = images[i][2];
    
  }
  
  for (i = images.length; i < 10; i++) {
    document.getdocument.getElementById("frame".concat((i+1).toString())).setAttribute("padding", 0);
  }
  
}
