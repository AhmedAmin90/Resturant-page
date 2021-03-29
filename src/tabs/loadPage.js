

function createTabArea(){
  const content = document.querySelector('div');
  content.classList = 'container border border-primary my-5 mx-auto d-flex row'
  const tabArea = document.createElement('div');
  tabArea.setAttribute('id' , 'tabarea');
  tabArea.classList = 'd-flex flex-column tab-area flex-column col-2 ';
  content.appendChild(tabArea);
  const homeBtn = document.createElement('div');
  homeBtn.setAttribute('class' , 'tab-btn home-btn')
  homeBtn.innerHTML = '<h5>Home <br> <i class="fas fa-home"></i> </h5>';
  tabArea.appendChild(homeBtn);
  const menuBtn = document.createElement('div');
  menuBtn.setAttribute('class' , 'tab-btn menu-btn')
  menuBtn.innerHTML = '<h5>Menu <br> <i class="fas fa-utensils"></i> </h5>';
  tabArea.appendChild(menuBtn);
  const contactBtn = document.createElement('div');
  contactBtn.setAttribute('class' , 'tab-btn contact-btn')
  contactBtn.innerHTML = '<h5>Contact <br> <i class="fas fa-address-card"></i> </h5>';
  tabArea.appendChild(contactBtn);
}

export default createTabArea;