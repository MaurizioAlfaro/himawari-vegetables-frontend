import React, { useState, useEffect, useRef } from 'react';
import { X, Send } from 'lucide-react';

interface CheckoutModalProps {
  onClose: () => void;
  onSubmit: (clientCode: string, note: string) => void;
  total: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ onClose, onSubmit, total }) => {
  const [clientCode, setClientCode] = useState('');
  const [note, setNote] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientCode.trim()) {
      onSubmit(clientCode.trim(), note.trim());
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div ref={modalRef} className="bg-brand-surface rounded-xl shadow-2xl p-8 w-full max-w-md transform transition-all animate-fade-in-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-brand-text-main">Confirm Order</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-brand-primary">
            <X size={28} />
          </button>
        </div>
        
        <div className="mb-6 text-center bg-brand-primary-light text-brand-primary font-bold py-3 rounded-lg">
          Total to Pay: ${total.toFixed(2)}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="clientCode" className="block text-sm font-bold text-brand-text-light mb-2">
              Client Code
            </label>
            <input
              id="clientCode"
              type="text"
              value={clientCode}
              onChange={(e) => setClientCode(e.target.value)}
              placeholder="e.g., C-123"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white text-brand-text-main"
            />
          </div>

          <div className="mb-8">
            <label htmlFor="note" className="block text-sm font-bold text-brand-text-light mb-2">
              Optional Note
            </label>
            <textarea
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Any special requests?"
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary bg-white text-brand-text-main"
            />
          </div>

          <button 
            type="submit"
            disabled={!clientCode.trim()}
            className="w-full bg-brand-primary text-white font-bold py-3 rounded-lg shadow-md hover:bg-orange-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            <Send size={20} />
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;