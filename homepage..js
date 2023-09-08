const header = document.queryselection("header");

window.addEventListener("scroll", function(){
    header.classlist.toggle("sticky", window.scrollY > 60)
});


let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    navbar,classlist.toggle('open');
};