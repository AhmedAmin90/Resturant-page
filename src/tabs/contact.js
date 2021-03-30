
// Define main elements:
const content = document.querySelector('#content');
const conactDiv = document.createElement('div');
const title = document.createElement('h1');
const description = document.createElement('h2');
const image = document.createElement('img');

// Main div:
conactDiv.classList = 'hide col-10 m-auto main-div';

// Title:
title.innerText = 'Visit Us';
title.classList = 'text-center text-dark';

// Description:
description.innerText = ' We are kidding ! It is Just an educational app , No place to visit :)';
description.classList = 'text-warning bg-light p-2 text-center';

// Image style:
image.classList = 'image-style';

// Build the structure:
content.appendChild(conactDiv);
conactDiv.appendChild(title);
conactDiv.appendChild(description);


function showcontactPage() {
  conactDiv.classList.remove('hide');
  content.classList.add('flex-row-reverse');
}

function hidecontactPage() {
  content.classList.remove('flex-row-reverse');
  conactDiv.classList.add('hide');
}

export { showcontactPage, hidecontactPage };
