const section = document.getElementsByTagName("section")[0];
const plus = document.querySelector(".plus");
const clear = document.querySelector(".clear");
const clearall = document.querySelector(".clearall");

function randomColor() {
    let r = Math.round(Math.random()*255)
    let g = Math.round(Math.random()*255)
    let b = Math.round(Math.random()*255)

    return "rgb("+ r +","+ g +","+ b +")"
}

function randomDimension() {
    let s = Math.round(50+(Math.random()*40))
    return s + "px"
}

plus.addEventListener('mousemove', function() {
    const newBubble = document.createElement("div");
    newBubble.style.backgroundColor = randomColor()
    newBubble.setAttribute('class', 'card')
    const dim = randomDimension();
    newBubble.style.height = dim
    newBubble.style.width = dim

    newBubble.addEventListener('mouseover', function(e){
        newBubble.style.opacity = "0"
        newBubble.classList.add('invisible')
    })

    section.appendChild(newBubble);
})

clear.addEventListener('click', function() {
    const invDiv = section.querySelectorAll("div.invisible");
    invDiv.forEach(function(element) {
        section.removeChild(element);
    })
})

clearall.addEventListener('click', function(){
    section.innerHTML = ""
})