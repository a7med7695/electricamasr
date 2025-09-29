function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {
    if (lang === 'en') {
      el.textContent = el.getAttribute('data-en');
      if (el.placeholder) el.placeholder = el.getAttribute('data-en');
    } else {
      el.textContent = el.getAttribute('data-ar');
      if (el.placeholder) el.placeholder = el.getAttribute('data-ar');
    }
  });
}