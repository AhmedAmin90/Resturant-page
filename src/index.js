import './assets/style.css';
import createTabArea from './tabs/loadPage';
import { showHomePage, hideHomePage } from './tabs/home';
import { showMenuPage, hideMenuPage } from './tabs/menu';
import { showcontactPage, hidecontactPage } from './tabs/contact';


createTabArea();

const homeBtn = document.querySelector('.home-btn');
homeBtn.addEventListener('click', () => {
  hidecontactPage();
  hideMenuPage();
  showHomePage();
});

const menuBtn = document.querySelector('.menu-btn');
menuBtn.addEventListener('click', () => {
  hidecontactPage();
  hideHomePage();
  showMenuPage();
});

const contactBtn = document.querySelector('.contact-btn');
contactBtn.addEventListener('click', () => {
  hideHomePage();
  hideMenuPage();
  showcontactPage();
});