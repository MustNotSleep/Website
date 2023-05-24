function validate() {
  var user_password = document.getElementById("access_code").value.trim().toLowerCase();
  //alert(user_password);
  var stored_passwords = new Array('super secret', 'diana', 'mark');

  //alert(stored_passwords.indexOf(user_password));

  //a very not secure way to password protect a static page
  //it doesn't actually matter if anyone accesses this, this is just to nudge anyone who find this page back to where they came from
  if (stored_passwords.indexOf(user_password) != -1)
  {
    document.getElementById('user_entry').style.display = "none";
    document.getElementById('filters').style.display = "block";
    document.getElementById('images').style.display = "unset";
    loadPage('all');
  }
  else {
    document.getElementById("accessCodeError").style.display = "flex";
  }

}


function loadPage(filter_name) {
  

  /*
  path = path to file in local directory (e.g. /images/1.kpg
  caption  = text caption that can be displayed beneath image in either hero or spotlight display
  alt_text = for screenreaders
  display_class: either hero (centered, large, top of page, less margin above image than spotlight), spotlight (centered, large, margin all around), or regular (small, displays in grid if screen is large enough)
  caption_toggle: either visible_capt or hidden_capt - hides or displays the caption. Captions should be hidden if display_class is regular, but may be visible or hidden for other displays
  gal_category: category the image falls under (e.g. landscape, still_life) - used for filtering images
  */
  
  
  var images = [
        {path: "/images/1.jpg", caption: "2022", alt_text: "", display_class: "hero", caption_toggle: "visible_capt", gal_catergory: "still_life"},
        {path: "/images/2.jpg", caption: "2021", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "still_life"},
        {path: "/images/3.jpg", caption: "2021", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "still_life"},
        {path: "/images/4.jpg", caption: "2021", alt_text: "", display_class: "regular", caption_toggle: "hidden_capt", gal_catergory: "still_life"},
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
   //set classes
   document.getElementById("img".concat((i+1).toString())).classList.add(images[i].display_class, 'all');
   document.getElementById("img".concat((i+1).toString())).classList.add(images[i].display_class, images[i].gal_catergory);


   if (document.getElementById("img".concat((i+1).toString())).classList.contains(filter_name))
   {
     document.getElementById("img".concat((i+1).toString())).style.display = "inherit";
     document.getElementById("capt".concat((i+1).toString())).classList.add(images[i].caption_toggle);
   }
   else {
     document.getElementById("img".concat((i+1).toString())).style.display = "none";
     //hard code hide caption when filtered out - using display = none doesn't work because it can't be easily reset like images can
     document.getElementById("capt".concat((i+1).toString())).classList.add("hidden_capt");
   }
 }


//hide unused elements
   for (i = images.length; i < 199; i++) {

    document.getElementById("a".concat((i+1).toString())).style.display = "none";
    document.getElementById("img".concat((i+1).toString())).style.display = "none";
    document.getElementById("capt".concat((i+1).toString())).style.display = "none";
  }
}

function setFilter(filter_name){
    loadPage(filter_name);

}
