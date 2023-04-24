const button1 = document.getElementById('menu-1-button');
const button2 = document.getElementById('menu-2-button');
const button3 = document.getElementById('menu-3-button');

const dropdown1 = document.getElementById('menu-1');
const dropdown2 = document.getElementById('menu-2');
const dropdown3 = document.getElementById('menu-3');

button1.addEventListener("click", displayMenu1);
button2.addEventListener("click", displayMenu2);
button3.addEventListener("click", displayMenu3);

const showSideMenu = document.getElementById('menu-trigger');
const closeSideMenu = document.getElementById("menu-close");
const sideMenu = document.getElementById('side-menu');

showSideMenu.addEventListener("click", displaySideMenu);
closeSideMenu.addEventListener("click", hideSideMenu);

function displayMenu1() {
  dropdown1.classList.add("show");
  dropdown2.classList.remove("show");
  dropdown3.classList.remove("show");
}

function displayMenu2() {
  dropdown2.classList.add("show");
  dropdown1.classList.remove("show");
  dropdown3.classList.remove("show");
}

function displayMenu3() {
  dropdown3.classList.add("show");
  dropdown1.classList.remove("show");
  dropdown2.classList.remove("show");
}

function displaySideMenu() {
  sideMenu.classList.add("show-menu");
}

function hideSideMenu() {
  sideMenu.classList.remove("show-menu");
}

document.addEventListener("click", hideAllMenus)

function hideAllMenus(event) {
  if (!event.target.matches(".nav li")) {
    dropdown1.classList.remove("show");
    dropdown2.classList.remove("show");
    dropdown3.classList.remove("show");
  }
}