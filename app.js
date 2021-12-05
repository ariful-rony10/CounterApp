// selecting elements form dom
const counter = document.querySelector('#counter');
const increaseButton = document.querySelector('#increase-btn');
const decreaseButton = document.querySelector('#decrease-btn');
const resetButton = document.querySelector('#reset-btn');

// functions
const increase = () => {
    let num = parseInt(counter);
    counter = num + 1;
}





// Event listeners
increaseButton.addEventListener('click', increase)