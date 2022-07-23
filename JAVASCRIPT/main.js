let menuBtn = document.getElementById("menuBtn");
let slideNav = document.getElementById("slideNav");
let menu = document.getElementById("menu");
slideNav.style.right = "-250px"
menuBtn.addEventListener('click',()=>{
    if(slideNav.style.right == "-250px"){
        slideNav.style.right= "0px";
    }
})
menu.addEventListener('click',()=>{
    if(slideNav.style.right == "0px"){
        slideNav.style.right= "-250px";
    }
})

// SWIPER CDN 
var swiper = new Swiper(".about-swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });