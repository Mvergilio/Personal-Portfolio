// selection the elements
const LINKS_TO_SECTION = document.querySelectorAll('.navlink');
const NAV_BAR = document.getElementById('navbar');
const TIME = document.querySelector('.time');
const SOCIAL_LINKS = document.querySelectorAll('.social-link')
// const SPAN = document.querySelectorAll('.social-network');

// event listeners

SOCIAL_LINKS.forEach((elem)=>{
  elem.addEventListener('mouseover', (e)=>{
e = e.currentTarget;
const FIRST_CHILD = e.fisrtChild;
const SPAN = e.querySelector('.social-network');
console.log(FIRST_CHILD);
console.log(SPAN)
if(SPAN){
  SPAN.style.display = "inline-block";
  }
})
elem.addEventListener('mouseleave', (e)=>{
  e = e.target;
const SPAN = e.querySelector('.social-network');
if(SPAN.style.display = "inline-block" && SPAN != null){
 SPAN.style.display = "none";
}
})

})
LINKS_TO_SECTION.forEach((link)=>{
    link.addEventListener('click',(event)=>{
        // prevent default event bahavior
        event.preventDefault();
        
        let href = link.getAttribute('href').slice(1);
        let section = document.getElementById(href);
        let navHeight = NAV_BAR.getBoundingClientRect().height;
        let yPosition= section.offsetTop - navHeight;
    
 //scroll behavior    
    window.scrollTo({
        top: yPosition,
        left: 0,
        behavior: 'smooth'
      });
    })
   
})

// date up date
function upDatedYear(tag){
let year = new Date().getFullYear();
tag.innerHTML = ` ${year}`;
};
upDatedYear(TIME);