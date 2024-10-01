// Import le type Planet et  la classe Starship
import { type Planet } from "../index";
import { Starship } from "../Starship";

export function calculateFlightDurationFromEarth(planet: Planet, starship: Starship, unity?: string): number {
    let distance = planet.distanceFromEarth;
    let speed = starship.speed;
    let duration = distance / speed;
    if (unity === "days") {
        duration = duration / 24;
    }
    return duration;
}