
import React, { useState } from 'react';
import type { CosmicIntent } from '../types';
import Card from './Card';
import IconButton from './IconButton';

interface PlantIntentProps {
    onPlant: (text: string) => void;
    result: CosmicIntent | null;
}

const PlantIntent: React.FC<PlantIntentProps> = ({ onPlant, result }) => {
    const [text, setText] = useState('');
    const [copied, setCopied] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (text.trim()) {
            onPlant(text);
        }
    };

    const handleCopy = () => {
        if (result?.intent_id) {
            navigator.clipboard.writeText(result.intent_id);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">🌱 Plant Your Cosmic Intent</h2>
                <textarea
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Describe the reality you wish to manifest..."
                    className="w-full h-32 p-3 bg-gray-900/70 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-200 placeholder-gray-500"
                />
                <button type="submit" className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!text.trim()}>
                    Plant Seed in the Cosmos
                </button>
            </form>

            {result && (
                <div className="animate-fade-in">
                    <Card title="Intent Manifested in the Ether" icon="✨">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="font-mono text-sm bg-gray-900/50 p-2 rounded inline-block">ID: {result.intent_id}</p>
                                <p className="mt-2 text-xs text-gray-400">Save this ID for Reality Echo.</p>
                            </div>
                             <IconButton onClick={handleCopy}>
                                {copied ? 'Copied!' : 
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                                }
                            </IconButton>
                        </div>
                        <p className="mt-4 border-t border-gray-700 pt-4"><strong>Oracle Message:</strong> {result.reality_codex.divine_guidance.oracle_message}</p>
                        <p><strong>First Action Step:</strong> {result.reality_codex.divine_guidance.action_steps[0]}</p>
                        <p><strong>Soul Frequency:</strong> {result.soul_frequency.toFixed(1)} Hz</p>
                        <p><strong>Active Archetype:</strong> {result.reality_codex.soul_blueprint.active_archetype}</p>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default PlantIntent;
