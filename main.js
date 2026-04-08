// ── NAVBAR SCROLL
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  }
});

// ── HAMBURGER
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    mobileMenu.classList.add('active');
  });
}

if (closeMenu) {
  closeMenu.addEventListener('click', closeMobile);
}

function closeMobile() {
  if (mobileMenu) {
    mobileMenu.classList.remove('active');
  }
}

// ── TYPEWRITER
const words = ['SSC Stenographer', 'DSSSB Steno', 'High Court', 'SSB Clerk', 'District Court', 'CPCT Exam'];
let wi = 0, ci = 0, del = false;
const tw = document.getElementById('typewriter');

function typeLoop() {
  if (!tw) return;
  if (!del) {
    tw.textContent = words[wi].slice(0, ++ci);
    if (ci === words[wi].length) {
      del = true;
      setTimeout(typeLoop, 1800);
      return;
    }
  } else {
    tw.textContent = words[wi].slice(0, --ci);
    if (ci === 0) {
      del = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(typeLoop, del ? 60 : 90);
}

if (tw) {
  typeLoop();
}

// ── REVEAL ON SCROLL
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

reveals.forEach(r => observer.observe(r));

// ── COUNT UP
function countUp(el, target, duration = 1800) {
  let start = 0;
  const step = target / (duration / 16);
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target.toLocaleString();
      clearInterval(timer);
      return;
    }
    el.textContent = Math.floor(start).toLocaleString();
  }, 16);
}

const statNums = document.querySelectorAll('[data-target]');
const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      countUp(e.target, parseInt(e.target.dataset.target));
      statObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(n => statObserver.observe(n));

// ── FORM SUBMIT
window.handleSubmit = function() {
  alert('✅ Thank you for your enquiry!\n\nWe will contact you within 24 hours.\n\nOr call us directly: 094669 93370');
};
