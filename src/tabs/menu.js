import Menu1 from '../assets/images/menu-1.jpg';
import Menu2 from '../assets/images/menu-2.jpg';
import Menu3 from '../assets/images/menu-3.jpg';

const content = document.querySelector('#content');
const menuDiv = document.createElement('div');
const title = document.createElement('h1');
const description = document.createElement('p');
const devImg = document.createElement('div');
const imageOne = document.createElement('img');
const imageTwo = document.createElement('img');
const imageThree = document.createElement('img');

// Main div:
menuDiv.classList = 'hide col-10 m-auto main-div';

// Title:
title.innerText = 'Menu';
title.classList = 'text-center text-dark';

// Description:
description.innerHTML = '<strong> Do not Miss Our Outstanding Taste !  </strong> ';
description.classList = 'text-dark text-center';

// Image dev:
devImg.classList = 'd-flex justify-content-around';

// Build the structure:
content.appendChild(menuDiv);
menuDiv.appendChild(title);
menuDiv.appendChild(description);
menuDiv.appendChild(devImg);
devImg.appendChild(imageOne);
[imageOne, imageTwo, imageThree].forEach((image) => {
  devImg.appendChild(image);
  image.classList = 'image-menu';
});


// Add source of the image:
imageOne.src = Menu1;
imageTwo.src = Menu2;
imageThree.src = Menu3;


function showMenuPage() {
  menuDiv.classList.remove('hide');
  content.classList.add('flex-row-reverse');
}

function hideMenuPage() {
  content.classList.remove('flex-row-reverse');
  menuDiv.classList.add('hide');
}

export { showMenuPage, hideMenuPage };