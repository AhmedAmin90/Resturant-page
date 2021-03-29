import './assets/style.css'; 
import createTabArea from './tabs/loadPage'

createTabArea()

const homeBtn = document.querySelector('.home-btn')
homeBtn.addEventListener('click' , ()=> {
  alert('hello')
})

const menuBtn = document.querySelector('.menu-btn')
menuBtn.addEventListener('click' , ()=> {
  alert('hello')
})

const contactBtn = document.querySelector('.contact-btn')
contactBtn.addEventListener('click' , ()=> {
  alert('hello')
})