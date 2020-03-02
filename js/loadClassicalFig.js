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
 
    for (i = images.length; i < 21; i++) {
    document.getElementById("cf_res".concat((i+1).toString())).style.display = "none";
    document.getElementById("cf_img".concat((i+1).toString())).style.display = "none";
    document.getElementById("cf_gal".concat((i+1).toString())).style.display = "none";
  }
}
