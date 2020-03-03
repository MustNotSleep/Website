window.addEventListener('load', loadClassicalFigure, false);
window.addEventListener('load', loadAtelierDrawing, false);
window.addEventListener('load', loadIntroToFigure, false);

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

function loadAtelierDrawing() {

  //Drawing the Classical Figure
  //image objects consisting of image location and alt text (no caption)
  var images = [
    ["/images/atelier_drawing/1.jpeg", "Cast drawing"],
    ["/images/atelier_drawing/2.jpeg", "Cast drawing"]
  ];
  
  for (i = 0; i < images.length; i++) {
  
   //set image location
   document.getElementById("ad_img".concat((i+1).toString())).src = images[i][0];
   //set alt text
   document.getElementById("ad_img".concat((i+1).toString())).alt = images[i][1];
    
  }

    for (i = images.length; i < 21; i++) {
    document.getElementById("ad_res".concat((i+1).toString())).style.display = "none";
    document.getElementById("ad_img".concat((i+1).toString())).style.display = "none";
    document.getElementById("ad_gal".concat((i+1).toString())).style.display = "none";
  }
}

function loadIntroToFigure() {

  //Drawing the Classical Figure
  //image objects consisting of image location and alt text (no caption)
  var images = [
    ["/images/intro_to_fig_draw/2.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/7.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/1.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/18.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/3.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/6.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/9.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/19.jpeg", "Figure drawing"]
  ];
  
  for (i = 0; i < images.length; i++) {
  
   //set image location
   document.getElementById("if_img".concat((i+1).toString())).src = images[i][0];
   //set alt text
   document.getElementById("if_img".concat((i+1).toString())).alt = images[i][1];
    
  }
  
      for (i = images.length; i < 21; i++) {
    document.getElementById("if_res".concat((i+1).toString())).style.display = "none";
    document.getElementById("if_img".concat((i+1).toString())).style.display = "none";
    document.getElementById("if_gal".concat((i+1).toString())).style.display = "none";
  }
}
