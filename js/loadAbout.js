window.addEventListener('load', loadPage, false);

function loadPage() {


  var images = [
        //{path: "/images/1.jpg", caption: "Rembrandt caption", alt_text: "Rembrandt, 1615", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"}
      ];

//set img ids
  for (i = 0; i < images.length; i++) {
   //set image location
   document.getElementById("img".concat((i+1).toString())).src = images[i].path;
   //set href
   document.getElementById("a".concat((i+1).toString())).href = images[i].path;
   //set caption
   document.getElementById("capt".concat((i+1).toString())).innerHTML = images[i].caption;
   //set caption in caption of a element (for use in magnific popup)
   document.getElementById("a".concat((i+1).toString())).setAttribute("caption",images[i].caption);
   //set caption hidden/visible
   document.getElementById("capt".concat((i+1).toString())).classList.add(images[i].caption_toggle);
   //set alt text
   document.getElementById("img".concat((i+1).toString())).alt = images[i].alt_text;
   //set class
   document.getElementById("img".concat((i+1).toString())).classList.add(images[i].display_class, images[i].gal_catergory);
}


for (var i in images) {

}



//hide unused elements
   for (i = images.length; i < 999; i++) {

    document.getElementById("a".concat((i+1).toString())).style.display = "none";
    document.getElementById("img".concat((i+1).toString())).style.dusplay = "none";
    document.getElementById("capt".concat((i+1).toString())).style.dusplay = "none";
  }
}
