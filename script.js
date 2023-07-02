const header= document.querySelector("header");
window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

window.onscroll= () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
};

const homeLink = document.querySelector("#_home");
const aboutLink = document.querySelector("#_about");
const contactLink = document.querySelector("#_contact");

aboutLink.addEventListener("click", function() {
  aboutLink.classList.add("active");
  homeLink.classList.remove("active");
  contactLink.classList.remove("active");
});

homeLink.addEventListener("click", function() {
    homeLink.classList.add("active");
    aboutLink.classList.remove("active");
    contactLink.classList.remove("active");
  });
  
  contactLink.addEventListener("click", function() {
    contactLink.classList.add("active");
    aboutLink.classList.remove("active");
    homeLink.classList.remove("active");
  });