let slideIndex = 1;
const prevslid = document.getElementById('prev');
const nextslid = document.getElementById('next');
const doted = document.getElementsByClassName('dot');

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('mySlides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i += 1) {
    slides[i].style.display = 'none';
  }

  for (i = 0; i < dots.length; i += 1) {
    dots[i].className = dots[i].className.replace('active', '');
  }
  slides[slideIndex - 1].style.display = 'block';
  dots[slideIndex - 1].className += 'active';
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

prevslid.onclick = function () {
  plusSlides(-1);
};

nextslid.onclick = function () {
  plusSlides(1);
};

showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

const dots = Array.from(doted); // Convert the HTMLCollection to an array

dots.forEach((dot, index) => {
  dot.onclick = function () {
    currentSlide(index + 1);
  };
});

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
