window.addEventListener('load', loadNav, false);

function loadNav() {

  //pages to appear in banner, stored as page name and URL
  var pages = [
    ["painting", "/painting/"], 
    ["drawing", "/drawing/"],
    ["contact", "/contact/"]
  ];
  
  
  for (i = 0; i < pages.length; i++) {
  
  //set page name
  document.getElementById("page".concat((i+1).toString())).innerHTML = pages[i][0];
  //set URL
  document.getElementById("page".concat((i+1).toString())).href = pages[i][1];
 
  }
}

