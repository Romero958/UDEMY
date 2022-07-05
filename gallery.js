/*Name this external file gallery.js*/
function upDate(previewPic){
  
    var src = previewPic.getAttribute('src');

   document.getElementById('image').style.backgroundImage = "url('" +src+ "')";
   document.getElementById('image').style.backgroundColor = "red";
   document.getElementById('image').innerHTML= previewPic.alt;


  }

function unDo(){
  document.getElementById('image').style.backgroundImage = "none";
  document.getElementById('image').style.backgroundColor = "#8e68ff";
  document.getElementById('image').innerHTML= "Hover over an image from below to display here." ;
   
   
   }
   