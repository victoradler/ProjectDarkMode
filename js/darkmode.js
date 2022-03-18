const DARKMODE_STYLE = 'background-color: #222; color: #FFF';
const LIGHTMODE_STYLE = 'background-color: #FFF; color: #000';

if (localStorage.getItem('darkmode') === 'true') {
  document.body.setAttribute('style', DARKMODE_STYLE);
}

function changeDarkmode (darkmode) {
  if (darkmode === true) {
    localStorage.setItem('darkmode', true);
    document.body.setAttribute('style', DARKMODE_STYLE);
  } else {
    localStorage.setItem('darkmode', false);
    document.body.setAttribute('style', LIGHTMODE_STYLE);
  }
}
