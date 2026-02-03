const container = document.querySelector('#container');

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
    const red = Math.random() * 255;
    const green = Math.random() * 255;
    const blue = Math.random() * 255;

    let pixelColor = [red, green, blue];
    console.log(pixelColor);

    pixel.style["background-color"] = `rgb(${pixelColor[0]}, ${pixelColor[1]}, ${pixelColor[2]})`;
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