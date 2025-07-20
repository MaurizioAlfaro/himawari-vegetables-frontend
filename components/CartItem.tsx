import React from 'react';
import { CartItem, OrderType } from '../types';
import { Trash2 } from 'lucide-react';

interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (productId: number, newQuantity: number) => void;
  onRemove: (productId: number) => void;
}

const CartItemComponent: React.FC<CartItemProps> = ({ item, onUpdateQuantity, onRemove }) => {
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseFloat(e.target.value);
    if (!isNaN(newQuantity)) {
      onUpdateQuantity(item.productId, newQuantity);
    }
  };

  const getDisplayQuantity = () => {
    if (item.orderType === OrderType.PRICE) {
      return `$${item.totalPrice.toFixed(2)} value`;
    }
    return `${item.quantity.toFixed(item.unit === 'kg' ? 2 : 0)}${item.unit === 'kg' ? 'kg' : ' pcs'}`;
  }

  return (
    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
      <div className="flex items-center gap-3">
        <img src={item.imageUrl} alt={item.name} className="w-12 h-12 object-cover rounded-md" />
        <div>
          <p className="font-bold text-brand-text-main">{item.name}</p>
          <p className="text-sm text-brand-text-light">{getDisplayQuantity()}</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <p className="font-bold text-brand-primary">${item.totalPrice.toFixed(2)}</p>
        <button onClick={() => onRemove(item.productId)} className="text-gray-400 hover:text-red-500 transition-colors">
          <Trash2 size={18} />
        </button>
      </div>
    </div>
  );
};

export default CartItemComponent;