function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('-translate-y-400');
}


const documentDirection = document.documentElement.dir;

if(documentDirection == "rtl")
{
  // carousel slider

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  
  // Calculate the offset for RTL
  const offset = currentSlide * 100; // Change to positive for RTL
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Optional: Auto slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

// Initial display
showSlide(currentSlide);
}

else{
// carousel slider

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  if (index >= slides.length) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide = index;
  }
  
  const offset = -currentSlide * 100;
  document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

// Optional: Auto slide every 5 seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

// Initial display
showSlide(currentSlide);
}
