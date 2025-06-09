
function toggleTheme() {
  document.body.classList.toggle('dark');
}

function toggleLanguage() {
  const elements = document.querySelectorAll('[data-en]');
  elements.forEach(el => {
    const en = el.getAttribute('data-en');
    const ar = el.getAttribute('data-ar');
    if (el.innerText === en) {
      el.innerText = ar;
    } else {
      el.innerText = en;
    }
  });
}
