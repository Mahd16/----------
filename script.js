let musics = [
    {
        name: 'Dark horse',
        cover: 'imgs/2.jpg',
        audio: new Audio('./musics/Dark Horse.mp3')
    },
   {
        name: 'love',
        cover: 'imgs/3.jpg',
        audio: new Audio('./musics/2.mp3')

    },
    {
        name: 'london',
        cover: 'imgs/1.jpg',
        audio: new Audio('./musics/3.mp3')

    }
]
let Name = document.querySelector('h1')
let cover = document.querySelector('img')
let time = document.querySelector('input')
let pre = document.querySelector('.pre')
let play = document.querySelector('.play')
let next = document.querySelector('.next')

let currentmusic = 0;
let audio = musics[currentmusic].audio;
cover.src = musics[currentmusic].cover;
Name.innerText = musics[currentmusic].name;

audio.addEventListener('canplay',()=>{
    time.max = audio.duration
})

audio.addEventListener('timeupdate',()=>{
    time.value = audio.currentTime;
    
})

time.addEventListener('input',()=>{
    audio.currentTime = time.value;


})


play.addEventListener('click',()=>{
    if(audio.paused){
        audio.play();
        cover.style.animationPlayState = 'running';
        play.name = "pause-circle-outline"

    }else{
        audio.pause();
        cover.style.animationPlayState = 'paused';
        play.name = "play-circle-outline"



    }
})

next.addEventListener('click',()=>{
    change('next')
    audio.addEventListener('canplay',()=>{
        time.max = audio.duration
    })
    
})
pre.addEventListener('click',()=>{
    change('pre')
    audio.addEventListener('canplay',()=>{
        time.max = audio.duration
    })
    
})

function change(state){
    audio.pause()
    time.value = 0
    play.name = "play-circle-outline"
    cover.style.animationPlayState = 'paused';

    if(state == 'next'){
        if(currentmusic == musics.length - 1)
            currentmusic = 0
            else currentmusic +=1
        
    }else{
        if(currentmusic == 0)
            currentmusic = musics.length - 1
            else currentmusic -=1

    }


    audio = musics[currentmusic].audio;
    cover.src = musics[currentmusic].cover;
    Name.innerText = musics[currentmusic].name;

    audio.addEventListener('timeupdate',()=>{
        time.value = audio.currentTime
    })
    
    


}

if(audio.ended == true){
    change('next')
}

