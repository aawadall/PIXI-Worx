// This file should contain a JSON object defining road network

const roadNetwork = {
    anchorPoints : [
        {
            id: 0,
            type: "source",
            name: "South Pool",
            location: {
                x: 610,
                y: 720
            }
        },
        {
            id: 1,
            type: "buffer",
            name: "Lower Northbound Binder",
            location: {
                x: 610,
                y: 380
            }
        },
        {
            id: 2,
            type: "buffer",
            name: "Right Eastbound Binder",
            location: {
                x: 620,
                y: 370
            }
        },
        {
            id: 3,
            type: "sink",
            name: "East Sink",
            location: {
                x: 1200,
                t: 370
            }
        },
        {
            id: 4,
            type: "source",
            name: "East Pool",
            location: {
                x: 1200,
                y: 350
            }
        },
        {
            id: 5,
            type: "buffer",
            name: "Right Westbound Binder",
            location: {
                x: 620,
                y: 350
            }
        },
        {
            id: 6,
            type: "buffer",
            name: "Upper Northbound binder",
            location: {
                x: 610,
                y: 340
            }
        },
        {
            id: 7,
            type: "sink",
            name: "North Sink",
            location: {
                x: 610,
                y: 0
            }
        },
        {
            id: 8,
            type: "source",
            name: "North Pool",
            location: {
                x: 590,
                y: 0
            }
        },
        {
            id: 9,
            type: "buffer",
            name: "Upper Southbound Binder",
            location: {
                x: 590,
                y: 350
            }
        },
        {
            id: 10,
            type: "buffer",
            name: "Left Westbound Binder",
            location: {
                x: 580,
                y: 350
            }
        },
        {
            id: 11,
            type: "sink",
            name: "West Sink",
            location: {
                x: 0,
                y: 350
            }
        },
        {
            id: 12,
            type: "source",
            name: "West Pool",
            location: {
                x: 0,
                y: 370
            }
        },
        {
            id: 13,
            type: "buffer",
            name: "Left Eastbound Binder",
            location: {
                x: 580,
                y: 370
            }
        },
        {
            id: 14,
            type: "buffer",
            name: "Lower Southbound Binder",
            location: {
                x: 590,
                y: 380
            }
        },
        {
            id: 15,
            type: "sink",
            name: "South Sink",
            location: {
                x: 590,
                y: 720
            }
        }
    ],
    controllers: [
        {
            id: 0,
            anchor: 1,
            name: "Northbound Traffic Controller",
            type: "vehicleTrafficLight",
            states: [
                {
                    id: 0,
                    name: "Red"
                },
                {
                    id: 1,
                    name: "Green"
                },
                {
                    id: 2,
                    name: "Yellow"
                }
            ],
            directions: [
                {
                    id: 0,
                    name: "Northbound",
                    direction: 6,
                    states: [0,1,2]
                },
                {
                    id: 1,
                    name: "Eastbound",
                    direction: 2,
                    states: [0,1,2]
                },
                {
                    id: 2,
                    name: "Westbound",
                    direction: 10,
                    states: [0,1,2]
                }
            ]
        }
    ],
    lanes : [
        {
            id: 0,
            type: "vehicleLane",
            name : "Northbound",
            anchors: [ 0, 1, 6, 7 ],
            controller: 0,
            rules: [
                {
                    id: 0,
                    lightID: 0,
                    state: 0,
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightID: 0,
                    state: 1,
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightID: 0,
                    state: 2,
                    flow: true,
                    yieldTo: []
                }
            ]
        },
        {
            id: 1,
            type: "vehicleLane",
            name : "Northeast Bound",
            anchors: [ 0, 1, 2, 3 ],
            controller: 0,
            rules: [
                {
                    id: 0,
                    lightID: 1,
                    state: 0,
                    flow: true,
                    yieldTo: [
                        //TODO
                    ]
                },
                {
                    id: 1,
                    lightID: 1,
                    state: 1,
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightID: 1,
                    state: 2,
                    flow: true,
                    yieldTo: []
                }
            ]
        }
    ]
};