
import React from 'react';

const Loader: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center p-8 my-6 bg-gray-800/50 rounded-lg backdrop-blur-sm border border-gray-700">
            <div className="relative w-16 h-16">
                <div className="absolute border-2 border-indigo-400 rounded-full w-full h-full animate-spin" style={{ animationDuration: '1.5s' }}></div>
                <div className="absolute border-2 border-pink-400 rounded-full w-10 h-10 top-3 left-3 animate-ping"></div>
                <div className="absolute text-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">🜂</div>
            </div>
            <p className="mt-4 text-indigo-300 font-semibold tracking-wider animate-pulse">Synchronizing with Cosmos...</p>
        </div>
    );
};

export default Loader;
