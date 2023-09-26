function myFunction() {
  var x = document.getElementById("nav_bar");
  const logo = document.getElementById("logo");
  const logo_div = document.getElementById("logo_div");
  const fa_times = document.getElementById("icon_X");
  var value = window.scrollY;
  if (x.className === "navigation_bar") {
    logo.style.display = "none";
    logo_div.style.display = "block";
    x.className = x.className + " responsive";
    fa_times.classList.remove("fa-bars");
    x.style.zIndex = 2;
    fa_times.classList.add("fa-close");
    
  } else {
    x.className = "navigation_bar";
  
    x.style.zIndex = 2;
    logo.style.opacity = 1;
    logo_div.style.opacity = 1;
    fa_times.classList.remove("fa-close");
    fa_times.classList.add("fa-bars");
    logo_div.style.marginLeft = "0%";

  }
}
const card1 = document.getElementById("card1");
const milktea1 = document.getElementById("milktea1");
const milktea2 = document.getElementById("milktea2");
const pizza = document.getElementById("pizza");

card1.addEventListener("mouseenter", function(){
  milktea1.style.marginLeft = "0";
  milktea2.style.marginLeft = "4%";
  pizza.style.right = "2%";
  milktea1.style.marginTop = "35%";
  milktea2.style.marginTop = "35%";
  pizza.style.marginTop = "35%";
  pizza.style.opacity = 1;
});
card1.addEventListener("mouseleave",function(){
  milktea1.style.marginLeft = "-20%";
  milktea2.style.marginLeft = "-20%";
  pizza.style.right = "-20%";
  milktea1.style.marginTop = "45%";
  milktea2.style.marginTop = "45%";
  pizza.style.marginTop = "45%";
  pizza.style.opacity = 0;
});

const card2 = document.getElementById("card2");
const bot = document.getElementById("bot");
card2.addEventListener("mouseenter", function (){
  bot.style.opacity = 1;
  bot.style.right = "80%";
});
card2.addEventListener("mouseleave", function (){
  bot.style.opacity = 0;
  bot.style.right = "-10%";
});

const card3 = document.getElementById("card3");
const bean1 = document.getElementById("bean1");
const bean2 = document.getElementById("bean2");
const bean3 = document.getElementById("bean3");
const bean4 = document.getElementById("bean4");
const bean5 = document.getElementById("bean5");
card3.addEventListener("mouseenter", function(){
  bean1.style.marginTop = "5%";
  bean1.style.marginLeft = "7%";
  bean1.style.visiblity = "visible";
  bean2.style.marginTop = "35%";
  bean2.style.marginLeft = "4%";
  bean2.style.visibility = "visible";
  bean3.style.marginTop = "7%";
  bean3.style.marginLeft = "30%";
  bean3.style.visibility = "visible";
  bean4.style.marginTop = "35%";
  bean4.style.right = "30%";
  bean4.style.visibility = "visible";
  bean5.style.marginTop = "25%";
  bean5.style.right = "-1%";
  bean5.style.visibility = "visible";

});
card3.addEventListener("mouseleave", function(){
  bean1.style.marginTop = "-20%";
  bean1.style.marginLeft = "-20%";
  bean1.style.visiblity = "hidden";
  bean2.style.marginTop = "50%";
  bean2.style.marginLeft = "-20%";
  bean2.style.visibility = "hidden";
  bean3.style.marginTop = "15%";
  bean3.style.marginLeft = "35%";
  bean3.style.visibility = "hidden";
  bean4.style.marginTop = "30%";
  bean4.style.right = "35%";
  bean4.style.visibility = "hidden";
  bean5.style.marginTop = "20%";
  bean5.style.right = "-20%";
  bean5.style.visibility = "hidden";
});

const card4 = document.getElementById("card4");
const coffeebeans1 = document.getElementById("coffeebeans1");
const coffeebeans2 = document.getElementById("coffeebeans2");
card4.addEventListener("mouseenter", function(){
  coffeebeans1.style.opacity = 1;
  coffeebeans1.style.left = "5%";
  coffeebeans2.style.opacity = 1;
  coffeebeans2.style.right = "5%";
});
card4.addEventListener("mouseleave", function(){
  
  coffeebeans2.style.opacity = 1;
  coffeebeans2.style.right = "-35%";
  coffeebeans1.style.opacity = 0;
  coffeebeans1.style.left = "-35%";
});

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  const profile_pic = document.getElementById("profile_pic");
  const about_pic = document.getElementById("about_pic");
  const about_txt = document.getElementById("about_txt");
  const leftborder = document.getElementById("leftborder");
  const topborder = document.getElementById("topborder");
  const rightborder = document.getElementById("rightborder");
  const bottomborder = document.getElementById("bottomborder");
  const bg_blob = document.getElementById("blob");
  const about_self_id = document.getElementById("about_self_id");
  const home_nav = document.getElementById("home_nav");
  const about_nav = document.getElementById("about_nav");
  const project_nav = document.getElementById("project_nav");
  const contact_nav = document.getElementById("contact_nav");
  const cards = document.getElementById("cards");
  const project_txt = document.getElementById("project_txt");

  if(value <= 300 ){
    home_nav.classList.add("active");
    about_nav.classList.remove("active");
    project_nav.classList.remove("active");
    contact_nav.classList.remove("active");
  }
  if (value >= 301 && value <= 900) {
    home_nav.classList.remove("active");
    about_nav.classList.remove("active");
    contact_nav.classList.remove("active");
    project_nav.classList.add("active");
  }
  
  if(value >= 1200){
  
    about_nav.classList.add("active");
    home_nav.classList.remove("active");
    project_nav.classList.remove("active");
    contact_nav.classList.remove("active");
    
  }
  if(value > 1800){
    project_nav.classList.remove("active");
    home_nav.classList.remove("active");
    about_nav.classList.remove("active");
    contact_nav.classList.add("active");
  }
  const top_nav = document.getElementById("nav_bar");
  if (value >= 1) {
    top_nav.style.boxShadow = "0px 3px 10px 0px black";
    top_nav.style.backgroundColor = "#E1D9CD";
    top_nav.style.transition = "0.2s ease-in-out";
    top_nav.style.zIndex = 2;
  } if(value <= 0) {
    top_nav.style.boxShadow = "";
    top_nav.style.zIndex = 2;
    top_nav.style.backgroundColor = "";
    top_nav.style.transition = "0.2s ease-in-out";
  }
});


  const card_animation = document.querySelectorAll('.card_animation');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) =>{
    if(entry.isIntersecting){
      entry.target.classList.add("card_animation_done");
    }
  });
},{
  threshold:0.8
});
for(let i = 0; 1 < card_animation.length;i++){
  const el = card_animation[i];
  observer.observe(el);
}

