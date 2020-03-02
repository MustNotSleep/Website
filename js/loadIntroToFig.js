window.addEventListener('load', loadIntroToFigure, false);

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
    ["/images/intro_to_fig_draw/19.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/17.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/16.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/15.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/5.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/4.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/14.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/13.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/12.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/11.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/10.jpeg", "Figure drawing"],
    ["/images/intro_to_fig_draw/8.jpeg", "Figure drawing"]
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
