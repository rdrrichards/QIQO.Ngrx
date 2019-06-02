export interface Product {
  productKey: number;
  productCode: string;
  productType?: string;
  productName: string;
  productDesc?: string;
  productShortDesc?: string;
  productLongDesc?: string;
  productImagePath?: string;
  productBasePrice?: number;
  productBaseQuantity?: number;
}
