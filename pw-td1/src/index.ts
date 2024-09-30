// Étape 3 : importation de la fonction helloWorld et appel de la fonction
import { helloWorld } from './hello-funcs';
    const message = helloWorld();
    console.log(message);

// Étape 4 : importation de la fonction helloYou et appel de la fonction
import { helloYou } from './hello-funcs';
try {
    console.log(helloYou("John"));
    console.log(helloYou(123)); // Argument incorrect
} catch (error) {
    console.error();
}

// Étape 5 : importation du type Human et création d'un objet de type Human 
import { type Human } from './types';
const johnDoe: Human = {
    firstname: "John",
    lastname: "Doe",
    birthyear: 1980
};
// importation de la fonction helloHuman et appel de la fonction
import { helloHuman } from './hello-funcs';
try {
    console.log(helloHuman(johnDoe));
    console.log(helloHuman({ firstname: "John" })); // Argument incorrect
} catch (error) {
    console.error();
}

// Étape 6 : importation de la fonction repeatHelloWorld et appel de la fonction
import { repeatHelloWorld } from './hello-funcs';
try {
    console.log(repeatHelloWorld(4, "John"));
    console.log(repeatHelloWorld("four", "John")); // Argument incorrect
} catch (error) {
    console.error();
}


