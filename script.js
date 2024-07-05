let counter = 0
let next = document.querySelector("#next")
let back = document.querySelector("#back")
let slider = document.querySelector(".slider")
let slides = document.querySelectorAll(".slide")

let time = setInterval(timerFunc,1000)
function timerFunc() {
    counter ++;
    if(counter < slides.length){
        slider.style.left = `${-800 * counter}px`
    }
    else if(counter == slides.length){
        counter = 0
        slider.style.left = 0
    }
    console.log(slider.style.left);
}
next.addEventListener('click', timerFunc())
back.addEventListener('click', () => {
    if(counter > 0){
        counter --;
        slider.style.left = `${-800 * counter}px`
    }
})

slider.addEventListener("mouseenter", ()=>{
    clearInterval(time)
})
slider.addEventListener("mouseleave", ()=>{
     time = setInterval(timerFunc,1000)
})

let first = document.querySelector('#first')
let last = document.querySelector('#last')
first.addEventListener('click',() =>{
    slider.style.left = `${-800 * 0}px`
})
last.addEventListener('click', ()=>{
    slider.style.left = `${-800 * (slides.length-1)}px`
})