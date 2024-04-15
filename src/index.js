import { addHomeContent } from './home';
import { addMenuContent } from './menu';
import { addAboutContent } from './about';
import './style.css';

addHomeContent();

document.getElementById('home-btn').addEventListener('click', (e) => {
  addHomeContent();
});

document.getElementById('menu-btn').addEventListener('click', (e) => {
  addMenuContent();
});

document.getElementById('about-btn').addEventListener('click', (e) => {
  addAboutContent();
});
