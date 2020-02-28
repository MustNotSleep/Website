window.addEventListener('load', loadNav, false);

function loadNav() {

  var pages = [
    ["painting", "/painting/"], 
    ["drawing", "/drawing/"], 
    ["contact", "/contact/"]
  ];
  
  
  for (i = 0; i < pages.length; i++) {
    
  document.getElementById("page".concat((i+1).toString())).innerHTML = pages[i][0];
  document.getElementById("page".concat((i+1).toString())).href = pages[i][1];
 
  }
}

