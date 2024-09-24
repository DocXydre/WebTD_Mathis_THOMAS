import {v4 as uuidv4} from "./uuid";
import validator from "./validator";


export class Starship {
    public ref: string;
    public speed: number;
    public status: starshipStatus = starshipStatus.PARKED;

    constructor(ref: string, speed: number) {
        this.ref = ref;
        this.speed = speed;
    }

}

export enum starshipStatus {
    "PARKED",
    "TAKING_OFF",
    "FLYING",
    "LANDING"
}

export function takeOff(starship: Starship): void {
    if (starship.status === starshipStatus.PARKED) {
        starship.status = starshipStatus.TAKING_OFF;
    }
    else {
        throw new Error("Starship is not parked");
    }
}

export function park (starship: Starship): void {
    if (starship.status === starshipStatus.LANDING) {
        starship.status = starshipStatus.PARKED;
    }
    else {
        throw new Error("Starship is not landing");
    }
}

export function land(starship: Starship): void {
    if (starship.status === starshipStatus.FLYING) {
        starship.status = starshipStatus.LANDING;
    }
    else {
        throw new Error("Starship is not flying");
    }
}

export function fly(starship: Starship): void {
    if (starship.status === starshipStatus.TAKING_OFF) {
        starship.status = starshipStatus.FLYING;
    }
    else {
        throw new Error("Starship is not taking off");
    }
}

