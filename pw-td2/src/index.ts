import { Starship } from "./Starship";

var starship = new Starship("Prometheus", 100000);
console.log(starship.ref);

export type Planet = {
    name: string;
    distanceFromEarth: number;
}

let planets: Planet[] = [];

let mercury = {name: "Mercury", distanceFromEarth: 91691000};
let mars = {name: "Mars", distanceFromEarth: 225000000};
let venus = {name: "Venus", distanceFromEarth: 261000000};
let jupiter = {name: "Jupiter", distanceFromEarth: 365000000};
let saturn = {name: "Saturn", distanceFromEarth: 746000000};
let uranus = {name: "Uranus", distanceFromEarth: 1600000000};
let neptune = {name: "Neptune", distanceFromEarth: 4300000000};


planets.push(mercury, mars, venus, jupiter, saturn, uranus, neptune);

console.log(planets);

planets.sort((a, b) => a.distanceFromEarth - b.distanceFromEarth);

console.log(planets);

planets.sort((a, b) => a.name.localeCompare(b.name));

console.log(planets);

planets.sort((a, b) => b.name.localeCompare(a.name));
console.log(planets);

let totalDistance = planets.reduce((acc, planet) => acc + planet.distanceFromEarth, 0);
let averageDistance = totalDistance / planets.length;
console.log(averageDistance);
