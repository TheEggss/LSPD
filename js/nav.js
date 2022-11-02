const menu = document.querySelector("#menu")
const ol = document.querySelector("ol")
const bars = document.querySelectorAll(".menu-bar")

menu.addEventListener('click', ()=> {
    ol.classList.toggle('show-flex')
    bars[0].classList.toggle('menu-bar-1-change')
    bars[1].classList.toggle('menu-bar-2-change')
    bars[2].classList.toggle('menu-bar-3-change')
})