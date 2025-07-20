
import React, { useState } from 'react';
import { CartItem } from '../types';
import CartItemComponent from './CartItem';
import CheckoutModal from './CheckoutModal';
import { ShoppingBag, X } from 'lucide-react';

interface CartProps {
  items: CartItem[];
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemove: (productId: number) => void;
  onCheckout: (clientCode: string, note: string) => void;
}

const Cart: React.FC<CartProps> = ({ items, onUpdateQuantity, onRemove, onCheckout }) => {
  const [isCheckoutModalOpen, setCheckoutModalOpen] = useState(false);

  const total = items.reduce((sum, item) => sum + item.totalPrice, 0);

  const handleCheckout = (clientCode: string, note: string) => {
    onCheckout(clientCode, note);
    setCheckoutModalOpen(false);
  };

  return (
    <div className="bg-brand-surface rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-brand-text-main flex items-center gap-2">
          <ShoppingBag className="text-brand-primary"/>
          Your Cart
        </h2>
        <span className="bg-brand-primary-light text-brand-primary font-bold text-sm px-2 py-1 rounded-full">
          {items.length} items
        </span>
      </div>
      
      {items.length === 0 ? (
        <p className="text-brand-text-light text-center py-8">Your cart is empty. Add some fresh vegetables!</p>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {items.map(item => (
            <CartItemComponent 
              key={item.productId} 
              item={item} 
              onUpdateQuantity={onUpdateQuantity} 
              onRemove={onRemove} 
            />
          ))}
        </div>
      )}

      {items.length > 0 && (
        <>
          <div className="mt-6 pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center text-xl font-bold">
              <span className="text-brand-text-main">Total:</span>
              <span className="text-brand-primary">${total.toFixed(2)}</span>
            </div>
          </div>
          <button
            onClick={() => setCheckoutModalOpen(true)}
            className="w-full mt-6 bg-brand-accent text-white font-bold py-3 rounded-lg shadow-md hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105"
          >
            Proceed to Checkout
          </button>
        </>
      )}

      {isCheckoutModalOpen && (
        <CheckoutModal 
          onClose={() => setCheckoutModalOpen(false)} 
          onSubmit={handleCheckout}
          total={total}
        />
      )}
    </div>
  );
};

export default Cart;
