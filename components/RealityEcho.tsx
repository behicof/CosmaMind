
import React, { useState } from 'react';
import type { RealityEchoResponse } from '../types';
import Card from './Card';

interface RealityEchoProps {
    onGenerate: (intentId: string) => void;
    result: RealityEchoResponse | null;
}

const RealityEcho: React.FC<RealityEchoProps> = ({ onGenerate, result }) => {
    const [intentId, setIntentId] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (intentId.trim()) {
            onGenerate(intentId);
        }
    };

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">✨ Generate Reality Echo</h2>
                <input
                    type="text"
                    value={intentId}
                    onChange={(e) => setIntentId(e.target.value)}
                    placeholder="Enter your Cosmic Intent ID..."
                    className="w-full p-3 bg-gray-900/70 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-200 placeholder-gray-500"
                />
                <button type="submit" className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!intentId.trim()}>
                    Receive Echo
                </button>
            </form>

            {result && (
                <div className="animate-fade-in">
                    <Card title="Echo from the Quantum Field" icon="🌌">
                        <p><strong>Oracle Message:</strong> {result.oracle_message}</p>
                        <div className="border-t border-gray-700 pt-4">
                            <h4 className="font-semibold text-indigo-400">Action Steps:</h4>
                            <ul className="list-disc list-inside mt-2 space-y-1">
                                {result.action_steps.slice(0, 3).map((step, i) => <li key={i}>{step}</li>)}
                            </ul>
                        </div>
                        <p><strong>Frequency Medicine:</strong> {result.frequency_medicine}</p>
                        <p><strong>Next Phase:</strong> {result.next_phase}</p>
                        <p><strong>Divine Guidance:</strong> {result.divine_guidance}</p>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default RealityEcho;
