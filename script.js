const container = document.querySelector('#container');
const colorSelectBox = document.querySelector('#colorMode');

let hue = 0;
let saturation = 100;
let lightness = 50;

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;
console.log(screenWidth);

function generateCanvas(resolution) {

    const canvasResolution = resolution * resolution;
    const canvasSize = screenHeight * 0.7;

    container.style.width = canvasSize + 'px';
    container.style.height = canvasSize + 'px';

    let pixelSize = (canvasSize/resolution) + "px";
    console.log(pixelSize)


    for (let i = 0; i < canvasResolution; i++){
        const pixel = document.createElement('div');

        pixel.classList.add('pixel');
        pixel.style.width = pixelSize;
        pixel.style.height = pixelSize;
        container.append(pixel);
    };
    
};

generateCanvas(16);

let pixels = document.querySelectorAll('#container div');

startSketch();


function startSketch() {

    pixels = document.querySelectorAll('#container div');

    pixels.forEach((pixel) => {
        pixel.addEventListener('mouseover', () => sketchPxl(pixel));
        
    });
};



function sketchPxl(pixel) {

    switch (checkColorMode()) {
        case 'black':
            hue = 0;
            saturation = 0;
            lightness = 0;
            break;
        case 'red':
            hue = 0;
            saturation = 100;
            lightness = 50;
            break;
        case 'green':
            hue = 130;
            saturation = 100;
            lightness = 50;
            break;
        case 'blue':
            hue = 240;
            saturation = 100;
            lightness = 50;
            break;
        case 'rainbow':
            hue = hue + 10;
            saturation = 100;
            lightness = 50;
            break;
    };

    pixel.style["background-color"] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

};

function clearCanvas() {
    pixels.forEach((pixel) => {
        pixel.style["background-color"] = "white";
    });
}

const clearBtn = document.querySelector('#clearCanvas');
clearBtn.addEventListener('click', clearCanvas);

const resolutionPromptBtn = document.querySelector('#resolutionPromptRequest');
resolutionPromptBtn.addEventListener('click', resolutionPrompt);


function resolutionPrompt() {
    const newResolution = prompt("Enter new resolution. (Max 100)");

    if (newResolution > 100) {
        alert("ERROR - Resolution entered is too big. Please enter a resolution less than 100 pixels.");
        return
    };

    if (newResolution == null) {
        return
    };

    clearScreen();
    generateCanvas(newResolution);
    startSketch();

};

function clearScreen() {
    pixels.forEach((pixel) => {
        container.removeChild(pixel);
    })
};

function checkColorMode() {
    let selectedColorMode;

    selectedColorMode = colorSelectBox.value;

    console.log(selectedColorMode);
    return selectedColorMode;
};
