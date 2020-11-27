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

// Chosen betwween shanghai beijing hong-kong

function chooseCategorie(chosen) {
    const options = document.getElementsByClassName("options");
  
    for (i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
  
    document.getElementById(chosen).style.display = "flex";
  }
  
  function choosePlace(chosen) {
    const options = document.getElementsByClassName("info");
    for (i = 0; i < options.length; i++) {
      options[i].style.display = "none";
    }
  
    document.getElementById(chosen).style.display = "block";
  }