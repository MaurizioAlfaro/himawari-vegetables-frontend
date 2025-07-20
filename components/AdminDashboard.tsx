import React from 'react';
import { Order, OrderType } from '../types';
import { Package, User, Calendar, Edit2, CheckCircle, Clock } from 'lucide-react';

interface AdminDashboardProps {
  orders: Order[];
}

const OrderCard: React.FC<{ order: Order }> = ({ order }) => {
  const statusColor = order.status === 'Completed' ? 'text-green-500' : 'text-yellow-500';
  const statusBgColor = order.status === 'Completed' ? 'bg-green-100' : 'bg-yellow-100';

  return (
    <div className="bg-brand-surface rounded-xl shadow-lg p-6 transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-brand-primary">{order.id}</h3>
          <div className="flex items-center gap-2 text-brand-text-light mt-1">
            <User size={16} />
            <span>{order.clientCode}</span>
          </div>
          <div className="flex items-center gap-2 text-brand-text-light">
            <Calendar size={16} />
            <span>{order.date}</span>
          </div>
        </div>
        <div className={`flex items-center gap-2 text-sm font-bold px-3 py-1 rounded-full ${statusBgColor} ${statusColor}`}>
          {order.status === 'Completed' ? <CheckCircle size={16} /> : <Clock size={16} />}
          {order.status}
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="font-bold text-brand-text-main mb-2">Items</h4>
        <ul className="space-y-2 text-sm">
          {order.items.map(item => (
            <li key={item.productId} className="flex justify-between items-center bg-gray-50 p-2 rounded">
              <span className="flex items-center gap-3">
                <img src={item.imageUrl} alt={item.name} className="w-10 h-10 object-cover rounded" />
                {item.name}
              </span>
              <span className="text-brand-text-light">
                {item.orderType === OrderType.PRICE ? `$${item.totalPrice.toFixed(2)}` : `${item.quantity.toFixed(item.unit === 'kg' ? 1 : 0)}${item.unit === 'kg' ? 'kg' : 'x'}`}
              </span>
              <span className="font-semibold">${item.totalPrice.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>

      {order.note && (
        <div className="mt-4 pt-4 border-t border-gray-200">
           <h4 className="font-bold text-brand-text-main mb-2 flex items-center gap-2"><Edit2 size={16}/> Note</h4>
           <p className="text-sm text-brand-text-light italic bg-yellow-50 p-3 rounded-lg">"{order.note}"</p>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t-2 border-dashed border-brand-primary-light text-right">
        <span className="text-lg font-bold text-brand-text-main">Total: </span>
        <span className="text-xl font-bold text-brand-primary">${order.total.toFixed(2)}</span>
      </div>
    </div>
  );
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ orders }) => {
  return (
    <div>
      {orders.length === 0 ? (
        <p className="text-center text-brand-text-light py-10">No orders yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {orders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;