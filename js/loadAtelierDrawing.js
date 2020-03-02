window.addEventListener('load', loadAtelierDrawing, false);


function loadClassicalFigure() {

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


  }
  
    for (i = images.length; i < 26; i++) {
    document.getElementById("ad_img".concat((i+1).toString())).style.display = "none";
    document.getElementById("ad_gal".concat((i+1).toString())).style.padding = "0";
    document.getElementById("ad_gal".concat((i+1).toString())).style.margin = "0";
    document.getElementById("ad_gal".concat((i+1).toString())).style.height = "0";
  }
}
