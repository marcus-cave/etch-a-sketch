const container = document.querySelector('#container');
const colorRadioBtns = document.querySelectorAll('input[name="colorMode"]');


function generateCanvas(resolution) {

    const canvasResolution = resolution * resolution;
    const canvasSize = 800;

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

    let hue;
    let saturation = 100;
    let lightness = 50;
    
    console.log(checkColorMode());

    switch (checkColorMode()) {
        case 'red':
            hue = 0;
            break;
        case 'green':
            hue = 130;
            break;
        case 'blue':
            hue = 240;
            break;
        case 'rainbow':
            hue = Math.random() * 360;
            break;
    };

    console.log(`hsl(${hue}, ${saturation}%, ${lightness}%)`);

    pixel.style["background-color"] = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

};

function clearCanvas() {
    pixels.forEach((pixel) => {
        pixel.style["background-color"] = "pink";
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
    colorRadioBtns.forEach((radio) => {
        if (radio.checked) {
            selectedColorMode = radio.value;
        };
    });

    return selectedColorMode;
};
