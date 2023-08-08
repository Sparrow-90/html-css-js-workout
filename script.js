console.log('Hello from Nerdbord!');

const box = document.querySelector('.box');
const colors = ['red', 'lightblue', 'cadetblue','#F97316'];
let currentIndex = 0;

function changeBorderColor(){
    box.style.borderColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length
}

setInterval(changeBorderColor, 3000)
