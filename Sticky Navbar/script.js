const Navbar = document.querySelector(".navbar");

const BottomContainer = document.querySelector(".bottom-container");
console.log(BottomContainer);
window.addEventListener("scroll", ()=>{
    if(window.scrollY>BottomContainer.offsetTop-Navbar.offsetHeight-50){  //here 50 is text margin which is given in style section
        Navbar.classList.add("active");
    }
    else{
        Navbar.classList.remove("active");
    }
})