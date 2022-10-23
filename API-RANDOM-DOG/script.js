//API https://dog.ceo/api/breeds/image/random

const dogImg=document.querySelector('#dogImg')
const dogButton=document.querySelector('#dogButton')

//Asyncronus Programming -->Parallel Proceess

const getNewDog=()=>{
  fetch('https://dog.ceo/api/breeds/image/random')
.then(responce=>responce.json())
.then(json=>{
  dogImg.innerHTML=`<img src="${json.message}" height=300 width=300></img>`
})
}
dogButton.onclick = ()=>getNewDog()

