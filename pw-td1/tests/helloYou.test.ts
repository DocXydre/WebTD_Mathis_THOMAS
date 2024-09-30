// Importation des fonctions de test
import { test, expect } from 'bun:test';
// Importation de helloYou
import { helloYou } from '../src/hello-funcs';

// Test de la fonction helloYou avec un nom valide
test('helloYou renvoie un message de salutation pour un nom valide', () => {
    expect(helloYou("John")).toBe("Hello, John!");
});

// Test de la fonction helloYou avec un nombre
test('helloYou renvoie une erreur si le nom nest pas une chaîne de caractères', () => {
    expect(() => helloYou(123)).toThrow("Error: Invalid name provided.");
});

// Test de la fonction helloYou avec un nom vide
test('helloYou renvoie une erreur si le nom est vide', () => {
    expect(() => helloYou("")).toThrow("Error: Invalid name provided.");
});

// Test de la fonction helloYou sans nom
test('helloYou renvoie une erreur si aucun nom nest fourni', () => {
    expect(() => helloYou()).toThrow("Error: Invalid name provided.");
});
