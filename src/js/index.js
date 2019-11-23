import menu from './json/menu.json';

import menuTemplate from './templates/menu-tamplete.hbs';

import './css/styles.css';

import refs from './refs.js';
const menues = menu.reduce((acc, e) => {
  return (acc += menuItem(e));
}, '');
refs.menu.insertAdjacentHTML('beforeend', `${menues}`);


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//-----// Function //-----//
const lightTheme = tag => {
  tag.classList.remove(Theme.DARK);
  tag.classList.add(Theme.LIGHT);
  localStorage.setItem('theme', Theme.LIGHT);
};
const darkTheme = tag => {
  tag.classList.remove(Theme.LIGHT);
  tag.classList.add(Theme.DARK);
  localStorage.setItem('theme', Theme.DARK);
};
const applyTheme = boolean => {
  boolean ? darkTheme(refs.body) : lightTheme(refs.body);
};
//-----// check //-----//
if (refs.loc.theme === Theme.DARK) {
  darkTheme(refs.body);
  refs.themeSwitch.checked = true;
}
//-----// Listener //-----//
refs.body.addEventListener('click', e => {
  if (e.target.nodeName !== 'INPUT') {
    return;
  }
  applyTheme(e.target.checked);
});




