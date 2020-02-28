window.addEventListener('load', loadPage, false);

function loadPage() {

  var images = ["/images/self-portrait/self-portrait-2019.PNG"];
  var captions = ["Self-portrait"];
  var alt = ["Self portrait drawing"];
    
  for (i = 0; i < images.length; i++) {
   document.getElementById("img".concat((i+1).toString())).src = images[i];
   document.getElementById("img".concat((i+1).toString())).alt = alt[i];
   document.getElementById("capt".concat((i+1).toString())).innerHTML = captions[i];
}
}
