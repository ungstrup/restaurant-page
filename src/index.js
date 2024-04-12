import { addHomeContent } from './home';
import { addMenuContent } from './menu';
import { addAboutContent } from './about';
import './style.css';

addHomeContent('content');

// document.getElementById('home-btn');
// document.getElementById('menu-btn');
// document.getElementById('about-btn');

let navButtons = document.querySelectorAll('button');
let contentDiv = document.getElementById('content');

navButtons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    contentDiv.innerHTML = '';
    let buttonId = e.target.id;
    if (buttonId === 'about-btn') {
      addAboutContent('content');
    } else if (buttonId === 'menu-btn') {
      addMenuContent('content');
    } else {
      addHomeContent('content');
    }
  });
});
