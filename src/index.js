import './assets/style.css'; 
import createTabArea from './tabs/loadPage';
import  {showHomePage , hideHomePage}  from './tabs/home';



createTabArea();

const homeBtn = document.querySelector('.home-btn')
homeBtn.addEventListener('click' , ()=> {
showHomePage();
})

const menuBtn = document.querySelector('.menu-btn')
menuBtn.addEventListener('click' , ()=> {
  hideHomePage()
})

const contactBtn = document.querySelector('.contact-btn')
contactBtn.addEventListener('click' , ()=> {
  alert('hello')
})