// Import des bibliothèques uuid et validator
import { v4 as uuidv4 } from "uuid";
import validator from "validator";

// Classe Starship
export class Starship {
    public id : string ;
    public ref: string;
    public speed: number;
    public status: starshipStatus = starshipStatus.PARKED;

    // Constructeur
    constructor(ref: string, speed: number, id?: string) {
        this.ref = ref;
        this.speed = speed;
        // Vérification de l'UUID si il est fourni
        if (id) {
            if (validator.isUUID(id, 4)) {
            this.id = id;
            } else {
            throw new Error("Invalid UUID");
            }
        // Sinon génération d'un UUID
        } else {
            this.id = uuidv4();
        }
    }
}

// Enumération des états du vaisseau
export enum starshipStatus {
    "PARKED",
    "TAKING_OFF",
    "FLYING",
    "LANDING"
}

// Fonctions de gestion des états du vaisseau

// Fonction de décollage
export function takeOff(starship: Starship): void {
    if (starship.status === starshipStatus.PARKED) {
        starship.status = starshipStatus.TAKING_OFF;
    }
    else {
        throw new Error("Starship is not parked");
    }
}

// Fonction d'atterrissage
export function park (starship: Starship): void {
    if (starship.status === starshipStatus.LANDING) {
        starship.status = starshipStatus.PARKED;
    }
    else {
        throw new Error("Starship is not landing");
    }
}

// Fonction d'atterrissage
export function land(starship: Starship): void {
    if (starship.status === starshipStatus.FLYING) {
        starship.status = starshipStatus.LANDING;
    }
    else {
        throw new Error("Starship is not flying");
    }
}

// Fonction de vol
export function fly(starship: Starship): void {
    if (starship.status === starshipStatus.TAKING_OFF) {
        starship.status = starshipStatus.FLYING;
    }
    else {
        throw new Error("Starship is not taking off");
    }
}


