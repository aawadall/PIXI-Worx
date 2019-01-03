const Traffic = function (_width, _height) {
    this.renderer = new PIXI.CanvasRenderer(_width, _height);
    document.body.appendChild(this.renderer.view);

    /*
    this.stage = new PIXI.Stage(); // nominated for removal
    */
    // setup Physics simulation
    this.world = new p2.World({
        gravity: [0, 0],
    });
}