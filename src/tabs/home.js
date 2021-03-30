import FoodImg from '../assets/images/img.jpg';
// Define main elements:
const content = document.querySelector('#content');
const mainDiv = document.createElement('div');
const title = document.createElement('h1');
const description = document.createElement('p');
const image = document.createElement('img');

// Main div:
mainDiv.classList = 'hide col-10 m-auto main-div';

// Title:
title.innerText = "FRESH & DELECIOUS";
title.classList = 'text-center text-dark';

// Description:
description.innerHTML = '<strong> Welcome To our Resturant </strong> <br> Traditional Oriental food With special Taste !';
description.classList = 'text-dark text-center';

// Image style:
image.classList = 'image-style'

// Build the structure:
content.appendChild(mainDiv); 
mainDiv.appendChild(title);
mainDiv.appendChild(description);
mainDiv.appendChild(image);

// Add source of the image:
image.src = FoodImg;





function showHomePage(){
  mainDiv.classList.remove('hide');
  content.classList.add('flex-row-reverse');
}

function hideHomePage(){
  content.classList.remove('flex-row-reverse');
  mainDiv.classList.add('hide');
}

export  {showHomePage , hideHomePage};
