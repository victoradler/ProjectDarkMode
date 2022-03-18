const MENU_ITEMS = document.querySelectorAll('[data-action="menu"]');

function hideSingleContent (pageId) {
  document.getElementById(pageId).style.display = 'none';
}

function hideAllContent () {
  MENU_ITEMS.forEach(item => hideSingleContent(
    item.getAttribute('data-page')
  ));
}

MENU_ITEMS.forEach(item => {
  let pageId = item.getAttribute('data-page');

  hideSingleContent(pageId);

  item.addEventListener('click', () => {
    hideAllContent();

    localStorage.setItem('current-page', pageId);
    document.title = pageId;

    document.getElementById(pageId).style.display = 'block';
  });
});

if (localStorage.getItem('current-page')) {
  let pageId = localStorage.getItem('current-page');

  document.getElementById(pageId).style.display = 'block';
}
