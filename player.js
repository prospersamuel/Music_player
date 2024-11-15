let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");
let song2 = document.getElementById("song 2")
let next = document.getElementById("next")
let back = document.getElementById("back")


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;

}
function playPause(){
    if(ctrlIcon.classList.contains("pause")){
        song.play();
        ctrlIcon.src = "media/play.png"
        ctrlIcon.classList.remove("pause")
        ctrlIcon.classList.add("play")

    }else if(ctrlIcon.classList.contains("play")){
        song.pause();
        ctrlIcon.src = "media/pause.png"
        ctrlIcon.classList.add("pause")
        ctrlIcon.classList.remove("play")
    }
}



if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500)
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value
    ctrlIcon.src = "media/play.png"

}

