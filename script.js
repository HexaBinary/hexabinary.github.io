const container = document.querySelector('.container');

const { start_x, start_y, image } = require('./config.json');

function imgProcess(image)
{
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(0,c.height);
    ctx.stroke();
}

function populate(startX, startY, image) {
    var pixelSize = 16;
    var pixelSizeWithOffset = 18;
    for (let i = 0; i < image.length; i++) {
        for (let j = 0; j < image[i].length; j++) {
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            const anchor = document.createElement("a");
            anchor.setAttribute("href", `https://new.reddit.com/r/place/?cx=${start_x+j}&cy=${start_y+i}&px=20`);
            anchor.setAttribute("target", "_blank");
            // add onmouseover event
            pixel.addEventListener('mouseover', function(e) {
                onPixelHover(pixelSizeWithOffset*j+30, pixelSizeWithOffset*i, start_x+j, start_y+i);
            });
        
            pixel.style.width = `${pixelSize}px`;
            pixel.style.height = `${pixelSize}px`;

            pixel.style.left = `${pixelSizeWithOffset * j}px`;
            pixel.style.top = `${pixelSizeWithOffset * i}px`;
            
            pixel.style.top = 10;
            rgb = image[i][j];
            pixel.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
            anchor.appendChild(pixel);
            container.appendChild(anchor);
            
        }
    }
}

function onPixelHover(j_pos, i_pos, j_label, i_label) {
    const pos = document.getElementById("pos");
    pos.innerText = "(" + j_label + ", " + i_label + ")";
    pos.style.left = j_pos + "px";
    pos.style.top = i_pos + "px";
}

populate(startX, startY, image_arr);


