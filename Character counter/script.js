const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

remainingCounterEl.innerHTML = textAreaEl.getAttribute("maxLength")
totalCounterEl.innerHTML=textAreaEl.value.length;

textAreaEl.addEventListener("keyup",()=>{
    updateCounter();
})

function updateCounter() {
    totalCounterEl.innerHTML=textAreaEl.value.length;
    remainingCounterEl.innerHTML=textAreaEl.getAttribute("maxLength")-textAreaEl.value.length;
}