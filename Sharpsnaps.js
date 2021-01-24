let counter=0;
const slider=document.querySelectorAll('.container');
const next=document.getElementById('next');
const previous=document.getElementById('previous');

const hamburger = document.getElementById('hamburger');
const navUL = document.getElementById('nav-ul');

hamburger.addEventListener('click',() => {
    navUL.classList.toggle('show');
});

function reset() {
    for (let i = 0; i < slider.length; i++) {
        slider[i].style.display='none';
    }
}

function startSlide() {
    reset();
    slider[0].style.display='block';
}

function left() {
    reset();
    slider[counter -1].style.display='block';
    counter--;
}

previous.addEventListener('click',()=>{
    if (counter===0) {
        counter=slider.length
    }
    left();
})

function right() {
    reset();
    slider[counter +1].style.display='block';
    counter++;
}

next.addEventListener('click',()=>{
    if (counter===slider.length-1) {
        counter=-1
    }
    right();
})

startSlide();