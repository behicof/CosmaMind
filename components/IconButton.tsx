
import React from 'react';

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="p-2 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {children}
        </button>
    );
};

export default IconButton;
