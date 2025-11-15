
import React from 'react';
import type { Tab } from '../types';

interface TabNavigationProps {
    activeTab: Tab;
    onTabChange: (tab: Tab) => void;
}

const tabs: { id: Tab; label: string; icon: string }[] = [
    { id: 'plant_intent', label: 'Plant Intent', icon: '🌱' },
    { id: 'reality_echo', label: 'Reality Echo', icon: '✨' },
    { id: 'oracle', label: 'Consult Oracle', icon: '🔮' },
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange }) => {
    return (
        <nav className="flex justify-center bg-gray-800/50 rounded-lg p-2 backdrop-blur-sm border border-gray-700">
            <div className="flex space-x-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => onTabChange(tab.id)}
                        className={`px-4 py-2 text-sm sm:text-base font-medium rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-400
                            ${activeTab === tab.id
                                ? 'bg-indigo-600 text-white shadow-lg'
                                : 'bg-transparent text-gray-300 hover:bg-gray-700/50'
                            }`}
                    >
                        <span className="mr-2">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>
        </nav>
    );
};

export default TabNavigation;
