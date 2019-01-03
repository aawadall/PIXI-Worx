// This file should contain a JSON object defining road network

const roadNetwork = {
    anchorPoints : [
        {
            id: 0,
            type: "source",
            name: "South Pool",
            location: {
                x: 500,
                y: 720
            }
        },
        {
            id: 1,
            type: "buffer",
            name: "Lower Vertical Binder",
            location: {
                x: 500,
                y: 350
            }
        },
        {
            id: 2,
            type: "buffer",
            name: "Left Horizontal Binder",
            location: {
                x: 490,
                y: 360
            }
        },
        {
            id: 3,
            type: "sink",
            name: "West Destination",
            location: {
                x: 0,
                t: 360
            }
        }
    ],
    directions : [
        {
            id: 0,
            name : "Northbound",
            anchors: [ 0, 1, 2, 3 ],
            lanes: [

            ]
        }
    ]
};