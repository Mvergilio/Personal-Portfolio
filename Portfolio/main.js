// selection the elements
const LINKS_TO_SECTION = document.querySelectorAll(".navlink");
const NAV_BAR = document.getElementById("navbar");
const TIME = document.querySelector(".time");
const LINKS_CONTAINER = document.querySelector(".links");
const MENU_LINKS = document.querySelector(".menu-links")
const HIDDEN_MAIN = document.querySelector(".hidden");
const LANG_BTNS = document.querySelectorAll(".leng");
const LANG_DIV = document.querySelector("#leng-div");
// event listeners

// languages event
let langCheck;
window.sessionStorage.setItem("check", langCheck);
console.log(sessionStorage)
  LANG_BTNS.forEach((element)=>{
  element.addEventListener("click",(e)=>{
    // let textContent = this.Target.textContent;
    if(element.classList.contains("portuguese")){
    e.preventDefault()
    HIDDEN_MAIN.classList.remove("hidden");
    LANG_DIV.style.display = "none";
    

  }
  
})
})


window.addEventListener("DOMContentLoaded", ()=>{
  let key =  sessionStorage.getItem("check")
  if(key == "true"){
    
    console.log(key);
  }
})

window.addEventListener("scroll", (e) => {
  const TOP_POSITION_OF_THE_PAGE = LINKS_CONTAINER.offsetTop;
  let pageYOffSet = window.scrollY;
  if (pageYOffSet >= TOP_POSITION_OF_THE_PAGE) {
    setTimeout(() => {
      LINKS_CONTAINER.style.position = "fixed";
    }, 400);
  } else {
    LINKS_CONTAINER.style.position = "absolute";
  }
});

LINKS_TO_SECTION.forEach((link) => {
  link.addEventListener("click", (event) => {
    // prevent default event bahavior
    // if(event.currentTarget.classList)
    event.preventDefault();
    console.log(event.currentTarget.dataSet);
    let href = link.getAttribute("href").slice(1);
    let section = document.getElementById(href);
    if (section == null) {
      this.href = "./PT-EN/english.html";
      window.location = this.href;
    } else {
      let navHeight = NAV_BAR.getBoundingClientRect().height;
      let yPosition = section.offsetTop - navHeight;
      //scroll behavior
      window.scrollTo({
        top: yPosition,
        left: 0,
        behavior: "smooth",
      });
    }
  });
});

// date up date 
function upDatedYear(tag) {
  let year = new Date().getFullYear();
  tag.innerHTML = ` ${year}`;
}
upDatedYear(TIME);
