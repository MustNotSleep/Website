window.addEventListener('load', loadPage, false);

function loadPage() {

//display_class options: hero, spotlight, regular
  var images = [
        {path: "/images/Rembrandt_mastercopy.jpg", caption: "Master copy, Rembrandt at 63", alt_text: "Master copy, Rembrandt at 63", display_class: "hero", caption_toggle: "hidden_capt", gal_catergory: "portrait"},
        /*{path: "/images/2.jpg", caption: "Test caption, 20x40, 2020", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "landscape"},
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
        {path: "/images/8.jpg", caption: "", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "portrait"},*/
      ];

//set img ids
  var randomNum = Math.floor(Math.random()*images.length);
   //set image location
   document.getElementById("img1").src = images[randomNum].path;
   //set href
   document.getElementById("a1").href = images[randomNum].path;
   //set caption
   document.getElementById("capt1").innerHTML = images[randomNum].caption;
   //set caption in caption of a element (for use in magnific popup)
   document.getElementById("a".concat((i+1).toString())).setAttribute("caption",images[randomNum].caption);
   //set caption hidden/visible
   document.getElementById("capt1").classList.add(images[randomNum].caption_toggle);
   //set alt text
   document.getElementById("img1").alt = images[randomNum].alt_text;
   //set class
   document.getElementById("img1").classList.add(images[randomNum].display_class, images[randomNum].gal_catergory);


}
