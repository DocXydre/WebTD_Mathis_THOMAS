import { v4 as uuidv4 } from "uuid";
import validator from "validator";



export class Starship {
    public id : string ;
    public ref: string;
    public speed: number;
    public status: starshipStatus = starshipStatus.PARKED;

    constructor(ref: string, speed: number, id?: string) {
        this.ref = ref;
        this.speed = speed;
        if (id) {
            if (validator.isUUID(id, 4)) {
            this.id = id;
            } else {
            throw new Error("Invalid UUID");
            }
        } else {
            this.id = uuidv4();
        }
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


