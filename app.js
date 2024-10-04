const menu = document.querySelector('.menu')
const toggle = document.querySelector('#toggle')
const addListing = document.getElementById('add-listing')

addListing.addEventListener('click', () => {
  alert("Coming soon....")
})

toggle.addEventListener("click", function(){
    menu.classList.toggle('show_menu')
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

