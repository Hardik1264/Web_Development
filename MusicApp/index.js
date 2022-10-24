let audioElem = new Audio('songs/mash up.mp3')
let playbtn = document.getElementById("play")
let progress = document.getElementById("progressbar")
let commonplay = document.getElementsByClassName("common-play")


let songs = [
    {
        "index": 0,
        "name" :"aashiquee-chahu",
       "src" : "songs/aashiqee-chahu.mp3"
    },
    {
        "index": 1,
        "name" :"bhula dena",
       "src" : "songs/bhula.mp3"
    },
    {
        "index": 2,
        "name" :"mash up",
       "src" : "songs/mash up.mp3"
    },
    {
        "index": 3,
        "name" :"Phir Bhi Tumko Chahunga (Arijit Singh)",
       "src" : "songs/02 Phir Bhi Tumko Chahunga (Arijit Singh) 190Kbps.mp3"
    },
    {
        "index": 4,
        "name" :"mere yara",
        "src" : "songs/04 Hum Mar Jayenge (Aashiqui 2).mp3"
    },
    
]

let songscont = Array.from(document.getElementsByClassName("songscontainer"))
let name = document.getElementsByClassName('name')
songscont.forEach((element,index)=>{
//   let name = element.getElementsByClassName('name')
  name[index].innerHTML =`${songs[index].name}`
})





playbtn.addEventListener('click', function () {
    console.log(songscontainer.length)

    this.classList.toggle('fa-pause-circle')
    // console.log(playbtn.className)
    if (playbtn.classList.contains("fa-pause-circle")) {
        // console.log("pause")
        audioElem.play()
    }
    else {
        // console.log("play")
        audioElem.pause()
    }
})

// audioElem.addEventListener('timeupdate',time)
setInterval(time, 1000);
function time() {
    let seek = Math.floor(audioElem.currentTime / audioElem.duration * 100)
    progress.value = seek
}
progress.addEventListener('change', function change() {
    setTimeout(function () {
        let update = progress.value * audioElem.duration / 100
        audioElem.currentTime = update
    }, 000)

})
// setTimeout(time(),6000)



// progress.addEventListener('change',()=>{
//     audioElem.currentTime = progress.value*audioElem.duration/100
// })

let songscontainer = Array.from(document.getElementsByClassName("songscontainer"))
songscontainer.forEach((element, index) => {
    let commonplay = element.getElementsByClassName("common-play")[0]
    commonplay.addEventListener('click', function (e) {
        function allplay() {
            songscontainer.forEach((e, i) => {
                let commonplay = document.getElementsByClassName("common-play")
                if (index != songscontainer.indexOf(e)) {
                    commonplay[i].classList.remove('fa-pause-circle')
                }
            })
        }
        allplay();
        commonplay.classList.toggle('fa-pause-circle')
        audioElem.src = `${songs[index].src}`
        if (commonplay.classList.contains("fa-pause-circle")) {
            // console.log("pause")
            // audioElem.src = `${songs[index].src}`
            playbtn.classList.add('fa-pause-circle')
            audioElem.play()
        }
        else {
            // console.log("play")
            playbtn.classList.remove('fa-pause-circle')
            audioElem.pause()
        }
        function  playsong () {
            // console.log(index);

            console.log(obj);
            let commonplay = element.getElementsByClassName("common-play")[0]  
            // console.log(commonplay);       

            // if (playbtn.classList.contains('fa-pause-circle')) {
            //     commonplay.classList.add('fa-pause-circle')
            // }
            // else {
            //     commonplay.classList.remove('fa-pause-circle')
            // }
        }
        playbtn.addEventListener('click', playsong)
         
    })
    
    
})
// playbtn.addEventListener('click',function(){
//     // let commonplay = document.getElementsByClassName("common-play") 
//     songscontainer.forEach((element,index) =>{
//         let commonplay = element.getElementsByClassName("common-play")[0]
//         let i;
//         if (commonplay.classList.contains('fa-pause-circle')) {
//             // commonplay.classList.remove('fa-pause-circle')
//             commonplay.classList.toggle('fa-pause-circle')
//         }
        
//     })
// })


// songscontainer.forEach((element,index)=>{
//     let name = element.getElementsByClassName('name')
//     console.log(songs.name);
//     name[index].innerHTML =`${songs[index].name}`
//   })
  