const makeBlue = () => {
    const header = document.querySelector('.header');
    header.style.color = "#0000cc";
}

const makeBigger = () => {
    const header = document.querySelector('.header');
    header.style.fontSize = "150px";
}


const btn = document.querySelector('button');
btn.addEventListener('click', (event) => {
    makeBlue();
    event.stopImmediatePropagation(); // 
});
btn.addEventListener('click', makeBigger);