let btn = document.getElementById('menu_btn')
let navbar = document.getElementsByClassName("navbar")[0]
let slide = document.getElementsByClassName('slide')
let slides = Array.from(document.getElementsByClassName('slide'))
btn.addEventListener('click',function(){
 navbar.classList.toggle('active')
})

let index=0;
console.log(slides)
// setInterval(function(){
//     slide[index].classList.remove('active')
//     slide[index].classList.remove('anti')
//     index++
//     if(index< slides.length){
//         slide[index].classList.add("active")
//         slide[index-1].classList.add('anti')
//         slide[2].classList.remove('anti')
//         if(index-2>=0){
//             console.log(index-2)
//             slide[index-2].classList.remove('anti')
//         }
//     }
//    else{
//        index =0;
//        slide[0].classList.add('active')
//        slide[1].classList.remove('anti')
//        slide[2].classList.add('anti')
//    }
// },5000)

setInterval(()=>{
    if(index < slide.length){
    slide[index].classList.remove('active')
    slide[index].classList.add('next')
}
    index++
    
   console.log(index);
    if(index < slide.length){
        slide[index].classList.add('active')     
    }

    if(index>slide.length-1){
        for(let i=0; i<slide.length; i++){
          slide[i].classList.remove('next')  
        }
        index=0 
        slide[index].classList.add('active')
    }
    
},2000)