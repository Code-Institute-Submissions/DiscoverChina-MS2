// More info China btn
function factsChina() {
  var factsChina = document.getElementById("factsChinaHidden");
  if (factsChina.style.display === "none") {
    factsChina.style.display = "block";
  } else {
    factsChina.style.display = "none";
  }
}

// To Top Button https://css-tricks.com/how-to-make-an-unobtrusive-scroll-to-top-button/
var scrollToTopBtn = document.getElementById("scrollToTopBtn")
var rootElement = document.documentElement
function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
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
  const options = $('.options');

  for (i = 0; i < options.length; i++) {
    options[i].style.display = "none";
  }

  document.getElementById(chosen).style.display = "block";
}

  




