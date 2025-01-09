var botoom = document.querySelector(".bottom");
var hit =  document.querySelector(".hit");
var score =  document.querySelector(".score");
var count = 0 ;



hit.innerHTML += `${Math.floor(Math.random()*10)}`
if (count<=100) {
    count+=10;
    console.log(count)
    
}
else{
    count--;
    console.log(count)
}
score.innerHTML += count+ " Points";


for (let i  = 0; i<140; i++) {
    botoom.innerHTML += `<h1>${Math.floor(Math.random()*10)}</h1>`
}