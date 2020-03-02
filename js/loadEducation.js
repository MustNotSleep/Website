window.addEventListener('load', loadClassicalFigure, false);

function loadClassicalFigure() {

  //Drawing the Classical Figure
  //image objects consisting of image location and alt text (no caption)
  var images = [
    ["/images/classical_figure/1.jpg", "Figure drawing"],
    ["/images/classical_figure/2.jpg", "Figure drawing"]
  ];
  
  for (i = 0; i < images.length; i++) {
  
   //set image location
   document.getElementById("cf_img".concat((i+1).toString())).src = images[i][0];
   //set alt text
   document.getElementById("cf_img".concat((i+1).toString())).alt = images[i][1];
    
  }
}

function loadAtelierDrawing() {

    for (i = 0; i < images.length; i++) {
  
    //Atelier Drawing
    //image objects consisting of image location, caption, and alt text
  var images = [
    ["/images/self-portrait/self-portrait-2019.PNG", "Self-portrait", "Self portrait drawing"],
    ["/images/self-portrait/self-portrait-2019.PNG", "Self-portrait2", "Self portrait drawing2"],
    ["/images/self-portrait/self-portrait-2019.PNG", "Self-portrait3", "Self portrait drawing3"]
  ];
  
   //set image location
   document.getElementById("img".concat((i+1).toString())).src = images[i][0];
   //set caption
   document.getElementById("capt".concat((i+1).toString())).innerHTML = images[i][1];
   //set alt text
   document.getElementById("img".concat((i+1).toString())).alt = images[i][2];
    
  }
  
  function loadIntroToFig() {
    for (i = 0; i < images.length; i++) {
    
    //Intro to Figure Drawing
    //image objects consisting of image location, caption, and alt text
  var images = [
    ["/images/self-portrait/self-portrait-2019.PNG", "Self-portrait", "Self portrait drawing"],
    ["/images/self-portrait/self-portrait-2019.PNG", "Self-portrait2", "Self portrait drawing2"],
    ["/images/self-portrait/self-portrait-2019.PNG", "Self-portrait3", "Self portrait drawing3"]
  ];
  
   
   //set image location
   document.getElementById("img".concat((i+1).toString())).src = images[i][0];
   //set caption
   document.getElementById("capt".concat((i+1).toString())).innerHTML = images[i][1];
   //set alt text
   document.getElementById("img".concat((i+1).toString())).alt = images[i][2];
    
  }
  
  

}

