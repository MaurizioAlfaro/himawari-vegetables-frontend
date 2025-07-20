import React from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import { Package, BarChart2 } from 'lucide-react';

const AdminLayout = () => {
    const location = useLocation();
    
    const tabs = [
        { name: 'Customer Orders', href: '/admin', icon: Package, end: true },
        { name: 'Stock Management', href: '/admin/stock', icon: BarChart2, end: false }
    ];

    const getLinkClasses = (path, isEnd) => {
        const isActive = isEnd ? location.pathname === path : location.pathname.startsWith(path);
        return `flex items-center gap-3 px-4 py-2 font-medium text-sm rounded-lg transition-colors ${
            isActive
                ? 'bg-brand-primary text-white shadow'
                : 'text-brand-text-light hover:bg-gray-200 hover:text-brand-text-main'
        }`;
    };
    
    const getPageTitle = () => {
        const currentTab = tabs.find(tab => location.pathname === tab.href);
        if (currentTab) return currentTab.name;
        if (location.pathname.startsWith('/admin/stock')) return 'Stock Management';
        return 'Customer Orders';
    };


    return (
        <div>
            <div className="md:flex md:items-center md:justify-between mb-8 pb-4 border-b border-gray-200">
                <h1 className="text-3xl font-bold text-brand-text-main">{getPageTitle()}</h1>
                <nav className="mt-4 md:mt-0 flex items-center space-x-2 bg-gray-100 p-1.5 rounded-xl">
                    {tabs.map(tab => (
                        <NavLink key={tab.name} to={tab.href} className={() => getLinkClasses(tab.href, tab.end)} end={tab.end}>
                            <tab.icon className="w-5 h-5" />
                            <span>{tab.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default AdminLayout;