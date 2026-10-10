const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
const search = document.getElementById('publication-search');
const publications = [...document.querySelectorAll('.publication')];
const count = document.getElementById('publication-count');
const noResults = document.getElementById('no-results');
function filterPublications() {
  const query = search.value.trim().toLowerCase();
  let visible = 0;
  publications.forEach(item => {
    const matches = (item.dataset.search + ' ' + item.innerText).toLowerCase().includes(query);
    item.hidden = !matches;
    if (matches) visible++;
  });
  count.textContent = `${visible} publication${visible === 1 ? '' : 's'}`;
  noResults.hidden = visible !== 0;
}
search.addEventListener('input', filterPublications);
document.getElementById('year').textContent = new Date().getFullYear();
