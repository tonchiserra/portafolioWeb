//Sticky menu
window.onscroll = function() {stickyNavMain()}

var navMain = document.getElementById("navMain")
navMain.classList.add("bottomNavMain")
var sticky = navMain.offsetTop

function stickyNavMain() {
    if (window.pageYOffset > sticky) {
        navMain.classList.remove("bottomNavMain")
        navMain.classList.add("stickyNavMain")
    } 
    else {
        navMain.classList.remove("stickyNavMain")
        navMain.classList.add("bottomNavMain")
    }
}