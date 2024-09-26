// Étape 3 : importation de la fonction helloWorld et appel de la fonction
import { helloWorld } from './hello-funcs';
const message = helloWorld();
//console.log(message);

// Étape 4 : importation de la fonction helloYou et appel de la fonction
import { helloYou } from './hello-funcs';
//console.log(helloYou("John"));

// Étape 5 : importation du type Human et création d'un objet de type Human 
import { type Human } from './types';
const johnDoe: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980
};
// importation de la fonction helloHuman et appel de la fonction
import { helloHuman } from './hello-funcs';
console.log(helloHuman(johnDoe));

// Étape 6 : importation de la fonction repeatHelloWorld et appel de la fonction
import { repeatHelloWorld } from './hello-funcs';
console.log(repeatHelloWorld(4, "John"));


