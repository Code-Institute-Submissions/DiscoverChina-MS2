var i = 0; 
var images = [];
var time = 3000;

images[0] = 'assets/images/beijing.jpg';
images[1] = 'assets/images/beijing-2.jpg';
images[2] = 'assets/images/shanghai.jpg';

function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    } else {
        i = 0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;

// More info China btn
function factsChina() {
  var factsChina = document.getElementById("factsChinaHidden");
  if (factsChina.style.display === "none") {
    factsChina.style.display = "block";
  } else {
    factsChina.style.display = "none";
  }
}

// Chosen betwween shanghai beijing hong-kong

function chooseCategorie(chosen) {
    const options = document.getElementsByClassName("options");
  
    for (i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
  
    document.getElementById(chosen).style.display = "inline-block";
  }
  
  function choosePlace(chosen) {
    //const options = document.getElementsByClassName("info");
    const options = $('.secondOptions');
    const info = $('.info');

    for (i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }

    for (let x = 0; x < info.length; x++) {
        info[x].style.display = "none";
    }
  
    document.getElementById(chosen).style.display = "block";
  }

   function chooseInfo(chosen) {
    //const options = document.getElementsByClassName("secondOptions");
    const options = $('.options');

    for (i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
  
    document.getElementById(chosen).style.display = "block";
  }
  
 /* Modal */

 var infoImages = document.querySelectorAll(".info-img");
 for ( i = 0; i < infoImages.length; i++) {
   document.getElementsByClassName("info-img").addEventListener("click", );
 }
 
 infoImages.onClick = function() {
     
 }
  




