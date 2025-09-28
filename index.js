const dino = document.getElementById('dino');
const rock = document.getElementById('rock');
const score = document.getElementById('score');
const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const container = document.querySelector('.container');
const ptag = document.getElementById('ptag');
const ending1 = document.querySelector('.ending1');
const ending2 = document.querySelector('.ending2');

function jump() {
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500);
}

document.addEventListener('keypress', () => {
    if (!dino.classList.contains('jump-animation')){
        jump();
    }
});

choice1.addEventListener('click', () => {
    container.style.display = "none";
    ptag.style.display = "none";
    ending2.style.display = "flex";
    setTimeout(function() {
   alert("You got a score of:" + score.innerText + 
            "\n\nPlay again?");
        location.reload();
    }, 1500);
});

choice2.addEventListener('click', () => {
    container.style.display = "none";
    ptag.style.display = "none";
    ending1.style.display = "flex";
    setTimeout(function() {
   alert("Yay you won with a score of:" + score.innerText + 
            "\n\nPlay again?");
        location.reload();
    }, 1500);

});


let intervalOne;

intervalOne = setInterval(() => {
    if (score.innerText >= 10) {
        rock.style.animation = "none";
        container.style.display = "flex"
        ptag.style.display = "block"
        clearInterval(intervalOne);
    } else{
        score.innerText++;
    }
    const dinoTop = parseInt(window.getComputedStyle(dino)
        .getPropertyValue('top'));
    const rockLeft = parseInt(window.getComputedStyle(rock)
        .getPropertyValue('left'));

    if (rockLeft < 0) { 
        rock.style.display = 'none';
    } else {
        rock.style.display = '';
    }

    if (rockLeft<50 && rockLeft >0 && dinoTop > 150){
        alert("You got a score of:" + score.innerText + 
            "\n\nPlay again?");
        location.reload();
    }
}, 50);