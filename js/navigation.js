window.addEventListener('load', loadNav, false);

function loadNav() {

  var pages = ["painting", "drawing", "contact"];
  
  
  for (i = 0; i < pages.length; i++) {
    
  document.getElementById("page".concat((i+1).toString())).href = "/".concat(pages[i].concat("/"));
  document.getElementById("page".concat((i+1).toString())).innerHTML = pages[i];
  
  }
}

