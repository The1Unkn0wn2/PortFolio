// ── Show a section and highlight the matching nav link
function show(id) {
  // Hide all sections
  document.querySelectorAll('section').forEach(function(s) {
    s.classList.remove('active');
  });

  // Remove active class from all nav links
  document.querySelectorAll('.nav-links a').forEach(function(a) {
    a.classList.remove('active');
  });

  // Show the chosen section
  document.getElementById(id).classList.add('active');

  // Highlight the matching nav link
  document.getElementById('nav-' + id).classList.add('active');

  // Close the mobile menu
  document.getElementById('navLinks').classList.remove('open');

  // Scroll back to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── Open/close mobile hamburger menu
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ── Contact form validation
function sendForm() {
  var name    = document.getElementById('f-name').value.trim();
  var email   = document.getElementById('f-email').value.trim();
  var message = document.getElementById('f-message').value.trim();
  var msg     = document.getElementById('form-msg');

  // Check required fields
  if (!name || !email || !message) {
    msg.style.color = '#e87147';
    msg.textContent = '⚠ Vul naam, e-mail en bericht in.';
    return;
  }

  // Simple email check
  if (!email.includes('@') || !email.includes('.')) {
    msg.style.color = '#e87147';
    msg.textContent = '⚠ Voer een geldig e-mailadres in.';
    return;
  }

  // Success feedback
  msg.style.color = '#3ecfb2';
  msg.textContent = '✓ Bericht verstuurd! Ik neem snel contact op.';

  // Clear the form
  document.getElementById('f-name').value    = '';
  document.getElementById('f-email').value   = '';
  document.getElementById('f-subject').value = '';
  document.getElementById('f-message').value = '';
}
