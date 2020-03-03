window.addEventListener('load', loadPage("/images/intro_to_fig_draw/2.jpeg", "Still life", "Still life painting"), false);

function loadPage(url, caption, alt_text) {

 
   //set image location
   document.getElementById("img1").src = url;
   //set caption
   document.getElementById("capt1").innerHTML = caption;
   //set alt text
   document.getElementById("img1").alt = alt_text;

}
