window.addEventListener('load', validate, false);

function validate() {
  var user_password = window.prompt('Enter password').toLowerCase();

  var stored_passwords = new Array('super secure', 'diana', 'mark');

  alert(stored_passwords.indexOf(user_password));

  //a very not secure way to password protect a static page
  //it doesn't actually matter if anyone accesses this, this is just to nudge anyone who find this page back to where they came from
  if (stored_passwords.indexOf(user_password) != -1)
  {
    loadPage();
  }
  else {
    history.back();
  }

}


function loadPage() {

var images = [
        {path: "/images/1.jpg", caption: "Rembrandt caption", alt_text: "Rembrandt, 1615", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/2.jpg", caption: "Test caption, 20x40, 2020", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "landscape"},
        {path: "/images/3.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/4.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/5.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/6.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/7.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/8.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/2.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "landscape"},
        {path: "/images/3.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/4.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/5.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/6.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/7.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/8.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/2.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "landscape"},
        {path: "/images/3.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/4.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/5.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/6.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/7.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/8.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/2.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "landscape"},
        {path: "/images/3.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/4.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/5.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/6.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/7.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/8.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/2.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "landscape"},
        {path: "/images/3.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/4.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/5.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/6.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/7.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        {path: "/images/8.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
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



//hide unused elements
   for (i = images.length; i < 999; i++) {

    document.getElementById("a".concat((i+1).toString())).style.display = "none";
    document.getElementById("img".concat((i+1).toString())).style.dusplay = "none";
    document.getElementById("capt".concat((i+1).toString())).style.dusplay = "none";
  }
}
