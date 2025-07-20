
import React from 'react';
import { Product, CartItem } from '../types';
import ProductCard from './ProductCard';
import Cart from './Cart';

interface StoreProps {
  products: Product[];
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateCartItemQuantity: (productId: number, newQuantity: number) => void;
  removeFromCart: (productId: number) => void;
  placeOrder: (clientCode: string, note: string) => void;
}

const Store: React.FC<StoreProps> = ({
  products,
  cartItems,
  addToCart,
  updateCartItemQuantity,
  removeFromCart,
  placeOrder
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3">
        <h1 className="text-3xl font-bold text-brand-text-main mb-6">今週の野菜 (This Week's Vegetables)</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={addToCart} />
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/3">
        <div className="sticky top-24">
          <Cart 
            items={cartItems} 
            onUpdateQuantity={updateCartItemQuantity} 
            onRemove={removeFromCart}
            onCheckout={placeOrder}
          />
        </div>
      </div>
    </div>
  );
};

export default Store;
