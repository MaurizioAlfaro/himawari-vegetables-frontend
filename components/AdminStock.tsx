import React, { useState, useCallback } from 'react';
import { Product } from '../types';
import { Save, Minus, Plus, CheckCircle, Package } from 'lucide-react';

interface StockControlCardProps {
  product: Product;
  onUpdateStock: (productId: number, newStock: number) => void;
}

const StockControlCard: React.FC<StockControlCardProps> = ({ product, onUpdateStock }) => {
    const [currentStock, setCurrentStock] = useState(product.stock);
    const [isSaved, setIsSaved] = useState(false);
    
    const step = product.unit === 'kg' ? 0.5 : 1;
    const hasChanged = product.stock !== currentStock;

    const handleSave = () => {
        onUpdateStock(product.id, currentStock);
        setIsSaved(true);
        setTimeout(() => setIsSaved(false), 2000);
    };

    const handleStockChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setCurrentStock(value === '' ? 0 : parseFloat(value));
    };

    return (
        <div className="bg-brand-surface rounded-xl shadow-lg p-4 transition-all hover:shadow-xl flex flex-col sm:flex-row items-center gap-4">
            <img src={product.imageUrl} alt={product.name} className="w-24 h-24 object-cover rounded-lg flex-shrink-0" />
            <div className="flex-grow text-center sm:text-left">
                <h3 className="text-lg font-bold text-brand-text-main">{product.name}</h3>
                <p className="text-sm text-brand-text-light">{product.japaneseName}</p>
                <p className="text-xs text-brand-text-light mt-1">Unit: {product.unit}</p>
            </div>
            <div className="flex-shrink-0 flex items-center justify-center gap-2">
                <button 
                    onClick={() => setCurrentStock(s => Math.max(0, parseFloat((s - step).toFixed(2))))} 
                    className="p-2 rounded-full bg-gray-200 text-brand-text-light hover:bg-brand-primary hover:text-white transition-colors"
                    aria-label="Decrease stock"
                >
                    <Minus size={16} />
                </button>
                <div className="relative">
                    <input
                        type="number"
                        value={currentStock}
                        onChange={handleStockChange}
                        step={step}
                        className="w-28 text-center font-bold text-2xl bg-transparent border-b-2 border-brand-primary-light focus:outline-none focus:border-brand-primary transition-colors"
                        aria-label={`${product.name} stock quantity`}
                    />
                    <span className="absolute right-0 -bottom-4 text-xs text-brand-text-light">{product.unit}</span>
                </div>
                <button 
                    onClick={() => setCurrentStock(s => parseFloat((s + step).toFixed(2)))} 
                    className="p-2 rounded-full bg-gray-200 text-brand-text-light hover:bg-brand-primary hover:text-white transition-colors"
                    aria-label="Increase stock"
                >
                    <Plus size={16} />
                </button>
            </div>
            <div className="w-full sm:w-auto flex-shrink-0">
                <button 
                    onClick={handleSave} 
                    disabled={!hasChanged}
                    className={`w-full sm:w-auto px-4 py-2 rounded-lg font-bold text-white flex items-center justify-center gap-2 transition-all duration-300 ${
                        isSaved 
                            ? 'bg-brand-accent' 
                            : hasChanged 
                            ? 'bg-brand-primary hover:bg-orange-700' 
                            : 'bg-gray-300 cursor-not-allowed'
                    }`}
                >
                    {isSaved ? <CheckCircle size={20} /> : <Save size={20} />}
                    <span>{isSaved ? 'Saved!' : 'Save'}</span>
                </button>
            </div>
        </div>
    );
};


interface AdminStockProps {
  products: Product[];
  onUpdateStock: (productId: number, newStock: number) => void;
}

const AdminStock: React.FC<AdminStockProps> = ({ products, onUpdateStock }) => {
  return (
    <div>
      {products.length === 0 ? (
        <div className="text-center py-10 text-brand-text-light flex flex-col items-center gap-4">
            <Package size={48} className="text-gray-300"/>
            <p>No products available to manage.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {products.map(product => (
            <StockControlCard key={product.id} product={product} onUpdateStock={onUpdateStock} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminStock;