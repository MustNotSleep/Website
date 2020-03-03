window.addEventListener('load', loadPage("/images/intro_to_fig_draw/2.jpeg", "Still life", "Still life painting"), false);

function loadPage(url, caption, alt_text) {

 
   //set image location
   document.getElementById("img".concat((i+1).toString())).src = url;
   //set caption
   document.getElementById("capt".concat((i+1).toString())).innerHTML = caption;
   //set alt text
   document.getElementById("img".concat((i+1).toString())).alt = alt_text;

}
