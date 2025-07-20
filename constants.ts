import { Product, Order, CartItem, OrderType } from './types';

export const PRODUCTS: Product[] = [
  { id: 1, name: 'Daikon Radish', japaneseName: '大根', symbol: 'Radish', imageUrl: 'https://images.unsplash.com/photo-1597843702375-33755716c02a?q=80&w=800&h=600&auto=format&fit=crop', price: 3.50, unit: 'piece', stock: 50 },
  { id: 2, name: 'Kabocha Squash', japaneseName: 'カボチャ', symbol: 'Squash', imageUrl: 'https://images.unsplash.com/photo-1627993093257-25916c28f828?q=80&w=800&h=600&auto=format&fit=crop', price: 2.20, unit: 'kg', stock: 30 },
  { id: 3, name: 'Shiso Leaves', japaneseName: '大葉', symbol: 'Leafy green', imageUrl: 'https://images.unsplash.com/photo-1565578799343-a6f2a0333527?q=80&w=800&h=600&auto=format&fit=crop', price: 2.00, unit: 'piece', stock: 100 },
  { id: 4, name: 'Edamame', japaneseName: '枝豆', symbol: 'Soybean', imageUrl: 'https://images.unsplash.com/photo-1590423188789-f5383318b76c?q=80&w=800&h=600&auto=format&fit=crop', price: 4.00, unit: 'kg', stock: 45 },
  { id: 5, name: 'Gobo Root', japaneseName: '牛蒡', symbol: 'Burdock', imageUrl: 'https://images.unsplash.com/photo-1627602694895-7248c8357dd7?q=80&w=800&h=600&auto=format&fit=crop', price: 5.50, unit: 'kg', stock: 25 },
  { id: 6, name: 'Satoimo', japaneseName: '里芋', symbol: 'Taro', imageUrl: 'https://images.unsplash.com/photo-1519995451913-58a48b5323a2?q=80&w=800&h=600&auto=format&fit=crop', price: 6.00, unit: 'kg', stock: 60 },
  { id: 7, name: 'Renkon', japaneseName: '蓮根', symbol: 'Lotus', imageUrl: 'https://images.unsplash.com/photo-1558831649-1d48d1c93a7d?q=80&w=800&h=600&auto=format&fit=crop', price: 7.50, unit: 'kg', stock: 20 },
  { id: 8, name: 'Napa Cabbage', japaneseName: '白菜', symbol: 'Cabbage', imageUrl: 'https://images.unsplash.com/photo-1605658826629-c5614b358a36?q=80&w=800&h=600&auto=format&fit=crop', price: 2.80, unit: 'piece', stock: 40 },
  { id: 9, name: 'Mizuna', japaneseName: '水菜', symbol: 'Salad', imageUrl: 'https://images.unsplash.com/photo-1631298459430-898083a21696?q=80&w=800&h=600&auto=format&fit=crop', price: 3.00, unit: 'piece', stock: 70 },
  { id: 10, name: 'Komatsuna', japaneseName: '小松菜', symbol: 'Leafy green', imageUrl: 'https://images.unsplash.com/photo-1570591223502-c18d3f82a5a2?q=80&w=800&h=600&auto=format&fit=crop', price: 3.20, unit: 'piece', stock: 65 },
  { id: 11, name: 'Shishito Peppers', japaneseName: 'しし唐', symbol: 'Hot pepper', imageUrl: 'https://images.unsplash.com/photo-1598256223595-520e5c9b940e?q=80&w=800&h=600&auto=format&fit=crop', price: 8.00, unit: 'kg', stock: 35 },
  { id: 12, name: 'Okra', japaneseName: 'オクラ', symbol: 'Okra', imageUrl: 'https://images.unsplash.com/photo-1624451001941-8b0151194178?q=80&w=800&h=600&auto=format&fit=crop', price: 7.00, unit: 'kg', stock: 55 },
  { id: 13, name: 'Japanese Eggplant', japaneseName: 'なす', symbol: 'Eggplant', imageUrl: 'https://images.unsplash.com/photo-1615485499978-12621113426e?q=80&w=800&h=600&auto=format&fit=crop', price: 4.50, unit: 'kg', stock: 48 },
  { id: 14, name: 'Japanese Cucumber', japaneseName: 'きゅうり', symbol: 'Cucumber', imageUrl: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=800&h=600&auto=format&fit=crop', price: 1.50, unit: 'piece', stock: 120 },
  { id: 15, name: 'Negi', japaneseName: 'ネギ', symbol: 'Onion', imageUrl: 'https://images.unsplash.com/photo-1622383403348-9b4f74241103?q=80&w=800&h=600&auto=format&fit=crop', price: 2.50, unit: 'piece', stock: 90 },
  { id: 16, name: 'Shiitake', japaneseName: '椎茸', symbol: 'Mushroom', imageUrl: 'https://images.unsplash.com/photo-1576432422393-2895a97560a0?q=80&w=800&h=600&auto=format&fit=crop', price: 12.00, unit: 'kg', stock: 33 },
  { id: 17, name: 'Enoki', japaneseName: 'えのき', symbol: 'Mushroom', imageUrl: 'https://images.unsplash.com/photo-1614136913988-7238aed95a32?q=80&w=800&h=600&auto=format&fit=crop', price: 2.75, unit: 'piece', stock: 80 },
  { id: 18, name: 'Shimeji', japaneseName: 'しめじ', symbol: 'Mushroom', imageUrl: 'https://images.unsplash.com/photo-1606992143494-287a937a0279?q=80&w=800&h=600&auto=format&fit=crop', price: 3.00, unit: 'piece', stock: 75 },
  { id: 19, name: 'Myoga', japaneseName: 'ミョウガ', symbol: 'Ginger', imageUrl: 'https://images.unsplash.com/photo-1627855442502-3315263a3587?q=80&w=800&h=600&auto=format&fit=crop', price: 4.50, unit: 'piece', stock: 40 },
  { id: 20, name: 'Nagaimo', japaneseName: '長芋', symbol: 'Yam', imageUrl: 'https://images.unsplash.com/photo-1599110352321-c7fb1179a6a8?q=80&w=800&h=600&auto=format&fit=crop', price: 9.00, unit: 'kg', stock: 15 },
];

const mockCartItems1: CartItem[] = [
  { productId: 1, name: 'Daikon Radish', symbol: 'Radish', imageUrl: 'https://images.unsplash.com/photo-1597843702375-33755716c02a?q=80&w=800&h=600&auto=format&fit=crop', price: 3.50, unit: 'piece', quantity: 2, orderType: OrderType.PIECE, totalPrice: 7.00 },
  { productId: 13, name: 'Japanese Eggplant', symbol: 'Eggplant', imageUrl: 'https://images.unsplash.com/photo-1615485499978-12621113426e?q=80&w=800&h=600&auto=format&fit=crop', price: 4.50, unit: 'kg', quantity: 1.5, orderType: OrderType.WEIGHT, totalPrice: 6.75 },
];

const mockCartItems2: CartItem[] = [
  { productId: 16, name: 'Shiitake', symbol: 'Mushroom', imageUrl: 'https://images.unsplash.com/photo-1576432422393-2895a97560a0?q=80&w=800&h=600&auto=format&fit=crop', price: 12.00, unit: 'kg', quantity: 0.5, orderType: OrderType.WEIGHT, totalPrice: 6.00 },
  { productId: 15, name: 'Negi', symbol: 'Onion', imageUrl: 'https://images.unsplash.com/photo-1622383403348-9b4f74241103?q=80&w=800&h=600&auto=format&fit=crop', price: 2.50, unit: 'piece', quantity: 5, orderType: OrderType.PIECE, totalPrice: 12.50 },
  { productId: 3, name: 'Shiso Leaves', symbol: 'Leafy green', imageUrl: 'https://images.unsplash.com/photo-1565578799343-a6f2a0333527?q=80&w=800&h=600&auto=format&fit=crop', price: 2.00, unit: 'piece', quantity: 1, orderType: OrderType.PIECE, totalPrice: 2.00 },
];

const mockCartItems3: CartItem[] = [
  { productId: 8, name: 'Napa Cabbage', symbol: 'Cabbage', imageUrl: 'https://images.unsplash.com/photo-1605658826629-c5614b358a36?q=80&w=800&h=600&auto=format&fit=crop', price: 2.80, unit: 'piece', quantity: 1, orderType: OrderType.PIECE, totalPrice: 2.80 },
];

const mockCartItems4: CartItem[] = [
  { productId: 4, name: 'Edamame', symbol: 'Soybean', imageUrl: 'https://images.unsplash.com/photo-1590423188789-f5383318b76c?q=80&w=800&h=600&auto=format&fit=crop', price: 4.00, unit: 'kg', quantity: 2, orderType: OrderType.WEIGHT, totalPrice: 8.00 },
  { productId: 14, name: 'Japanese Cucumber', symbol: 'Cucumber', imageUrl: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?q=80&w=800&h=600&auto=format&fit=crop', price: 1.50, unit: 'piece', quantity: 10, orderType: OrderType.PIECE, totalPrice: 15.00 },
];

const mockCartItems5: CartItem[] = [
    { productId: 2, name: 'Kabocha Squash', symbol: 'Squash', imageUrl: 'https://images.unsplash.com/photo-1627993093257-25916c28f828?q=80&w=800&h=600&auto=format&fit=crop', price: 2.20, unit: 'kg', quantity: 1, orderType: OrderType.WEIGHT, totalPrice: 2.20 },
    { productId: 11, name: 'Shishito Peppers', symbol: 'Hot pepper', imageUrl: 'https://images.unsplash.com/photo-1598256223595-520e5c9b940e?q=80&w=800&h=600&auto=format&fit=crop', price: 8.00, unit: 'kg', quantity: 0.25, orderType: OrderType.WEIGHT, totalPrice: 2.00 },
    { productId: 17, name: 'Enoki', symbol: 'Mushroom', imageUrl: 'https://images.unsplash.com/photo-1614136913988-7238aed95a32?q=80&w=800&h=600&auto=format&fit=crop', price: 2.75, unit: 'piece', quantity: 2, orderType: OrderType.PIECE, totalPrice: 5.50 },
];


export const MOCK_ORDERS: Order[] = [
  { id: 'ORD-001', clientCode: 'C-101', items: mockCartItems1, total: 13.75, note: 'Please select fresh ones.', date: '2024-05-20', status: 'Completed' },
  { id: 'ORD-002', clientCode: 'C-205', items: mockCartItems2, total: 20.50, note: '', date: '2024-05-21', status: 'Completed' },
  { id: 'ORD-003', clientCode: 'C-123', items: mockCartItems3, total: 2.80, note: 'Urgent delivery.', date: '2024-05-22', status: 'Pending' },
  { id: 'ORD-004', clientCode: 'C-300', items: mockCartItems4, total: 23.00, note: 'For restaurant use.', date: '2024-05-22', status: 'Pending' },
  { id: 'ORD-005', clientCode: 'C-042', items: mockCartItems5, total: 9.70, note: 'Thank you!', date: '2024-05-23', status: 'Pending' },
];