(() => {
  const button = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');
  if (!button || !nav) return;

  button.addEventListener('click', () => {
    const isOpen = button.getAttribute('aria-expanded') === 'true';
    button.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('is-open', !isOpen);
  });

  nav.addEventListener('click', (event) => {
    if (!(event.target instanceof HTMLAnchorElement)) return;
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
  });
})();
