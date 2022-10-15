const ScrollBtn = document.querySelector('.scroll2top');
const HeroSection = document.querySelector('.hero');
const Menu = document.querySelector('.hidden-manu');
const Bar = document.querySelector('btn');
const Close = document.querySelector('.fa-times');
const Open = document.querySelector('.fa-bars');

const menu1 = document.querySelector('#hero') 
const menu2 = document.querySelector('#about')
const menu3 = document.querySelector('#wid')
const menu4 = document.querySelector('#pricing')
const menu5 = document.querySelector('#pages')
const menu6 = document.querySelector('#contact')

const sec1 = document.querySelector('.hero') 
const sec2 = document.querySelector('.about')
const sec3 = document.querySelector('.wid')
const sec4 = document.querySelector('.pricing')
const sec5 = document.querySelector('.pages')
const sec6 = document.querySelector('.contact')


ScrollBtn.addEventListener('click',Scroll2top);


function Scroll2top(){
    HeroSection.scrollIntoView({behavior: "smooth"})
}
function Scroll2sec1(){
    sec1.scrollIntoView({behavior: "smooth"})
}
function Scroll2sec2(){
    sec2.scrollIntoView({behavior: "smooth"})
}
function Scroll2sec3(){
    sec3.scrollIntoView({behavior: "smooth"})
}
function Scroll2sec4(){
    sec4.scrollIntoView({behavior: "smooth"})
}
function Scroll2sec5(){
    sec5.scrollIntoView({behavior: "smooth"})
}
function Scroll2sec6(){
    sec6.scrollIntoView({behavior: "smooth"})
}
// Bar.classList.add('fa-bars')
Open.addEventListener('click',toggleMenu);
Close.addEventListener('click',hideMenu);
Close.style.display = 'none'
function toggleMenu(){
    Menu.style.right = '0px' ;
    Menu.style.opacity  = '1'
    Open.style.display = 'none'
    Close.style.display = 'block'
}

function hideMenu() {
    Menu.style.right = '-310px' ;
    Close.style.display = 'none'
    Open.style.display = 'block'
  }