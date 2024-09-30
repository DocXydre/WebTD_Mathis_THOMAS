// Import de l'interface IProduct
import type { IProduct } from '../interfaces/IProduct';


// Interface OrderLine
interface OrderLine {
  product: IProduct;  // Produit ajouté au panier
  quantity: number;   // Quantité du produit
}

// Classe Cart 
export class Cart {
  private orderLines: OrderLine[] = []; 

  // Ajoute un produit au panier
  add(product: IProduct, quantity: number): void {
    this.orderLines.push({ product, quantity });
  }

  // Calcul le montant total pour un type de produit
  calculateAmountByProduct(product: IProduct): number {
    const orderLine = this.orderLines.find(line => line.product.id === product.id); 
    return orderLine ? orderLine.product.getPrice(orderLine.quantity) : 0; 
  }

  // Calcul le montant total du panier
  calculateAmount(): number {
    return this.orderLines.reduce((total, line) => total + line.product.getPrice(line.quantity), 0); 
  }

  // Affiche les détails de chaque produit dans le panier
  displayDetails(): string[] {
    return this.orderLines.map(line => 
      `ID: ${line.product.id}, Produit: ${line.product.name}, Unité: ${line.product.unitOfMeasure}, ` +
      `Quantité: ${line.quantity}, Prix Unitaire: ${line.product.getPrice(1).toFixed(2)}, ` +
      `Montant: ${this.calculateAmountByProduct(line.product).toFixed(2)}`
    );  
  }
}
