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


/// Get the modal 1
var modalone = document.getElementById("myModalone");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgone = document.getElementsByClassName("myImgone");
var modalImgone = document.getElementById("imgone");
var captionTextone = document.getElementById("captionone");
imgone.onclick = function(){
  modalone.style.display = "block";
  modalImgone.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var spanone = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
spanone.onclick = function() {
  modalone.style.display = "none";
}

/// Get the modal 2
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg2");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
