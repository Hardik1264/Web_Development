const Container = document.querySelector(".container");
const popupContainer = document.querySelector(".popup-container");
const Btn = document.querySelector(".btn");
const closeIcon = document.querySelector(".close-icon");

Btn.addEventListener("click" , ()=>{
    Container.classList.add("active");
    popupContainer.classList.remove("active");
})

closeIcon.addEventListener("click",()=>{
    Container.classList.remove("active");
    popupContainer.classList.add("active");
})