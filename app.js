// declare variable
let count = 0;

// selecting elements form dom
const counter = document.querySelector('#counter');
const increaseButton = document.querySelector('#increase-btn');
const decreaseButton = document.querySelector('#decrease-btn');
const resetButton = document.querySelector('#reset-btn');

// functions
const increase = () => {
    let num = count++
    counter.innerText = num;
}
const decrease = () => {
    let num = count--;
    counter.innerText = num;
}
const reset = () => {
    counter.innerText = 0;
}





// Event listeners
increaseButton.addEventListener('click', increase)
decreaseButton.addEventListener('click', decrease)
resetButton.addEventListener('click', reset)