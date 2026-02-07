'use strict';


document.addEventListener('DOMContentLoaded', function () {
  const text = "Undergraduate & Junior Developer";
  const targetElement = document.getElementById('animated-text');
  let index = 0;
  let isReversed = false;

  function animateText() {
    const prefix = text.substring(0, 1);

    if (!isReversed) {
      if (index < text.length) {
        targetElement.innerHTML = prefix + text.substring(1, index + 1);
        index++;
      } else {
        isReversed = true;
      }
    } else {
      if (index > 0) {
        targetElement.innerHTML = prefix + text.substring(1, index - 1);
        index--;
      } else {
        isReversed = false;
      }
    }

    setTimeout(animateText, 200);
  }

  animateText();
});


document.addEventListener('DOMContentLoaded', function () {
  const modeToggle = document.getElementById('modeToggle');
  const modeLabel = document.getElementById('modeLabel');

  function toggleDarkMode() {
    document.body.classList.toggle('dark-mode', modeToggle.checked);
    
    modeLabel.innerHTML = modeToggle.checked ? '<i class="fi fi-rr-brightness"></i>' : '<i class="fi fi-rr-moon-stars"></i>';
  }

  modeToggle.addEventListener('change', toggleDarkMode);

  modeLabel.addEventListener('click', function () {
    modeToggle.checked = !modeToggle.checked;

    toggleDarkMode();
  });

  feather.replace();
});


document.addEventListener('DOMContentLoaded', function () {
  const resumeButton = document.getElementById('resumeButton');
  const heroSection = document.getElementById('home');

  function toggleResumeButtonVisibility() {
    const isInHeroSection = window.scrollY < heroSection.offsetHeight;

    console.log('Is in hero section:', isInHeroSection);

    if (isInHeroSection) {
    
      resumeButton.classList.remove('show');
    } else {
      resumeButton.classList.add('show');
    }
  }

  toggleResumeButtonVisibility();

  window.addEventListener('scroll', toggleResumeButtonVisibility);
  
  feather.replace();
});

/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}


/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
