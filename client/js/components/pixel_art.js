
let currentColor = 'black'
let container;
let mouseDown;


function renderPixelArt() {
    document.querySelector('.page-CSS').innerHTML=`
    <link rel="stylesheet" href="./css/pixel.css">`

    document.querySelector('#page').innerHTML = `
        <form id="colorForm">
            
            <div class="brush" style="background-color: ${currentColor}"></div>
            <input type="text" id="colorInput">
            <button id="changeColor">Set Color</button>
        </form>
        <div class="container">
        </div>
    `
    document.querySelector('#colorForm').addEventListener('submit', event => {
        event.preventDefault()
        let brush = page.querySelector('.brush');
        let colorInput = page.querySelector('#colorInput');
    
        
        currentColor = colorInput.value;
        brush.style.backgroundColor = currentColor;
    })
    container = document.querySelector('.container');
    for (let i = 0; i < 2000; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel');
        container.appendChild(pixel);
    }

    container.addEventListener('mousedown', event => {
        event.target.style.backgroundColor = currentColor
        mouseDown = true;
    });
    
    container.addEventListener('mouseup', event => {
        mouseDown = false;
    });
    
    container.addEventListener('mouseover', event => {
        if (event.target === container) {} else {
            if (mouseDown) {
            event.target.style.backgroundColor = currentColor
            }
        }
    });
    
};







