window.addEventListener('DOMContentLoaded', () => {
  // Check if GSAP loaded properly
  if (typeof gsap === 'undefined') {
    console.error("GSAP is not loaded. Check your internet connection or CDN links.");
    return;
  }

  // Register ScrollTrigger
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 1. Floating Blobs Animation
  gsap.to(".blob-1", {
    x: 40,
    y: 30,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".blob-2", {
    x: -50,
    y: -40,
    duration: 8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  gsap.to(".blob-3", {
    x: 30,
    y: -50,
    duration: 7,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });

  // 2. Hero Section Entrance Animation
  const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

  heroTl.from(".navbar", {
    y: -60,
    opacity: 0,
    duration: 1
  })
  .from(".hero-card .badge", {
    y: 20,
    opacity: 0,
    duration: 0.6
  }, "-=0.4")
  .from(".hero-card h1", {
    y: 30,
    opacity: 0,
    duration: 0.8
  }, "-=0.3")
  .from(".hero-card p", {
    y: 20,
    opacity: 0,
    duration: 0.6
  }, "-=0.4")
  .from(".hero-actions .btn", {
    y: 20,
    opacity: 0,
    stagger: 0.2,
    duration: 0.6
  }, "-=0.3")
  .from(".stat-item", {
    y: 30,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
    onComplete: animateCounters
  }, "-=0.2");

  // Counter Animation
  function animateCounters() {
    const statNumbers = document.querySelectorAll(".stat-item h3");
    statNumbers.forEach(stat => {
      const text = stat.innerText;
      if (text.includes("5,000") || text.includes("5000")) {
        let count = { val: 0 };
        gsap.to(count, {
          val: 5000,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => { stat.innerText = Math.floor(count.val).toLocaleString() + "+"; }
        });
      } else if (text.includes("50")) {
        let count = { val: 0 };
        gsap.to(count, {
          val: 50,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => { stat.innerText = Math.floor(count.val) + "+"; }
        });
      }
    });
  }

  // 3. ScrollTrigger Animations
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.utils.toArray(".section-title").forEach(title => {
      gsap.from(title, {
        scrollTrigger: {
          trigger: title,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      });
    });

    gsap.from(".feature-card", {
      scrollTrigger: {
        trigger: "#about .grid-3",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out"
    });

    gsap.from(".vehicle-card", {
      scrollTrigger: {
        trigger: "#gallery .grid-3",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      scale: 0.95,
      stagger: 0.25,
      duration: 0.9,
      ease: "power3.out"
    });

    gsap.from(".contact-form-card", {
      scrollTrigger: {
        trigger: ".contact-wrapper",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: -50,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    });

    gsap.from(".contact-info-card", {
      scrollTrigger: {
        trigger: ".contact-wrapper",
        start: "top 80%",
        toggleActions: "play none none none"
      },
      x: 50,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    });
  }

  // 4. Mobile Menu
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
      });
    });
  }

  // 5. WhatsApp Form Submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const inputs = contactForm.querySelectorAll('input, textarea');
      const name = inputs[0].value;
      const phone = inputs[1].value;
      const route = inputs[2].value;
      const details = inputs[3].value;

      const whatsappMessage = `*New Trip Inquiry*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Route:* ${route}%0A*Details:* ${details}`;
      const businessNumber = "919876543210"; 
      window.open(`https://wa.me/${businessNumber}?text=${whatsappMessage}`, '_blank');
      contactForm.reset();
    });
  }
});