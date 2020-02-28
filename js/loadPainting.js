window.addEventListener('load', loadPage, false);

function loadPage() {

  var images = ["/images/25BFF15E-EBE2-493F-B200-2BF65D27AA2B.jpeg"];
  var captions = ["Still life"];
  var alt = ["Still life painting"];
    
  for (i = 0; i < images.length; i++) {
   document.getElementById("img".concat((i+1).toString())).src = images[i];
   document.getElementById("img".concat((i+1).toString())).alt = alt[i];
   document.getElementById("capt".concat((i+1).toString())).innerHTML = captions[i];
}
}
