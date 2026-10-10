const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  nav.querySelectorAll('a').forEach(item => item.classList.remove('active'));
  link.classList.add('active');
}));
const sections = [...document.querySelectorAll('main section[id]')];
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const target = entry.target.id === 'pi' || entry.target.classList.contains('pi-intro') ? '#pi' : '#' + entry.target.id;
      const link = nav.querySelector(`a[href="${target}"]`);
      if (link) {
        nav.querySelectorAll('a').forEach(item => item.classList.remove('active'));
        link.classList.add('active');
      }
    });
  }, { rootMargin: '-25% 0px -65% 0px' });
  sections.forEach(section => observer.observe(section));
}
document.getElementById('year').textContent = new Date().getFullYear();
