let audioElement= new Audio("songs/1.mp3")
const songItem=[
    {songnam:"labon ko",filePath:("songs/.mp3"),coverPath:("covers/labon.jpeg")},
    {songnam:"t-m kahani",filePath:("songs/.mp3"),coverPath:("covers/t-m.jpeg")},
    {songnam:"cheques",filePath:("songs/.mp3"),coverPath:("covers/chq.jpeg")},
    {songnam:"maa-sidu",filePath:("songs/.mp3"),coverPath:("covers/maaa.jpeg")},
    {songnam:"tere layi",filePath:("songs/.mp3"),coverPath:("covers/t-l.jpg")},
]
let songIndex=0;
const songDetails= Array.from(document.getElementsByClassName("songlist"))
const myProgressBar=document.getElementById("myProgress")
const playBt=document.querySelector(".playBtn");
const songlist=document.getElementsByClassName("songName")
const previous=document.getElementById("previous")
const next=document.getElementById("next")
const songNM =document.getElementById("songName")
const pausebtn= document.getElementsByClassName("small")




songDetails.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songItem[i].coverPath
    element.getElementsByTagName("p")[0].innerText=songItem[i].songnam


})

playBt.addEventListener("click",()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        playBt.classList.remove("fa-play")
        playBt.classList.add("fa-pause")
    }
    else{
        makeAllPlays()
        audioElement.pause()
        playBt.classList.remove("fa-pause")
        playBt.classList.add("fa-play")
    }

})

audioElement.addEventListener("timeupdate",()=>{
    progres = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value= progres
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})
 function makeAllPlays(){
    Array.from(document.getElementsByClassName("smallbtn")).forEach((e)=>{
        e.classList.remove("fa-pause")
        e.classList.add("fa-play")
    })}

Array.from(document.getElementsByClassName("smallbtn")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        if(e.target.classList[2]=="fa-play"){
        makeAllPlays()
        songIndex= parseInt(e.target.id)
        e.target.classList.remove("fa-play")
        e.target.classList.add("fa-pause")
        audioElement.src=`songs/${songIndex+1}.mp3`
        songNM.innerText=songItem[songIndex].songnam
        audioElement.currentTime= 0
        audioElement.play()
        playBt.classList.remove("fa-play")
        playBt.classList.add("fa-pause")
    }
    else{
        e.target.classList.remove("fa-pause")
        e.target.classList.add("fa-play")
        audioElement.pause()
        playBt.classList.remove("fa-pause")
        playBt.classList.add("fa-play")

    }
    })

})

next.addEventListener("click",()=>{
    if(songIndex>=4){
        songIndex=0
    }
    else{
        songIndex+=1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    songNM.innerText=songItem[songIndex].songnam
    audioElement.currentTime= 0
    audioElement.play()
    playBt.classList.remove("fa-play")
    playBt.classList.add("fa-pause")
})

previous.addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=4
    }
    else{
        songIndex-= 1
    }
    audioElement.src=`songs/${songIndex+1}.mp3`
    songNM.innerText=songItem[songIndex].songnam
    audioElement.currentTime= 0
    audioElement.play()
    playBt.classList.remove("fa-play")
    playBt.classList.add("fa-pause")
})