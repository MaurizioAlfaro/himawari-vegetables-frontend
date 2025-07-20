import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShoppingCart, Sun, Shield } from 'lucide-react';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  const activeLinkStyle = {
    color: '#EA580C',
    borderColor: '#EA580C',
  };

  return (
    <header className="bg-brand-text-main shadow-lg sticky top-0 z-40">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-brand-primary transition-colors">
          <Sun className="w-8 h-8 text-brand-primary"/>
          <span>HIMAWARI</span>
        </NavLink>
        <nav className="flex items-center gap-8">
          <NavLink
            to="/store"
            className="text-lg font-medium text-gray-300 hover:text-brand-primary transition-colors border-b-2 border-transparent"
            style={({ isActive }) => isActive ? activeLinkStyle : {}}
          >
            Store
          </NavLink>
          <NavLink
            to="/admin"
            className="text-lg font-medium text-gray-300 hover:text-brand-primary transition-colors border-b-2 border-transparent"
            style={({ isActive }) => isActive ? activeLinkStyle : {}}
          >
            <div className="flex items-center gap-2">
                <Shield size={20} />
                Admin
            </div>
          </NavLink>
          <div className="relative">
            <ShoppingCart className="w-7 h-7 text-gray-300"/>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-brand-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;