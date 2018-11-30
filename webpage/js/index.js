window.onload = function () {

    // Aliases
    let Application = PIXI.Application,
        loader = PIXI.loader,
        resources = PIXI.resources,
        Sprite = PIXI.Sprite;

    console.debug("DEBUG 2");
    //console.debug("Version: " + version);

    let app = new Application({
        width: 256,
        height: 256,
        antialias: true,
        transparent: false,
        resolution: 1
    });

    app.renderer.backgroundColor = 0x061639; 

    // Append Canvas to Page 
    let pixiContainer = document.getElementById("pixi-container");
    pixiContainer.appendChild(app.view);

    loader
        .add("./sprite0.png")
        .load(setup);

    console.debug(resources);

    function setup() {
        let sprite = new Sprite(resources["./sprite0.png"].texture);
        app.stage.addChild(sprite);
    }
    
    
}