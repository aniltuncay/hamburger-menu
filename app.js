const openMenu = document.getElementById("openMenu");
const hamburger = document.querySelector(".hamburger");

function mediaQueries(x) {
    if (x.matches) { 
        openMenu.style.display = "none";
    } else {
        openMenu.style.display = "none";
    }
  }
  
  let x = window.matchMedia("(max-width: 600px)")
  mediaQueries(x) 
  x.addListener(mediaQueries) 

hamburger.addEventListener("click", function () {

    if (openMenu.style.display === "block") {
        console.log("ilk if.")
        openMenu.style.display = "none";
    }
    else {

        console.log("2. if.")
        openMenu.style.display = "block"
    }

})