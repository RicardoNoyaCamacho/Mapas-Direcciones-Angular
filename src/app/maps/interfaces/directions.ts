// Generated by https://quicktype.io

export interface DirectionsResponse {
    routes:    Route[];
    waypoints: Waypoint[];
    code:      string;
    uuid:      string;
}

export interface Route {
    geometry:    Geometry;
    legs:        Leg[];
    weight_name: string;
    weight:      number;
    duration:    number;
    distance:    number;
}

export interface Geometry {
    coordinates: Array<number[]>;
    type:        GeometryType;
}

export enum GeometryType {
    LineString = "LineString",
}

export interface Leg {
    summary:  string;
    weight:   number;
    duration: number;
    steps:    Step[];
    distance: number;
}

export interface Step {
    intersections: Intersection[];
    driving_side:  DrivingSide;
    geometry:      Geometry;
    mode:          Mode;
    maneuver:      Maneuver;
    weight:        number;
    duration:      number;
    name:          string;
    distance:      number;
}

export enum DrivingSide {
    Left = "left",
    Right = "right",
    Straight = "straight",
}

export interface Intersection {
    out?:     number;
    entry:    boolean[];
    bearings: number[];
    location: number[];
    in?:      number;
}

export interface Maneuver {
    bearing_after:  number;
    bearing_before: number;
    location:       number[];
    type:           ManeuverType;
    instruction:    string;
    modifier?:      DrivingSide;
}

export enum ManeuverType {
    Arrive = "arrive",
    Depart = "depart",
    NewName = "new name",
    Turn = "turn",
}

export enum Mode {
    Cycling = "cycling",
    PushingBike = "pushing bike",
}

export interface Waypoint {
    distance: number;
    name:     string;
    location: number[];
}
