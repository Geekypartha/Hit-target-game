var timer = 60;
var score = 0;
var hitrn = 0;

function makeBubble(){
    var clutter ="";
    for(var i = 0; i<=159 ; i++){
        var a = Math.floor(Math.random()*10);
        clutter+= `<div class="bubble">${a}</div>`;
    }
    document.querySelector("#bottompannel").innerHTML= clutter;
}

function runtimer(){
    var timerend = setInterval(function(){
        if(timer>0){
            timer--;
            document.querySelector("#timerval").textContent=timer;
        }else{
            clearInterval(timerend);
            document.querySelector("#bottompannel").innerHTML= "<h1>Game Over!! </h1> "+"\n"+"<h1>Your score = </h1>"+ score;    
        }
       
    },1000);
}

function gethit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function increasescore(){
    score+= 10;
    document.querySelector("#scoreval").textContent=score;

}

document.querySelector("#bottompannel").addEventListener("click",function(details){
    var clickednum = Number(details.target.textContent);
    if(clickednum==hitrn){
        increasescore();
        makeBubble();
        gethit();
    }
});
runtimer();
makeBubble();
gethit();

