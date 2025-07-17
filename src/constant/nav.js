export function highlightNav() {
  const currentHash = window.location.hash || '#';
  document.querySelectorAll('[data-navLink]').forEach(link => {
    if (link.getAttribute('href') === currentHash) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
}
