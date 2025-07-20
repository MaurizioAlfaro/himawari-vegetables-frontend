export enum OrderType {
  PIECE = 'piece',
  WEIGHT = 'weight',
  PRICE = 'price'
}

export interface Product {
  id: number;
  name: string;
  japaneseName: string;
  symbol: string;
  imageUrl: string;
  price: number; // Price per unit (kg or piece)
  unit: 'kg' | 'piece';
  stock: number;
}

export interface CartItem {
  productId: number;
  name: string;
  symbol: string;
  imageUrl: string;
  price: number;
  unit: 'kg' | 'piece';
  quantity: number; // The amount of pieces or kg
  orderType: OrderType;
  totalPrice: number;
}

export interface Order {
  id: string;
  clientCode: string;
  items: CartItem[];
  total: number;
  note: string;
  date: string;
  status: 'Pending' | 'Completed';
}