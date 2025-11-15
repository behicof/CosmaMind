
import React from 'react';

interface CardProps {
    title: string;
    icon: string;
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, children, className }) => {
    return (
        <div className={`bg-gray-800/60 border border-gray-700 rounded-xl shadow-2xl shadow-indigo-900/20 p-6 backdrop-blur-md ${className}`}>
            <h3 className="text-xl font-semibold text-indigo-300 mb-4 flex items-center">
                <span className="text-2xl mr-3">{icon}</span>
                {title}
            </h3>
            <div className="space-y-4 text-gray-300">
                {children}
            </div>
        </div>
    );
};

export default Card;
