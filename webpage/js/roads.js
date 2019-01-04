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
    lanes : [
        {
            id: 0,
            type: "vehicleLane",
            name : "Northbound",
            anchors: [ 0, 1, 6, 7 ],
            controllers: [
                {
                    id: 0,
                    anchor: 1,
                    type: "vehicleTrafficLight",
                    name: "Northbound Traffic Controller",
                    states: [
                        {
                            id: 0,
                            name: "Green",
                            control: {
                                flow: true,
                                yield: []
                            }
                        },
                        {
                            id: 1,
                            name: "Yellow",
                            control: {
                                flow: true,
                                yield: []
                            }
                        },
                        {
                            id: 2,
                            name: "Red",
                            control: {
                                flow: false,
                                yield: []
                            }
                        },
                        {
                            id: 3,
                            name: "Green Right",
                            control: {
                                flow: false,
                                yield: []
                            }
                        },
                        {
                            id: 4,
                            name: "Green Left",
                            control: {
                                flow: false,
                                yield: []
                            }
                        }
                    ]
                }
            ]
        },
        {
            id: 1,
            type: "vehicleLane",
            name : "Northeast Bound",
            anchors: [ 0, 1, 2, 3 ],
            controllers: [
                {
                    id: 0,
                    anchor: 1,
                    type: "vehicleTrafficLight",
                    name: "Northbound Traffic Controller",
                    states: [
                        {
                            id: 0,
                            name: "Green",
                            control: {
                                flow: true,
                                yield: [
                                    // TODO: define northbound pedestrian flow
                                    // TODO: define southbound pedestrian flow
                                ]
                            }
                        },
                        {
                            id: 1,
                            name: "Yellow",
                            control: {
                                flow: true,
                                yield: [
                                    // TODO: define northbound pedestrian flow
                                    // TODO: define southbound pedestrian flow
                                ]
                            }
                        },
                        {
                            id: 2,
                            name: "Red",
                            control: {
                                flow: true,
                                yield: [
                                    // TODO: define eastbound flow
                                    // TODO: define southeast bound flow
                                    // TODO: define northbound pedestrian flow
                                    // TODO: define southbound pedestrian flow
                                ]
                            }
                        },
                        {
                            id: 3,
                            name: "Green Right",
                            control: {
                                flow: true,
                                yield: []
                            }
                        },
                        {
                            id: 4,
                            name: "Green Left",
                            control: {
                                flow: true,
                                yield: [
                                    // TODO: define yield to southeast bound flow
                                ]
                            }
                        }
                    ]
                }
            ]
        }
    ]
};