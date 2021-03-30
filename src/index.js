import './assets/style.css'; 
import createTabArea from './tabs/loadPage';
import  {showHomePage , hideHomePage}  from './tabs/home';
import  {showMenuPage , hideMenuPage}  from './tabs/menu';



createTabArea();

const homeBtn = document.querySelector('.home-btn')
homeBtn.addEventListener('click' , ()=> {
hideMenuPage();
showHomePage();
})

const menuBtn = document.querySelector('.menu-btn')
menuBtn.addEventListener('click' , ()=> {
hideHomePage();
showMenuPage();
})

const contactBtn = document.querySelector('.contact-btn')
contactBtn.addEventListener('click' , ()=> {
  alert('hello')
})