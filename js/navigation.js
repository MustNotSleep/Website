function loadNav() {

        var pages = [

          { 
            "name":"painting", 
            "url":"/painting/" 
          },
          { 
            "name":"drawing", 
            "url":"/drawing/" 
          },
          { 
            "name":"contact", 
            "url":"/contact/" },
          ]
        }

        ];

  document.getElementById("page1").href = pages.url[0];
  document.getElementById("page1").innerHTML = pages.name[0];
}

