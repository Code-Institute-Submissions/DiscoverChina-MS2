// Auto hero image / slideshow
var i = 0; 
var images = [];
var time = 3000;

images[0] = 'assets/images/shanghaiSlideImg.jpg';
images[1] = 'assets/images/beijingSlideImg.jpg';
images[2] = 'assets/images/hongKongSlideImg.jpg';

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

// To Top Button https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
//Get the button:
mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// Chosen between shanghai beijing hong-kong
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

  




