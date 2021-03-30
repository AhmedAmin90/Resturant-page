const content = document.querySelector('#content');
const menuDiv = document.createElement('div');
const title = document.createElement('h1');
const description = document.createElement('p');
const devImg = document.createElement('div')
const imageOne = document.createElement('img');
const imageTwo = document.createElement('img');
const imageThree = document.createElement('img');

// Main div:
menuDiv.classList = 'hide col-10 m-auto main-div';

// Title:
title.innerText = "Menu";
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
for (let image of [imageOne , imageTwo , imageThree]) {
  devImg.appendChild(image);
  image.classList = 'image-menu'
};

// Add source of the image:
imageOne.src = 'https://p0.pikist.com/photos/636/334/food-turkish-delight-delicious-sweet-sugar-dessert-tasty-oriental-traditional-thumbnail.jpg';
imageTwo.src = 'https://image.shutterstock.com/image-photo/traditional-oriental-food-pilaf-uzbek-600w-1450292759.jpg';
imageThree.src = 'https://media.istockphoto.com/photos/traditional-uzbek-oriental-cuisine-uzbek-family-table-from-different-picture-id1194550674';



function showMenuPage(){
  menuDiv.classList.remove('hide');
  content.classList.add('flex-row-reverse');
}

function hideMenuPage(){
  content.classList.remove('flex-row-reverse');
  menuDiv.classList.add('hide');
}

export  {showMenuPage , hideMenuPage};