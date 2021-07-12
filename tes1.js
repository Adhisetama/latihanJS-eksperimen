function addColor() {
    let red = Math.round(Math.random()*255);
    let green = Math.round(Math.random()*255);
    let blue = Math.round(Math.random()*255);
    
    const colorString = "rgb(" + red + ","+ green + "," + blue + ")";
    return colorString
}
const p = document.querySelector("p");

const tUbahWarna = document.createElement("div");
const textUbahWarna = document.createTextNode("ganti warna");
tUbahWarna.appendChild(textUbahWarna);

const body = document.querySelector("body");
p.after(tUbahWarna);
tUbahWarna.setAttribute("class", "tombol")

const par = document.querySelector("p");
const tombol = document.querySelector(".tombol");

tombol.addEventListener("click", function() {
    body.classList.add("colorGen")
    document.querySelector(".colorGen").style.backgroundColor = addColor();
})

const merah = document.querySelector("input[name=merah]");
const hijau = document.querySelector("input[name=hijau]");
const biru = document.querySelector("input[name=biru]")

function gantiWarna() {
    const r = merah.value
    const g = hijau.value
    const b = biru.value
    document.body.style.backgroundColor = "rgb("+ r +","+ g +","+ b +")"
}

merah.addEventListener('input', gantiWarna)
hijau.addEventListener('input', gantiWarna)
biru.addEventListener('input', gantiWarna)

// variabel untuk fungsi penambahan warna biru
let mouseBiru = 0
let i = 0
document.body.addEventListener('mousemove', function(e) {
    if(mouseBiru >= 255 && i == 0) {i = 1}
    else if(mouseBiru <= 0 && i == 1) {i = 0}
    else if(i == 0) {mouseBiru+=2}
    else if(i == 1) {mouseBiru-=2}
    const posX = Math.round(255*(e.clientX/window.innerWidth));
    const posY = Math.round(255*(e.clientY/window.innerWidth));
    p.style.color = "rgb("+ posX +","+ posY +","+ mouseBiru +")"
    console.log(mouseBiru);
})