const Traffic = function (_width, _height) {
    this.controllers = [];
    this.renderer = new PIXI.CanvasRenderer(_width, _height);
    this.renderer.backgroundColor = 0x555555;
    document.body.appendChild(this.renderer.view);
    /*
    this.stage = new PIXI.Stage(); // nominated for removal
    */

    this.scene = new PIXI.Container();

    //requestAnimationFrame(this.renderer);
    // setup Physics simulation
    this.world = new p2.World({
        gravity: [0, 0],
    });

    console.log("DEBUG (Traffic) : Pre-Build function");
    this.build();

};


Traffic.prototype = {
    build: function () {
        this.buildRoadNetwork();
        this.buildControllers();
        this.initCars();

        requestAnimationFrame(this.tick.bind(this));
    },

    // Given Road Configuration object, define roads
    buildRoadNetwork : function () {
        // from roadNetwork from roads.js render roads
        // Each lane is are made of lines connecting two anchor points
        const anchors = roadNetwork.anchorPoints;
        const lanes = roadNetwork.lanes;
        const laneWidth = 15;
        const laneColor = 0x000000;
        const laneAlpha = 1.0;

        lanes.forEach( lane => {

                let laneStart = anchors[lane.anchors[0]];
                for(let idx=1; idx < lane.anchors.length; idx++ ) {
                    let laneEnd = anchors[lane.anchors[idx]];

                    // Draw Lanes
                    let laneSprite = new PIXI.Graphics();
                    laneSprite.lineStyle(laneWidth, laneColor, laneAlpha);
                    laneSprite.moveTo(laneStart.location.x, laneStart.location.y);
                    laneSprite.lineTo(laneEnd.location.x, laneEnd.location.y);
                    laneSprite.fillColor = laneColor;

                    this.scene.addChild(laneSprite);

                    //
                    laneStart = laneEnd;
                }
            }
        );
    },
    buildControllers : function () {
        // TODO
        const anchors = roadNetwork.anchorPoints;
        const controllers = roadNetwork.controllers;

        controllers.forEach(controller => { // Each traffic light

            let toAdd = controller;
            let currentState = [];
            toAdd.directions.forEach( d =>
                currentState[d.id] = 0
            );
            toAdd.currentState = currentState;
            this.controllers.add(toAdd);

        });

    },
    initCars: function () {
        // TODO
    },

    tick : function () {
        this.renderer.render(this.scene);
        requestAnimationFrame(this.tick.bind(this));
    }
};