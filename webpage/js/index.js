window.onload = function () {

    //import * as PIXI from './pixi'

    //console.debug('Imported PIXI');

    let app = new PIXI.Application({
        width: 256,
        height: 256,
        antialias: true,
        transparent: false,
        resolution: 1
    });

    let pixiContainer = document.getElementById("pixi-container");
    pixiContainer.appendChild(app.view);

}