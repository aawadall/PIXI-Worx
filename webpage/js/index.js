window.onload = function () {

    //import * as PIXI  from 'pixi';

    let app = new PIXI.Application({
        width: 256,
        height: 256,
        antialias: true,
        transparent: false,
        resolution: 1
    });

    app.renderer.backgroundColor = 0x061639; 

    let pixiContainer = document.getElementById("pixi-container");
    pixiContainer.appendChild(app.view);

    let texture = PIXI.utils.TextureCache["img/sprite0.png"];
    let sprite = new PIXI.Sprite(texture);

    app.stage.addChild(sprite);
}