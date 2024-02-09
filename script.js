console.log("Welcome to Spotify")
// initialize variables
let songIndex;
let audioElement= new Audio('1.mp3')
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif=document.getElementById('gif')
let masterSongName=document.getElementById('masterSongName')
let songItems=Array.from(document.getElementsByClassName('songItem'))


let songs=[
    {songName:"Shikwa-Allama Iqbal",filePath:"1.mp3",coverPath:"1.jpg"},
    {songName:"Jawab-e-Shikwa",filePath:"2.mp3",coverPath:"2.GIF"},
    {songName:"Into Your Arms",filePath:"3.mp3",coverPath:"3.jpeg"},
    {songName:"Alone-pt-II",filePath:"4.mp3",coverPath:"4.jpeg"},
    {songName:"Randel-Wahran",filePath:"5.mp3",coverPath:"5.jpeg"},
    {songName:"Maikada",filePath:"6.mp3",coverPath:"6.jpeg"},
    {songName:"Stereo Hearts",filePath:"7.mp3",coverPath:"7.jpeg"},
    {songName:"DVRST-Close Eyes",filePath:"8.mp3",coverPath:"8.jpeg"},
  
]
let element
songItems.forEach((element,i) => {
    console.log(element,i)
    element.getElementsByTagName("img")[0].src=songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName
});
// audioElement.play()

// handle and pause the master play 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        gif.style.opacity=1
    }
    else{
        audioElement.pause()
        masterPlay.classList.remove('fa-pause-circle')
        masterPlay.classList.add('fa-play-circle') 
        gif.style.opacity=0  
    }
})

// listening to events
audioElement.addEventListener('timeupdate',()=>{
    
    // update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    
    myProgressBar.value=progress
})

myProgressBar.addEventListener('change',()=>{
    // it is in % so we cant seek the song to seek the song we just have to change the formula by chaning multiply into divide and divide into multiply
audioElement.currentTime=myProgressBar.value*audioElement.duration/100
})

 const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.add('fa-play-circle')
        element.classList.remove('fa-pause-circle')
    })

 }
 

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target)
        makeAllPlays()
        
        songIndex=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle')
        e.target.classList.add('fa-pause-circle')
        audioElement.src= `${songIndex+1}.mp3`
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime=0
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
        

    })
    
})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=8){
        songIndex=0
    }
    else{
        songIndex+=1
    }
       
        audioElement.src= `${songIndex+1}.mp3`
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})


document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex=0
    }
    else{
        songIndex-=1
    }
        
        audioElement.src= `${songIndex+1}.mp3`
        masterSongName.innerText=songs[songIndex].songName
        audioElement.currentTime=0
        audioElement.play()
        masterPlay.classList.remove('fa-play-circle')
        masterPlay.classList.add('fa-pause-circle')
})