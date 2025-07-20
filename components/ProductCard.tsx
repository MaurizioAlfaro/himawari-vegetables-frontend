import React, { useState, useMemo } from 'react';
import { Product, CartItem, OrderType } from '../types';
import { PlusCircle, MinusCircle, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (item: CartItem) => void;
}

const OrderTypeButton: React.FC<{
  label: string;
  orderType: OrderType;
  currentType: OrderType;
  onClick: (type: OrderType) => void;
}> = ({ label, orderType, currentType, onClick }) => {
  const isActive = currentType === orderType;
  return (
    <button
      onClick={() => onClick(orderType)}
      className={`px-3 py-1 text-sm rounded-full transition-colors ${
        isActive
          ? 'bg-brand-primary text-white shadow'
          : 'bg-gray-200 text-brand-text-light hover:bg-gray-300'
      }`}
    >
      {label}
    </button>
  );
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [orderType, setOrderType] = useState<OrderType>(product.unit === 'piece' ? OrderType.PIECE : OrderType.WEIGHT);
  const [quantity, setQuantity] = useState<number>(1);

  const handleAddToCart = () => {
    if (quantity <= 0) return;
    
    let itemQuantity = quantity;
    let totalPrice = 0;
    
    if (orderType === OrderType.PRICE) {
      itemQuantity = quantity / product.price;
      totalPrice = quantity;
    } else {
      totalPrice = product.price * quantity;
    }

    const cartItem: CartItem = {
      productId: product.id,
      name: product.name,
      symbol: product.symbol,
      imageUrl: product.imageUrl,
      price: product.price,
      unit: product.unit,
      quantity: itemQuantity,
      orderType,
      totalPrice,
    };
    onAddToCart(cartItem);
    setQuantity(1); // Reset for next addition
  };

  const getLabel = () => {
    if (orderType === OrderType.PIECE) return `piece${quantity > 1 ? 's' : ''}`;
    if (orderType === OrderType.WEIGHT) return 'kg';
    if (orderType === OrderType.PRICE) return '$ worth';
    return '';
  };
  
  const getStep = () => {
    if (orderType === OrderType.PIECE) return 1;
    if (orderType === OrderType.WEIGHT) return 0.1;
    if (orderType === OrderType.PRICE) return 1.0;
    return 1;
  }
  
  const isOutOfStock = product.stock <= 0;

  const totalPrice = useMemo(() => {
    if (orderType === OrderType.PRICE) return quantity;
    return product.price * quantity;
  }, [quantity, orderType, product.price]);

  return (
    <div className={`bg-brand-surface rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col ${isOutOfStock ? 'opacity-50' : ''}`}>
      <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-5 flex-grow flex flex-col">
        <div className="flex-grow">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-brand-text-main">{product.name}</h3>
              <p className="text-brand-text-light">{product.japaneseName}</p>
            </div>
          </div>
          <div className="mt-2 text-sm text-brand-text-light">
            <p>Price: ${product.price.toFixed(2)} / {product.unit}</p>
            <p>Stock: {product.stock.toFixed(2)} {product.unit}</p>
          </div>
        </div>
        
        {isOutOfStock ? (
          <div className="mt-6 text-center text-red-500 font-bold">Out of Stock</div>
        ) : (
          <div className="mt-4">
            <div className="flex justify-center items-center space-x-2">
              {product.unit === 'piece' && <OrderTypeButton label="Piece" orderType={OrderType.PIECE} currentType={orderType} onClick={setOrderType} />}
              {product.unit === 'kg' && <OrderTypeButton label="Weight" orderType={OrderType.WEIGHT} currentType={orderType} onClick={setOrderType} />}
              <OrderTypeButton label="By Price" orderType={OrderType.PRICE} currentType={orderType} onClick={setOrderType} />
            </div>
            
            <div className="mt-4 flex items-center justify-center space-x-4">
              <button onClick={() => setQuantity(q => Math.max(getStep(), q - getStep()))} className="text-brand-primary disabled:text-gray-300">
                <MinusCircle />
              </button>
              <div className="flex flex-col items-center">
                <input
                  type="number"
                  value={quantity}
                  onChange={e => setQuantity(Math.max(0, parseFloat(e.target.value) || 0))}
                  step={getStep()}
                  className="w-24 text-center font-bold text-2xl bg-transparent border-b-2 border-brand-primary-light focus:outline-none focus:border-brand-primary"
                />
                <span className="text-xs text-brand-text-light">{getLabel()}</span>
              </div>
              <button onClick={() => setQuantity(q => q + getStep())} className="text-brand-primary">
                <PlusCircle />
              </button>
            </div>
          </div>
        )}
      </div>
      
      <button 
        onClick={handleAddToCart} 
        disabled={quantity <= 0 || isOutOfStock}
        className="w-full bg-brand-primary text-white font-bold py-3 px-4 flex items-center justify-center gap-2 hover:bg-orange-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed">
        <ShoppingCart size={20}/>
        <span>Add to Cart (${totalPrice.toFixed(2)})</span>
      </button>
    </div>
  );
};

export default ProductCard;