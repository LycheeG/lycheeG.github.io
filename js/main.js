// Mobile Navigation Toggle
function toggleNav() {
  document.querySelector('.nav-links').classList.toggle('active');
}

// Close nav when clicking a link (mobile)
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function () {
  var navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 2px 30px rgba(0,0,0,0.1)';
  } else {
    navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.06)';
  }
});

// Gallery Lightbox
function openLightbox(el) {
  var img = el.querySelector('img');
  if (!img) return;
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox').classList.add('active');
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
}

