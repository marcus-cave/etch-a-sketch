const container = document.querySelector('#container');

const canvasResolution = 16 * 16;
const canvasSize = 800;

container.style.width = canvasSize + 'px';
container.style.height = canvasSize + 'px';

let pixelSize = (canvasSize/16) + "px";
console.log(pixelSize)

function generateCanvas() {

    for (let i = 0; i < canvasResolution; i++){
        const pixel = document.createElement('div');

        pixel.classList.add('pixel');
        pixel.style.width = pixelSize;
        pixel.style.height = pixelSize;
        container.append(pixel);
    };
    
};

generateCanvas();

const pixels = document.querySelectorAll('#container div');

pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', () => sketchPxl(pixel));
    
});

function sketchPxl(pixel) {
    pixel.style["background-color"] = "blue";
};

function clearCanvas() {
    pixels.forEach((pixel) => {
        pixel.style["background-color"] = "pink";
    });
}

const clearBtn = document.querySelector('#clearCanvas');

clearBtn.addEventListener('click', clearCanvas);