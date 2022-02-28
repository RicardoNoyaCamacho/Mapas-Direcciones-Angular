// Generated by https://quicktype.io

export interface PlacesResponse {
    type:        string;
    query:       string[];
    features:    Feature[];
    attribution: string;
}

export interface Feature {
    id:            string;
    type:          string;
    place_type:    string[];
    relevance:     number;
    properties:    Properties;
    text_es:       string;
    language_es?:  string;
    place_name_es: string;
    text:          string;
    language?:     string;
    place_name:    string;
    center:        number[];
    geometry:      Geometry;
    context:       Context[];
}

export interface Context {
    id:           string;
    text_es:      string;
    text:         string;
    short_code?:  ShortCode;
    wikidata?:    Wikidata;
    language_es?: Language;
    language?:    Language;
}

export enum Language {
    Es = "es",
}

export enum ShortCode {
    MX = "mx",
    MXCmx = "MX-CMX",
}

export enum Wikidata {
    Q1489 = "Q1489",
    Q96 = "Q96",
}

export interface Geometry {
    coordinates: number[];
    type:        string;
}

export interface Properties {
    foursquare: string;
    landmark:   boolean;
    address:    string;
    category:   string;
}
