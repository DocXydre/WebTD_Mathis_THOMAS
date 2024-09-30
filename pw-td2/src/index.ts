// Import la classe Starship et des fonctions de gestion des états du vaisseau
import { Starship } from "./Starship";
import { takeOff, park, land, fly } from "./Starship";

// Création d'un objet Starship
var starship = new Starship("Prometheus", 100000);
console.log(starship.ref);

// test de la fonction takeOff
console.log(starship.status);
takeOff(starship);
console.log(starship.status);

// test de la fonction fly
console.log(starship.status);
fly(starship);
console.log(starship.status);

// test de la fonction land
console.log(starship.status);
land(starship);
console.log(starship.status);

// test de la fonction park
console.log(starship.status);
park(starship);
console.log(starship.status);


// Création d'un type Planet
export type Planet = {
    name: string;
    distanceFromEarth: number;
}

// Création d'un tableau de planètes
let planets: Planet[] = [];

// Création des planètes
let mercury = {name: "Mercury", distanceFromEarth: 91691000};
let mars = {name: "Mars", distanceFromEarth: 225000000};
let venus = {name: "Venus", distanceFromEarth: 261000000};
let jupiter = {name: "Jupiter", distanceFromEarth: 365000000};
let saturn = {name: "Saturn", distanceFromEarth: 746000000};
let uranus = {name: "Uranus", distanceFromEarth: 1600000000};
let neptune = {name: "Neptune", distanceFromEarth: 4300000000};

// Ajout des planètes au tableau
planets.push(mercury, mars, venus, jupiter, saturn, uranus, neptune);
console.log(planets);


// Tri des planètes par distance
planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);
console.log(planets);

// Tri des planètes par nom (ordre alphabétique)
planets.sort((a, b) => a.name.localeCompare(b.name));
console.log(planets);

// Tri des planètes par nom (ordre alphabétique inverse)
planets.sort((a, b) => b.name.localeCompare(a.name));
console.log(planets);

// Calcul de la distance moyenne des planètes
let totalDistance = planets.reduce((acc, planet) => acc + planet.distanceFromEarth, 0);
let averageDistance = totalDistance / planets.length;
console.log(averageDistance);

// test de la fonction calculateFlightDurationFromEarth
// Import la fonction calculateFlightDurationFromEarth
import { calculateFlightDurationFromEarth } from "./utils/flightCalculator";

console.log(calculateFlightDurationFromEarth(saturn, starship, "days"));
console.log(calculateFlightDurationFromEarth(mars, starship, "hours"));
