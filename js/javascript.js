let cancion=document.getElementById("cancion");
let play_pause_btn=document.getElementById("play_pause_btn");
let cover=document.getElementById("caratula");
let controls=document.querySelector(".controls");
let is_playing = false;
play_pause_btn.addEventListener("click", () =>{
    if(is_playing){
        cancion.pause();
        cover.style.animationPlayState ="paused";
        controls.style.animationPlayState ="paused";
        play_pause_btn.innerHTML ="▶";
        is_playing=false;
    }
    else{
        cancion.play();
        cover.style.animationPlayState ="running";
        controls.style.animationPlayState ="running";
        play_pause_btn.innerHTML ="||";
        is_playing=true;
    }
});
function stop(){
    if(index_no <ALL_song.length - 1)
    {
    index_no += 1;
    load_track(index_no);
    playsong();
    }
    else{
        index_no = 0 ;
        load_track(index_no);
        playsong();
    }
}