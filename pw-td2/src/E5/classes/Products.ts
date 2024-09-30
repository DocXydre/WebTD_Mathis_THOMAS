// Importation de l'interface IProduct et de la bibliothèque uuid
import type { IProduct } from '../interfaces/IProduct';
import { v4 as uuidv4 } from 'uuid';


// Classe Citron
export class Citron implements IProduct {
  id = uuidv4();
  name = 'Citron';
  unitOfMeasure = 'unité'; 
  pricePerUnit: number;

    // Constructeur
  constructor(pricePerUnit: number) {
    this.pricePerUnit = pricePerUnit;
  }

    // Calcul le prix total en fonction de la quantité
  getPrice(quantity: number): number {
    return this.pricePerUnit * quantity;
  }
}

// Classe Tomate
export class Tomate implements IProduct {
  id = uuidv4();
  name = 'Tomate';
  unitOfMeasure = 'kg';  
  pricePerKg: number;

  // Constructeur
  constructor(pricePerKg: number) {
    this.pricePerKg = pricePerKg;
  }

  // Calcul le prix total en fonction du poids en kilogramme
  getPrice(quantity: number): number {
    return this.pricePerKg * quantity;
  }
}

// Classe Huile d'olive
export class Huile implements IProduct {
  id = uuidv4();
  name = 'Huile d\'olive';
  unitOfMeasure = 'litre';  // Unité de mesure : litre
  pricePerLiter: number;

    // Construct
  constructor(pricePerLiter: number) {
    this.pricePerLiter = pricePerLiter;
  }

   // Calcul le prix total en fonction de du volume en litre
  getPrice(quantity: number): number {
    return this.pricePerLiter * quantity;
  }
}

// Classe Sucre, calculée au kilogramme
export class Sucre implements IProduct {
  id = uuidv4();
  name = 'Sucre';
  unitOfMeasure = 'kg';  // Unité de mesure : kilogramme
  pricePerKg: number;

    // Constructeur
  constructor(pricePerKg?: number) {
    // Génère un prix aléatoire si non spécifié
    this.pricePerKg = pricePerKg ?? Math.random() * 2 + 3;  
  }
  // Calcul le prix total en fonction du poids en kilogramme
  getPrice(quantity: number): number {
    return this.pricePerKg * quantity;
  }
}
