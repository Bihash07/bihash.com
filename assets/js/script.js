'use strict';

const roles = [
  'Immersive UI experiences',
  'Automation-first QA systems',
  'High-performance web apps',
  'Design systems with depth'
];

const header = document.querySelector('[data-header]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const navbarLinks = document.querySelectorAll('[data-nav-link]');
const backTopBtn = document.querySelector('[data-back-to-top]');
const resumeButton = document.getElementById('resumeButton');
const heroSection = document.getElementById('home');
const loader = document.querySelector('[data-loader]');
const animatedText = document.getElementById('animated-text');
const revealItems = document.querySelectorAll('[data-reveal]');
const skillBars = document.querySelectorAll('.skill-bar span');

const typingState = {
  roleIndex: 0,
  charIndex: 0,
  isDeleting: false
};

const typeText = () => {
  const currentRole = roles[typingState.roleIndex];
  const text = typingState.isDeleting
    ? currentRole.substring(0, typingState.charIndex - 1)
    : currentRole.substring(0, typingState.charIndex + 1);

  animatedText.textContent = text;
  typingState.charIndex += typingState.isDeleting ? -1 : 1;

  if (!typingState.isDeleting && typingState.charIndex === currentRole.length) {
    typingState.isDeleting = true;
    setTimeout(typeText, 1200);
    return;
  }

  if (typingState.isDeleting && typingState.charIndex === 0) {
    typingState.isDeleting = false;
    typingState.roleIndex = (typingState.roleIndex + 1) % roles.length;
  }

  setTimeout(typeText, typingState.isDeleting ? 60 : 120);
};

typeText();

if (navToggleBtn) {
  navToggleBtn.addEventListener('click', function () {
    header.classList.toggle('nav-active');
    this.classList.toggle('active');
  });
}

navbarLinks.forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-active');
    navToggleBtn.classList.remove('active');
  });
});

const toggleResumeButtonVisibility = () => {
  if (!resumeButton || !heroSection) return;
  const isInHeroSection = window.scrollY < heroSection.offsetHeight - 120;
  resumeButton.classList.toggle('show', !isInHeroSection);
};

const toggleHeaderState = () => {
  if (window.scrollY >= 80) {
    header.classList.add('active');
    backTopBtn.classList.add('active');
  } else {
    header.classList.remove('active');
    backTopBtn.classList.remove('active');
  }
};

window.addEventListener('scroll', () => {
  toggleHeaderState();
  toggleResumeButtonVisibility();
});

toggleHeaderState();

toggleResumeButtonVisibility();

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const delay = entry.target.getAttribute('data-delay');
        if (delay) {
          entry.target.style.transitionDelay = `${delay}ms`;
        }
        entry.target.classList.add('is-visible');
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const skillsObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        skillBars.forEach((bar) => {
          const level = bar.getAttribute('data-skill');
          bar.style.width = `${level}%`;
        });
        observer.disconnect();
      }
    });
  },
  { threshold: 0.4 }
);

if (skillBars.length) {
  skillsObserver.observe(document.querySelector('.skills'));
}

window.addEventListener('load', () => {
  if (loader) {
    loader.classList.add('is-hidden');
  }
});

if (window.feather) {
  window.feather.replace();
}
