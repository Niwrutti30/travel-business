// Mobile navigation toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close mobile menu when a nav link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Handle form submission (Redirect to WhatsApp directly)
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const inputs = contactForm.querySelectorAll('input, textarea');
  const name = inputs[0].value;
  const phone = inputs[1].value;
  const route = inputs[2].value;
  const details = inputs[3].value;

  const whatsappMessage = `*New Trip Inquiry*%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Route:* ${route}%0A*Details:* ${details}`;
  
  // Replace with your brother's WhatsApp number (with Country Code, e.g., 91 for India)
  const businessNumber = "918799897829"; 
  window.open(`https://wa.me/${businessNumber}?text=${whatsappMessage}`, '_blank');
  
  contactForm.reset();
});