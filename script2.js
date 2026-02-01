// Select all tab links and contents
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    // Remove active class from all links
    tabLinks.forEach(l => l.classList.remove('active'));
    // Add active class to clicked link
    link.classList.add('active');

    // Hide all tab contents
    tabContents.forEach(content => content.classList.remove('active'));
    // Show selected tab content
    const target = document.getElementById(link.dataset.tab);
    target.classList.add('active');
  });
});
const toggleBtn = document.getElementById('theme-toggle');
const icon = toggleBtn.querySelector('i');

// Check saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
  icon.classList.replace('fa-sun', 'fa-moon');
}

toggleBtn.addEventListener('click', (e) => {
  e.preventDefault();
  document.body.classList.toggle('dark-mode');

  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-sun', 'fa-moon');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.replace('fa-moon', 'fa-sun');
    localStorage.setItem('theme', 'light');
  }
});
// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navTabs = document.querySelector('.nav-tabs');

hamburger.addEventListener('click', () => {
  navTabs.classList.toggle('active');
});

// Close menu when a tab is clicked (optional)
document.querySelectorAll('.tab-link').forEach(link => {
  link.addEventListener('click', () => {
    navTabs.classList.remove('active');
  });
});
function initContactForm() {
    if (!contactForm) return;
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulate form submission (front-end only)
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        if (name && email && message) {
            showNotification();
            contactForm.reset();
        }
    });
}

// Notification Popup
function showNotification() {
    if (!notification) return;
    notification.style.display = 'block';
    notification.style.opacity = '1';
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => notification.style.display = 'none', 500);
    }, 3000); // Hide after 3 seconds
}

