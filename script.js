var bottom = document.querySelector(".bottom");
var hit = document.querySelector(".hit");
var increaseScore = document.querySelector(".score");
var timerDiv = document.querySelector(".timer");
var count = 30;
var score = 0;
var random;

function getBubble() {
    bottom.innerHTML = '';
    for (let i = 0; i < 140; i++) {
        const rn = Math.floor(Math.random() * 10);
        bottom.innerHTML += `<div id='bubblediv' data-value>${rn}</div>`;
    }
}

function updateScore() {
    score += 10;
    increaseScore.textContent = `Score: ${score}`;
}

function getHit() {
    random = Math.floor(Math.random() * 10);
    hit.textContent = random.toString();
}

bottom.addEventListener('click', function(event) {
    if (Number(event.target.textContent) === random) {
        updateScore();
        getHit();
        getBubble();
    } else {
        bottom.innerHTML = '<h1> Game Over </h1>';
    }
});

function startTimer() {
    setInterval(function() {
        if (count > 0) {
            count--;
            timerDiv.textContent = count.toString();
        } else {
            bottom.innerHTML = '<h1> Game Over </h1>';
        }
    }, 1000);
}

getBubble();
startTimer();
getHit();