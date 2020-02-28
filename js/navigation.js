window.addEventListener('load', loadNav, false);

function loadNav() {

  var pages = ["painting", "drawing", "contact"];
  
  document.getElementById("page1").href = "/".concat(pages[0].concat("/"));
  document.getElementById("page1").innerHTML = pages[0];
  
  document.getElementById("page2").href = "/".concat(pages[1].concat("/"));
  document.getElementById("page2").innerHTML = pages[1];
  
  document.getElementById("page3").href = "/".concat(pages[2].concat("/"));
  document.getElementById("page3").innerHTML = pages[2];
}

