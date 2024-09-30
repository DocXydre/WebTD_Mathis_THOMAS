// Importation des fonctions de test
import { test, expect } from 'bun:test';
// Importation de helloWorld
import { helloWorld } from '../src/hello-funcs';

// Test de la fonction helloWorld
test('helloWorld renvoie "Hello World!"', () => {
    expect(helloWorld()).toBe("Hello World!");
});





