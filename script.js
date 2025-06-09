function toggleTheme() {
  document.body.classList.toggle('dark');
  // Save theme preference to localStorage
  const isDark = document.body.classList.contains('dark');
  localStorage.setItem('darkTheme', isDark);
}

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  const currentLang = document.documentElement.getAttribute('lang');
  const newLang = currentLang === 'en' ? 'ar' : 'en';
  
  document.documentElement.setAttribute('lang', newLang);
  document.documentElement.setAttribute('dir', newLang === 'ar' ? 'rtl' : 'ltr');
  
  elements.forEach(el => {
    const en = el.getAttribute('data-en');
    const ar = el.getAttribute('data-ar');
    el.innerText = newLang === 'en' ? en : ar;
  });
  
  // Save language preference to localStorage
  localStorage.setItem('language', newLang);
}

// Apply saved preferences on load
document.addEventListener('DOMContentLoaded', () => {
  // Theme
  if (localStorage.getItem('darkTheme') === 'true') {
    document.body.classList.add('dark');
  }
  
  // Language
  const savedLang = localStorage.getItem('language') || 'en';
  if (savedLang === 'ar') {
    toggleLanguage(); // Switch to Arabic if saved
  }
});
