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

    var sprite0 = PIXI.Sprite.fromImage("https://crossorigin.me/http://ec2-35-183-234-23.ca-central-1.compute.amazonaws.com/img/sprite0.png");
    loader
        .add("./sprite0.png")
        .load(setup);

    //console.debug(resources);

    function setup() {
        //let sprite = new Sprite(resources["./sprite0.png"].texture);
        app.stage.addChild(sprite0);
    }
    
    
}