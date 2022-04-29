const burger = document.querySelector(".burger");
const navLink = document.querySelector(".nav_container");
burger.addEventListener('click',function(){
    navLink.classList.toggle('active')
})