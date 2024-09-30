// Importation des fonctions de test
import { test, expect } from 'bun:test';
// Importation de helloWorld
import { repeatHelloWorld } from '../src/hello-funcs';

// Test de la fonction repeatHelloWorld avec un nombre valide et un nom valide
test('repeatHelloWorld renvoie un message répété', () => {
    expect(repeatHelloWorld(2, "John")).toBe("Hello, John!\nHello, John!\n");
});

// Test de la fonction repeatHelloWorld avec un nombre invalide
test('repeatHelloWorld renvoie une erreur si le nombre de répétitions nest pas un nombre', () => {
    expect(repeatHelloWorld("two", "John")).toBe("Error: Invalid number of repetitions provided.");
});

// Test de la fonction repeatHelloWorld avec un nom invalide
test('repeatHelloWorld renvoie une erreur si le nom nest pas une chaîne de caractères', () => {
    expect(repeatHelloWorld(2, 123)).toBe("Error: Invalid name provided.");
});

// Test de la fonction repeatHelloWorld sans nom
test('repeatHelloWorld renvoie une erreur si aucun nom nest fourni', () => {
    expect(repeatHelloWorld(2)).toBe("Error: Invalid name provided.");
});

// Test de la fonction repeatHelloWorld sans nombre de répétitions
test('repeatHelloWorld renvoie une erreur si le nombre de répétitions nest pas fourni', () => {
    expect(repeatHelloWorld("John")).toBe("Error: Invalid number of repetitions provided.");
});


// Test de la fonction repeatHelloWorld sans paramètres
test('repeatHelloWorld renvoie une erreur si aucun paramètre nest fourni', () => {
    expect(repeatHelloWorld()).toBe("Error: Invalid number of repetitions provided.");
});

// Test de la fonction repeatHelloWorld avec un nombre de répétitions nul
test('repeatHelloWorld renvoie une erreur si le nombre de répétitions est nul', () => {
    expect(repeatHelloWorld(0, "John")).toBe("Error: Invalid number of repetitions provided.");
});

