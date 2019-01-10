const Traffic = function (_width, _height) {
    this.controllers = new Array();
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

        // Rendering data
        const trafficPlateColor = 0x0F0F00;
        const dimTrafficLightColor = 0x010101;
        const stateColor = [
            0xFF0000, // R
            0x00FF00, // G
            0xFFFF00, // Y
            dimTrafficLightColor, // X
            dimTrafficLightColor // A
        ];
        const trafficPlateThickness = 10;
        const trafficLightRadious = 4;

        controllers.forEach(controller => { // Each traffic light
            console.log("New Controller");
            let toAdd = controller;
            let currentState = [];

            toAdd.directions.forEach( d =>
                currentState[d.id] = 0
            );
            toAdd.currentState = currentState;
            console.log("ANCHOR (X,Y) = (" +
                anchors[toAdd.anchor].location.x + "," +
                anchors[toAdd.anchor].location.y + ")"
            );
            toAdd.position = {};
            toAdd.position.x = anchors[toAdd.anchor].location.x;
            toAdd.position.y = anchors[toAdd.anchor].location.y;
            console.log("SAFE");
            this.controllers += toAdd;

        });
        // Render Controllers
        let index = 0;
        this.controllerSprites = [];
        // for each controller
        this.controllers.forEach(c => {

            this.controllerSprites[index] = PIXI.Graphics(); // Create new object

            // for each direction : draw a rectangle, always move to right
            const plateHeight = c.states.length * trafficPlateThickness;
            const plateWidth = c.directions.length * trafficPlateThickness;

            this.controllerSprites[index].beginFill(trafficPlateColor, 1);
            this.controllerSprites[index].drawRect( c.position.x,
                                                    c.position.y,
                                                    plateWidth,
                                                    plateHeight);

            let dIndex = 0;
            c.directions.forEach(d => {
                let sIndex = 0;
                c.states.forEach( s => {
                    if (c.currentState[dIndex] == sIndex) {
                        this.controllerSprites[index].beginFill(stateColor[sIndex]);
                    }
                    else
                    {
                        this.controllerSprites[index].beginFill(dimTrafficLightColor);
                    }

                    this.controllerSprites[index].drawCircle(c.position.x + (trafficPlateThickness /2) + (dIndex * trafficPlateThickness),
                                                             c.position.y + (trafficPlateThickness / 2) + (sIndex * trafficPlateThickness),
                                                                trafficLightRadious);
                    sIndex++;
                });
                dIndex++;
            });
            this.scene.addChild(this.controllerSprites[index]);

        index++;
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