
// Interface IProduct
export interface IProduct {
    id: string;                
    name: string;                
    unitOfMeasure: string;   // Unité de mesure (unité, kg, litre)
    getPrice(quantity: number): number; 
  }
  