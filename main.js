//Sticky menu
window.onscroll = function() {stickyNavMain()}

var navMain = document.getElementById("navMain")
navMain.classList.add("bottomNavMain")
var sticky = navMain.offsetTop

var navTwo = document.getElementById("navTwo")
navTwo.classList.add("navTwo")
var sticky = navTwo.offsetTop

function stickyNavMain() {
    if (window.pageYOffset > sticky) {
        navMain.classList.remove("bottomNavMain")
        navMain.classList.add("stickyNavMain")
        navTwo.classList.remove("navTwo")
        navTwo.classList.add("stickyNavTwo")
    } 
    else {
        navMain.classList.remove("stickyNavMain")
        navMain.classList.add("bottomNavMain")
        navTwo.classList.remove("stickyNavTwo")
        navTwo.classList.add("navTwo")
    }
}

//Slide menu
function showMenu(){
    document.getElementById("navMain").classList.remove("navMain")
    document.getElementById("navMain").classList.add("showNav")
}

//agregar un icono de x en el menu y al hacer click que se cambien las clases de arriba.