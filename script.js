let slideIndex = 1;
const prevslid = document.getElementById('prev');
const nextslid = document.getElementById('next');
const doted = document.getElementsByClassName('dot');

function plusSlides(n) {
  showSlides(slideIndex += n);
}

prevslid.onclick = plusSlides(-1);
nextslid.onclick = plusSlides(1);

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  let dots = document.getElementsByClassName('dot');
  if (n > slides.length) { slideIndex = 1 }    
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
  slides[i].style.display = 'none';  
}

for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace('active', '');
  }
  slides[slideIndex-1].style.display = 'block';  
  dots[slideIndex-1].className += 'active';
}

showSlides(slideIndex);

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

const mySidebar = document.getElementById('mySidebar');

function w3Open() {
  if (mySidebar.style.display === 'block') {
    mySidebar.style.display = 'none';
  } else {
    mySidebar.style.display = 'block';
  }
}

function w3Close() {
  mySidebar.style.display = 'none';
}

const drawerLink = document.getElementById('drawer');
drawerLink.onclick = w3Open;

const closeLinks = document.getElementsByClassName('close');
Array.from(closeLinks).forEach((closeLink) => {
  closeLink.onclick = w3Close;
});
