                                                   //Navigation Bar


function hideIconBar(){
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:none;");
    navigation.classList.remove("hide");
}

function showIconBar(){ 
    var iconBar = document.getElementById("iconBar");
    var navigation = document.getElementById("navigation");
    iconBar.setAttribute("style", "display:block;");
    navigation.classList.add("hide");
}


                                                  // SlideShow Section

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


                                                  // Pop-up Section



document.querySelector("#myImg1").addEventListener("click",function(){
  document.querySelector(".popup1").classList.add("active");
});

document.querySelector(".popup1 .popup-container1 .popup-close").addEventListener("click",function(){
  document.querySelector(".popup1").classList.remove("active");
});

document.querySelector("#myImg2").addEventListener("click",function(){
  document.querySelector(".popup2").classList.add("active");
});

document.querySelector(".popup2 .popup-container2 .popup-close").addEventListener("click",function(){
  document.querySelector(".popup2").classList.remove("active");
});

document.querySelector("#myImg3").addEventListener("click",function(){
  document.querySelector(".popup3").classList.add("active");
});

document.querySelector(".popup3 .popup-container3 .popup-close").addEventListener("click",function(){
  document.querySelector(".popup3").classList.remove("active");
});

document.querySelector("#myImg4").addEventListener("click",function(){
  document.querySelector(".popup4").classList.add("active");
});

document.querySelector(".popup4 .popup-container4 .popup-close").addEventListener("click",function(){
  document.querySelector(".popup4").classList.remove("active");
}); 