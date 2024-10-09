const menu = document.querySelector('.menu')
const toggle = document.querySelector('#toggle')
const addListing = document.getElementById('add-listing')
const home = document.getElementById('home')
const about = document.getElementById('about')
const shop = document.getElementById('shop')
const projects = document.getElementById('project')
const plan = document.getElementById('plans')
const contact = document.getElementById('contacts')

addListing.addEventListener('click', () => {
  alert("Coming soon....")
})

toggle.addEventListener("click", function(){
    menu.classList.toggle('show_menu')
})

home.addEventListener('click', () => {
  menu.classList.remove('show_menu')
})

about.addEventListener('click', () => {
  menu.classList.remove('show_menu')
})

shop.addEventListener('click', () => {
  menu.classList.remove('show_menu')
})

projects.addEventListener('click', () => {
  menu.classList.remove('show_menu')
})

plan.addEventListener('click', () => {
  menu.classList.remove('show_menu')
})

contact.addEventListener('click', () => {
  menu.classList.remove('show_menu')
})

var swiper = new Swiper(".about_swiper", {
    loop:true,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      type: ".progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
  });

