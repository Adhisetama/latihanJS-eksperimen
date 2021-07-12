const container = document.getElementsByClassName("container")[0];
const retry = container.getElementsByTagName('section')[0];
const score = document.querySelector(".score");
let point = 0;

function randomNum(from, to) {
    return Math.round(from + Math.random()*(to-from))
}

function meteorfall() {
    const meteor = document.createElement("div");
    const h = randomNum(70, 300);
    const w = randomNum(70, 300);
    meteor.style.width = h + "px"
    meteor.style.height = w + "px"
    meteor.style.left = randomNum(-10, 110) + "%"
    const bRadius = randomNum(10, 90) + "% " + randomNum(10, 90) + "% " + randomNum(10, 90) + "% " + randomNum(10, 90) + "%";
    meteor.style.borderRadius = bRadius
    container.appendChild(meteor);
    meteor.classList.add('meteor')
    console.log('tes');     
    setTimeout(function() {
        container.removeChild(meteor)
    }, 3000)
    point += Math.round(Math.sqrt(w*h))
    score.innerHTML = "SCORE: " + point
    if(retry.classList.contains('alert') === true) {
        clearInterval(meteorLoop)
    }
}

var meteorLoop = setInterval(meteorfall, 300)

container.addEventListener('mouseover', function(event) {
    if( event.target.className == 'meteor' ) {
        //alert('yu ded')
        retry.setAttribute('class', 'alert')
        container.style.cursor = "default"
    }
})

const tryAgain = retry.getElementsByTagName("a")[0];
tryAgain.onclick = function() {
    point *= 0
    score.innerHTML = "SCORE: 000"
    retry.classList.remove('alert')
    container.removeAttribute('style')
    meteorLoop = setInterval(meteorfall, 300)
}

container.onmouseleave = function() {
    retry.setAttribute('class', 'alert')
    container.style.cursor = "default"
}