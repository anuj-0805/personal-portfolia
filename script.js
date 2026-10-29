/**
 * ==========================================================================
 * ABOUT ME — PERSONAL PORTFOLIO JAVASCRIPT
 * Clean, modern, vanilla JavaScript (ES6+).
 * Beginner-friendly with comprehensive comments for easy understanding.
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. DYNAMIC YEAR FOR FOOTER
  // ------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('currentYear');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // ------------------------------------------------------------------------
  // 2. MOBILE NAVIGATION MENU TOGGLE
  // ------------------------------------------------------------------------
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  const navLinksList = document.querySelectorAll('.nav-link');

  if (menuToggle && navLinks) {
    // Toggle menu when clicking hamburger button
    menuToggle.addEventListener('click', () => {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', !isExpanded);
      menuToggle.classList.toggle('is-active');
      navLinks.classList.toggle('is-open');
    });

    // Close menu when clicking on any link
    navLinksList.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('is-open');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !menuToggle.contains(e.target) && navLinks.classList.contains('is-open')) {
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.classList.remove('is-active');
        navLinks.classList.remove('is-open');
      }
    });
  }

  // ------------------------------------------------------------------------
  // 3. NAVBAR BACKGROUND ON SCROLL
  // ------------------------------------------------------------------------
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // ------------------------------------------------------------------------
  // 4. SCROLLSPY (ACTIVE LINK HIGHLIGHTING)
  // ------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const highlightNavOnScroll = () => {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        targetNavLink?.classList.add('active');
      } else {
        targetNavLink?.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll);

  // ------------------------------------------------------------------------
  // 5. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER)
  // ------------------------------------------------------------------------
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Unobserve after animation is triggered
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback for older browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('active'));
  }

  // ------------------------------------------------------------------------
  // 6. BACK TO TOP BUTTON
  // ------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // ------------------------------------------------------------------------
  // 7. CONTACT FORM VALIDATION & SIMULATION
  // ------------------------------------------------------------------------
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');
  const submitBtn = document.getElementById('submitBtn');

  if (contactForm) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const subjectError = document.getElementById('subjectError');
    const messageError = document.getElementById('messageError');

    // Email format validator
    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    // Clear individual error when typing
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
      if (!input) return;
      input.addEventListener('input', () => {
        input.classList.remove('is-invalid');
        const errorEl = document.getElementById(`${input.id}Error`);
        if (errorEl) errorEl.textContent = '';
        if (formStatus) formStatus.className = 'form-status';
      });
    });

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameError.textContent = 'Please enter your name.';
        nameInput.classList.add('is-invalid');
        isValid = false;
      } else {
        nameError.textContent = '';
        nameInput.classList.remove('is-invalid');
      }

      // Validate Email
      if (!emailInput.value.trim()) {
        emailError.textContent = 'Please enter your email address.';
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else if (!isValidEmail(emailInput.value.trim())) {
        emailError.textContent = 'Please enter a valid email address.';
        emailInput.classList.add('is-invalid');
        isValid = false;
      } else {
        emailError.textContent = '';
        emailInput.classList.remove('is-invalid');
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        subjectError.textContent = 'Please enter a subject.';
        subjectInput.classList.add('is-invalid');
        isValid = false;
      } else {
        subjectError.textContent = '';
        subjectInput.classList.remove('is-invalid');
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        messageError.textContent = 'Please write a message.';
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else if (messageInput.value.trim().length < 5) {
        messageError.textContent = 'Message should be at least 5 characters.';
        messageInput.classList.add('is-invalid');
        isValid = false;
      } else {
        messageError.textContent = '';
        messageInput.classList.remove('is-invalid');
      }

      // If invalid, stop
      if (!isValid) return;

      // Form is valid: Simulate submission
      const originalBtnContent = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span>Sending...</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="spin-slow"><circle cx="12" cy="12" r="10"/><path d="M12 2a10 10 0 0 1 10 10"/></svg>
      `;

      setTimeout(() => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnContent;

        // Show friendly success confirmation
        formStatus.textContent = '✨ Thank you! Your message was sent successfully. (Demo mode: Connect this form to services like Formspree or EmailJS when ready!)';
        formStatus.className = 'form-status success';

        // Clear input fields
        contactForm.reset();

        // Hide success message after 7 seconds
        setTimeout(() => {
          formStatus.className = 'form-status';
        }, 7000);
      }, 900);
    });
  }

  // ------------------------------------------------------------------------
  // 8. CARD HOVER 3D TILT EFFECT (Subtle interactive touch for desktop)
  // ------------------------------------------------------------------------
  const tiltCards = document.querySelectorAll('.glass-card');

  // Only apply tilt on non-touch devices
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within card
        const y = e.clientY - rect.top;  // y position within card

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -4; // Max -4deg to 4deg
        const rotateY = ((x - centerX) / centerX) * 4;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }
});

