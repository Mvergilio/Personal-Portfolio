// selection the elements
const LINKS_TO_SECTION = document.querySelectorAll('.navlink');
const NAV_BAR = document.getElementById('navbar');
const TIME = document.querySelector('.time');
console.log(TIME.innerHTML);
// event listeners
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
console.log(year)
};
upDatedYear(TIME);