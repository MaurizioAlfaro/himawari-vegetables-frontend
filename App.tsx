import React, { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Product, CartItem, Order, OrderType } from './types';
import { PRODUCTS, MOCK_ORDERS } from './constants';
import Header from './components/Header';
import Store from './components/Store';
import AdminDashboard from './components/AdminDashboard';
import HomePage from './components/HomePage';
import AdminLayout from './components/AdminLayout';
import AdminStock from './components/AdminStock';


function App() {
  const [products, setProducts] = useState<Product[]>(PRODUCTS);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>(MOCK_ORDERS);

  const addToCart = useCallback((item: CartItem) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.productId === item.productId && i.orderType === item.orderType);
      if (existingItem) {
        return prevItems.map(i =>
          i.productId === item.productId && i.orderType === item.orderType
            ? { ...i, quantity: i.quantity + item.quantity, totalPrice: i.totalPrice + item.totalPrice }
            : i
        );
      }
      return [...prevItems, item];
    });
  }, []);

  const updateCartItemQuantity = useCallback((productId: number, newQuantity: number) => {
    setCartItems(prevItems => {
      return prevItems.map(item => {
        if (item.productId === productId) {
          const updatedItem = { ...item, quantity: newQuantity };
          if (item.orderType === OrderType.PIECE) {
             updatedItem.totalPrice = item.price * newQuantity;
          } else if (item.orderType === OrderType.WEIGHT) {
             updatedItem.totalPrice = item.price * newQuantity;
          }
          return updatedItem;
        }
        return item;
      }).filter(item => item.quantity > 0);
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prevItems => prevItems.filter(i => i.productId !== productId));
  }, []);

  const placeOrder = useCallback((clientCode: string, note: string) => {
    const total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    const newOrder: Order = {
      id: `ORD-${String(Date.now()).slice(-4)}`,
      clientCode,
      items: cartItems,
      total,
      note,
      date: new Date().toISOString().split('T')[0],
      status: 'Pending',
    };
    setOrders(prevOrders => [newOrder, ...prevOrders]);

    // Update stock
    setProducts(prevProducts => {
        const newProducts = [...prevProducts];
        cartItems.forEach(cartItem => {
            const productIndex = newProducts.findIndex(p => p.id === cartItem.productId);
            if(productIndex !== -1) {
                if(cartItem.unit === 'piece') {
                    newProducts[productIndex].stock -= cartItem.quantity;
                } else if (cartItem.unit === 'kg') {
                    newProducts[productIndex].stock -= cartItem.quantity;
                }
            }
        });
        return newProducts;
    });

    setCartItems([]);
  }, [cartItems]);
  
  const updateProductStock = useCallback((productId: number, newStock: number) => {
    setProducts(prevProducts =>
      prevProducts.map(p =>
        p.id === productId ? { ...p, stock: Math.max(0, newStock) } : p
      )
    );
  }, []);

  const cartTotalItems = cartItems.reduce((sum, item) => sum + (item.orderType === OrderType.PIECE ? item.quantity : 1) , 0);

  return (
    <HashRouter>
      <div className="min-h-screen flex flex-col bg-gray-50">
        <Header cartItemCount={cartTotalItems} />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/store"
              element={
                <Store
                  products={products}
                  cartItems={cartItems}
                  addToCart={addToCart}
                  updateCartItemQuantity={updateCartItemQuantity}
                  removeFromCart={removeFromCart}
                  placeOrder={placeOrder}
                />
              }
            />
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard orders={orders} />} />
              <Route path="stock" element={<AdminStock products={products} onUpdateStock={updateProductStock} />} />
            </Route>
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
}

export default App;