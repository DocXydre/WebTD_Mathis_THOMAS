// Importation des Classes Citron, Tomate, Huile et Sucre et Cart
import { Cart } from './classes/Cart';
import { Citron, Tomate, Huile, Sucre } from './classes/Products';

// Création d'un panier
const cart = new Cart();

// Création des produits avec des prix spécifiques
const citron = new Citron(0.5);     
const huile = new Huile(5);          
const sucre = new Sucre(3.9);        
const tomate = new Tomate(3.5);       

// Ajout des produits au panier avec leurs quantités respectives
cart.add(citron, 2);          
cart.add(huile, 1.5);               
cart.add(sucre, 0.5);               
cart.add(citron, 5);               
cart.add(sucre, 3);                  
cart.add(tomate, 1.5);              

// Affichage des informations 
console.log('Nombre de types de produits dans le panier :', cart['orderLines'].length); 
console.log('Montant pour les tomates :', cart.calculateAmountByProduct(tomate).toFixed(2));  
console.log('Montant total :', cart.calculateAmount().toFixed(2));  
console.log('Détails du panier :', cart.displayDetails().join('\n')); 
