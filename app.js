const openMenu = document.getElementById("openMenu");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

console.log(menu)

function mediaQueries(condition) {
    if (condition.matches) { 
        openMenu.style.display = "none";
        menu.style.display="none";
        hamburger.style.display="flex"
        hamburger.style.justifyContent = "center";
    } else {
        openMenu.style.display = "none";
        menu.style.display="block";
    }
  }
  
  let condition = window.matchMedia("(max-width: 600px)")
  mediaQueries(condition) 
  condition.addListener(mediaQueries) 

hamburger.addEventListener("click", function () {

    if (openMenu.style.display === "block") {
        openMenu.style.display = "none";
    }
    else {
        openMenu.style.display = "block"
    }

})