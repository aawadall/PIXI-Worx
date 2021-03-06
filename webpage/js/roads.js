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
                y: 370
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
        },
        {
            id: 16,
            type: "corner",
            name: "Southeast corner",
            location: {
                x: 620,
                y: 380
            }
        },
        {
            id: 17,
            type: "corner",
            name: "Northeast corner",
            location: {
                x: 620,
                y: 350
            }
        },
        {
            id: 18,
            type: "corner",
            name: "Northwest corner",
            location: {
                x: 580,
                y: 350
            }
        },
        {
            id: 19,
            type: "corner",
            name: "Soutwest corner",
            location: {
                x: 580,
                y: 380
            }
        }
    ],
    controllers: [
        {
            id: 0,
            anchor: 16,
            name: "Northbound Traffic Controller",
            type: "vehicleTrafficLight",
            states: [
                {
                    id: 0,
                    value: "R",
                    name: "Red"
                },
                {
                    id: 1,
                    value: "G",
                    name: "Green"
                },
                {
                    id: 2,
                    value: "Y",
                    name: "Yellow"
                },
                {
                    id: 3,
                    value: "X",
                    name: "Dont Care"
                },
                {
                    id: 4,
                    value: "A",
                    name: "Absent"
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
        },
        {
            id: 1,
            anchor: 17,
            name: "Westbound Traffic Controller",
            type: "vehicleTrafficLight",
            states: [
                {
                    id: 0,
                    value: "R",
                    name: "Red"
                },
                {
                    id: 1,
                    value: "G",
                    name: "Green"
                },
                {
                    id: 2,
                    value: "Y",
                    name: "Yellow"
                },
                {
                    id: 3,
                    value: "X",
                    name: "Dont Care"
                },
                {
                    id: 4,
                    value: "A",
                    name: "Absent"
                }
            ],
            directions: [
                {
                    id: 0,
                    name: "Westbound",
                    direction: 10,
                    states: [0,1,2]
                },
                {
                    id: 1,
                    name: "Northbound",
                    direction: 6,
                    states: [0,1,2]
                },
                {
                    id: 2,
                    name: "Southbound",
                    direction: 14,
                    states: [0,1,2]
                }
            ]
        },
        {
            id: 2,
            anchor: 18,
            name: "Southbound Traffic Controller",
            type: "vehicleTrafficLight",
            states: [
                {
                    id: 0,
                    value: "R",
                    name: "Red"
                },
                {
                    id: 1,
                    value: "G",
                    name: "Green"
                },
                {
                    id: 2,
                    value: "Y",
                    name: "Yellow"
                },
                {
                    id: 3,
                    value: "X",
                    name: "Dont Care"
                },
                {
                    id: 4,
                    value: "A",
                    name: "Absent"
                }
            ],
            directions: [
                {
                    id: 0,
                    name: "Westbound",
                    direction: 10,
                    states: [0,1,2]
                },
                {
                    id: 1,
                    name: "Northbound",
                    direction: 6,
                    states: [0,1,2]
                },
                {
                    id: 2,
                    name: "Southbound",
                    direction: 14,
                    states: [0,1,2]
                }
            ]
        },
        {
            id: 3,
            anchor: 19,
            name: "Eastbound Traffic Controller",
            type: "vehicleTrafficLight",
            states: [
                {
                    id: 0,
                    value: "R",
                    name: "Red"
                },
                {
                    id: 1,
                    value: "G",
                    name: "Green"
                },
                {
                    id: 2,
                    value: "Y",
                    name: "Yellow"
                },
                {
                    id: 3,
                    value: "X",
                    name: "Dont Care"
                },
                {
                    id: 4,
                    value: "A",
                    name: "Absent"
                }
            ],
            directions: [
                {
                    id: 0,
                    name: "Westbound",
                    direction: 10,
                    states: [0,1,2]
                },
                {
                    id: 1,
                    name: "Northbound",
                    direction: 6,
                    states: [0,1,2]
                },
                {
                    id: 2,
                    name: "Southbound",
                    direction: 14,
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
                    lightFlag: "XXR",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "XXG",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "XXY",
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
                    lightFlag: "XRX",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "XGX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "XAG",
                    flow: true,
                    yieldTo: [
                        //TODO
                    ]
                },
                {
                    id: 3,
                    lightFlag: "XYX",
                    flow: true,
                    yieldTo: []
                }
            ]
        },
        {
            id: 2,
            type: "vehicleLane",
            name : "Northwest Bound",
            anchors: [ 0, 1, 10, 11 ],
            controller: 0,
            rules: [
                {
                    id: 0,
                    lightFlag: "RXX",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "GXX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "AXG",
                    flow: true,
                    yieldTo: [
                        //TODO
                    ]
                },
                {
                    id: 3,
                    lightFlag: "YXX",
                    flow: true,
                    yieldTo: []
                }
            ]
        },
        {
            id: 3,
            type: "vehicleLane",
            name : "Westbound",
            anchors: [ 4, 5, 10, 11 ],
            controller: 1,
            rules: [
                {
                    id: 0,
                    lightFlag: "XXR",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "XXG",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "XXY",
                    flow: true,
                    yieldTo: []
                }
            ]
        },
        {
            id: 4,
            type: "vehicleLane",
            name : "Northwest Bound",
            anchors: [ 4, 5, 6, 7 ],
            controller: 1,
            rules: [
                {
                    id: 0,
                    lightFlag: "XRX",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "XGX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "XYX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 3,
                    lightFlag: "XAX",
                    flow: true,
                    yieldTo: [
                        //TODO
                    ]
                }
            ]
        },
        {
            id: 5,
            type: "vehicleLane",
            name : "Southwest Bound",
            anchors: [ 4, 5, 14, 15 ],
            controller: 1,
            rules: [
                {
                    id: 0,
                    lightFlag: "RXX",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "GXX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "YXX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 3,
                    lightFlag: "AXG",
                    flow: true,
                    yieldTo: [
                        //TODO
                    ]
                },
                {
                    id: 4,
                    lightFlag: "AXR",
                    flow: false,
                    yieldTo: []
                }
            ]
        },
        {
            id: 6,
            type: "vehicleLane",
            name : "Southbound",
            anchors: [ 8, 9, 14, 15 ],
            controller: 2,
            rules: [
                {
                    id: 0,
                    lightFlag: "XXR",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "XXG",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "XXY",
                    flow: true,
                    yieldTo: []
                }
            ]
        },
        {
            id: 7,
            type: "vehicleLane",
            name : "Southwest Bound",
            anchors: [ 8, 9, 10, 11 ],
            controller: 2,
            rules: [
                {
                    id: 0,
                    lightFlag: "XRX",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "XGX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "XYX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 3,
                    lightFlag: "XAX",
                    flow: true,
                    yieldTo: [
                        //TODO
                    ]
                }
            ]
        },
        {
            id: 8,
            type: "vehicleLane",
            name : "Southeast Bound",
            anchors: [ 8, 9, 2, 3 ],
            controller: 2,
            rules: [
                {
                    id: 0,
                    lightFlag: "RXX",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "GXX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "YXX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 3,
                    lightFlag: "AXG",
                    flow: true,
                    yieldTo: [
                        //TODO
                    ]
                },
                {
                    id: 4,
                    lightFlag: "AXR",
                    flow: false,
                    yieldTo: []
                }
            ]
        },
        {
            id: 9,
            type: "vehicleLane",
            name : "Westbound",
            anchors: [ 12, 13, 2, 3 ],
            controller: 3,
            rules: [
                {
                    id: 0,
                    lightFlag: "XXR",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "XXG",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "XXY",
                    flow: true,
                    yieldTo: []
                }
            ]
        },
        {
            id: 10,
            type: "vehicleLane",
            name : "Southeast Bound",
            anchors: [ 12, 13, 14, 15 ],
            controller: 3,
            rules: [
                {
                    id: 0,
                    lightFlag: "XRX",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "XGX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "XYX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 3,
                    lightFlag: "XAX",
                    flow: true,
                    yieldTo: [
                        //TODO
                    ]
                }
            ]
        },
        {
            id: 11,
            type: "vehicleLane",
            name : "Northeast Bound",
            anchors: [ 12, 13, 6, 7 ],
            controller: 3,
            rules: [
                {
                    id: 0,
                    lightFlag: "RXX",
                    flow: false,
                    yieldTo: []
                },
                {
                    id: 1,
                    lightFlag: "GXX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 2,
                    lightFlag: "YXX",
                    flow: true,
                    yieldTo: []
                },
                {
                    id: 3,
                    lightFlag: "AXG",
                    flow: true,
                    yieldTo: [
                        //TODO
                    ]
                },
                {
                    id: 4,
                    lightFlag: "AXR",
                    flow: false,
                    yieldTo: []
                }
            ]
        }
    ]
};