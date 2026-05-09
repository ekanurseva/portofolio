AOS.init({
  duration:1000,
  once:true
});

// TYPING EFFECT
new Typed("#typing",{
  strings:[
    "RPL Teacher",
    "Web Developer",
    "UI Designer",
    "Laravel Developer"
  ],
  typeSpeed:70,
  backSpeed:50,
  loop:true
});

// HAMBURGER MENU
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});