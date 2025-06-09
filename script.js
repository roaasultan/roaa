
let isArabic = false;

function toggleLanguage() {
  isArabic = !isArabic;
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = isArabic ? el.getAttribute('data-ar') : el.getAttribute('data-en');
  });
  document.body.setAttribute('dir', isArabic ? 'rtl' : 'ltr');
}

function toggleTheme() {
  document.body.classList.toggle('dark');
}
