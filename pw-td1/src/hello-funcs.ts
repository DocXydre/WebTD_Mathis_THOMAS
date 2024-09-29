import { type Human } from './types';

// Étape 3 : création de la fonction helloWorld
export function helloWorld(): string {
    return "Hello World!";
}

// Étape 7 : modification des fonctions pour gérer les erreurs

// Étape 4 : création de la fonction helloYou
export function helloYou(name: string): string {
    if (!name || typeof name !== 'string') { // Si le nom n'est pas une chaîne de caractères ou est vide
        return "Error: Invalid name provided."; 
    }
    return "Hello, " + name + "!";
}

// Étape 5 : création de la fonction helloHuman
export function helloHuman(human: Human): string {
    if (!human || typeof human !== 'object' || !human.firstname || !human.lastname || !human.birthyear) {
        // Si l'objet human n'est pas un objet ou est vide ou il manque des propriétés
        return "Error: Invalid human object provided.";
    }
    const age = new Date().getFullYear() - human.birthyear;
    return `Hello, ${human.firstname} ${human.lastname}! You are ${age} years old.`;
}

// Étape 6 : création de la fonction repeatHelloWorld
export function repeatHelloWorld(n: number, name: string): string {
    if (typeof n !== 'number' || n <= 0) {
        // Si le nombre de répétitions n'est pas un nombre ou est inférieur ou égal à 0
        return "Error: Invalid number of repetitions provided.";
    }
    if (!name || typeof name !== 'string') {
        // Si le nom n'est pas une chaîne de caractères ou est vide
        return "Error: Invalid name provided.";
    }
    let message = "";
    for (let i = 0; i < n; i++) {
        message += helloYou(name) + "\n";
    }
    return message;
}