var bottom = document.querySelector(".bottom");
var hit =  document.querySelector(".hit");
var incressScore =  document.querySelector(".score");
var timerdiv =  document.querySelector(".timer")
var count = 30;
var score  = 0;
var random;

function getbubble () {
    bottom.innerHTML = ``
        for (let i  = 0; i<140; i++) {
            var rn = Math.floor(Math.random()*10);
        bottom.innerHTML += `<div id = 'bubblediv' >${rn}</div>`
        }
    }

function Score (){
    score +=10
    incressScore.textContent = `Score: ${score}`
    
 }   

function gethit(){
    random = `${Math.floor(Math.random()*10)}`
    hit.textContent += random;
}



bottom.addEventListener('click',function(dets){
     if(Number(dets.target.textContent) === random){
    Score();
    gethit();
    getbubble();
    console.log(dets)
}
else{
    bottom.innerHTML = `<h1> Game Over </h1>`
}
})


function timer(){
setInterval(function(){
    if(count>0){
        count--;
        timerdiv.textContent = count;
    }
    else{
        bottom.innerHTML =`<h1> Game Over </h1>`;
    }
},1000)
}
getbubble()
timer()
gethit()