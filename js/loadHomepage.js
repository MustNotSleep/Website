window.addEventListener('load', loadPage, false);

function loadPage() {

  var images = ["/images/self-portrait.JPG", "/images/self-portrait.JPG"]
  var captions = ["Self-portrait, 2019", "test2"]
  var alt = ["Self-portrait", "test2"]
  
  var elem = document.getElementById("img1");
  
  
  for (i = 0; i < images.length; i++) {
    document.getElementById("img".concat(i.toStr())).src = images[i];
   document.getElementById("img".concat(i.toStr())).innerHTML = captions[i];
}
}
