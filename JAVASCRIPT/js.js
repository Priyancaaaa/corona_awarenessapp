alert(
  "Need good internet speed to load images in short time.Have a good experience"
);

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  // console.log(slides.length);
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
    console.log(dots[i].className);
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // console.log(slides);
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 3000);
}

var slideIndex2 = 0;
showSlides2();

function showSlides2() {
  var j;
  var slides2 = document.getElementsByClassName("mySlides2");
  var dots1 = document.getElementsByClassName("dot2");
  for (j = 0; j < slides2.length; j++) {
    slides2[j].style.display = "none";
  }
  slideIndex2++;
  if (slideIndex2 > slides2.length) {
    slideIndex2 = 1;
  }
  slides2[slideIndex2 - 1].style.display = "block";
  setTimeout(showSlides2, 4000);
}
