// Importation des fonctions de test
import { test, expect } from 'bun:test';
// Importation de helloHuman et du type Human
import { helloHuman } from '../src/hello-funcs';
import { type Human } from '../src/types';

// Test de la fonction helloHuman
test('helloHuman renvoie un message avec un Human valide', () => {
    const johnDoe: Human = { firstname: "John", lastname: "Doe", birthyear: 1980 };
    expect(helloHuman(johnDoe)).toBe("Hello, John Doe! You are 44 years old.");
});


// Test avec un Human sans prénom
test('helloHuman renvoie une erreur si le prénom est manquant', () => {
    const noFirstName: Human = { firstname: "", lastname: "Doe", birthyear: 1980 };
    expect(() => helloHuman(noFirstName)).toThrow("Error: Invalid human object provided.");
});

// Test avec un Human sans nom de famille
test('helloHuman renvoie une erreur si le nom de famille est manquant', () => {
    const noLastName: Human = { firstname: "John", lastname: "", birthyear: 1980 };
    expect(() => helloHuman(noLastName)).toThrow("Error: Invalid human object provided.");
});

// Test avec un Human sans année de naissance
test('helloHuman renvoie une erreur si lannée de naissance est manquante', () => {
    const noBirthYear: Human = { firstname: "John", lastname: "Doe", birthyear: undefined };
    expect(() => helloHuman(noBirthYear)).toThrow("Error: Invalid human object provided.");
});



