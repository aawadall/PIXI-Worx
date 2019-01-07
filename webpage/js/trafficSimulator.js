const Traffic = function (_width, _height) {
    this.renderer = new PIXI.CanvasRenderer(_width, _height);
    this.renderer.backgroundColor = 0x555555;
    document.body.appendChild(this.renderer.view);

    /*
    this.stage = new PIXI.Stage(); // nominated for removal
    */

    const scene = new PIXI.Container();
    this.renderer.render(scene);
    requestAnimationFrame(this.renderer);
    // setup Physics simulation
    this.world = new p2.World({
        gravity: [0, 0],
    });

    this.build();

};

Traffic.prototype = {
    build: function () {
        this.buildRoadNetwork();
        this.buildControllers();
        this.initCars();
    },

    // Given Road Configuration object, define roads
    buildRoadNetwork : function () {
        // from roadNetwork from roads.js render roads
        // Each lane is are made of lines connecting two anchor points
        const anchors = roadNetwork.anchorPoints;
        const lanes = roadNetwork.lanes;
        lanes.forEach( lane => {
                let laneStart = anchors[lane.anchors[0]];
                for(let idx=1; idx < lane.anchors.length; idx++ ) {
                    let laneEnd = anchors[lane.anchors[idx]];
                    // Do Something
                    laneStart = laneEnd;
                }
            }
        );
    },
    buildControllers : function () {
        // TODO
    },
    initCars: function () {
        // TODO
    }
};