const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.primary-nav');

if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'মেনু বন্ধ করুন' : 'মেনু খুলুন');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'মেনু খুলুন');
    });
  });
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const subject = String(data.get('subject') || 'যোগাযোগ');
    const message = String(data.get('message') || '').trim();
    const body = `নাম: ${name}\nমোবাইল: ${phone}\nবিষয়: ${subject}\nবার্তা: ${message}`;
    // Replace this address with the clinic's real email before publishing.
    const email = 'info@example.com';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent('ওয়েবসাইট থেকে যোগাযোগ')}&body=${encodeURIComponent(body)}`;
  });
}
