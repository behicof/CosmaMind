
import React, { useState } from 'react';
import type { OracleResponse } from '../types';
import Card from './Card';

interface OracleConsultationProps {
    onConsult: (question: string) => void;
    result: OracleResponse | null;
}

const OracleConsultation: React.FC<OracleConsultationProps> = ({ onConsult, result }) => {
    const [question, setQuestion] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (question.trim()) {
            onConsult(question);
            setQuestion('');
        }
    };

    return (
        <div className="space-y-6">
            <form onSubmit={handleSubmit} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 shadow-lg">
                <h2 className="text-2xl font-semibold text-indigo-300 mb-4">🔮 Consult the Divine Oracle</h2>
                <textarea
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    placeholder="Ask a question to the deep consciousness..."
                    className="w-full h-32 p-3 bg-gray-900/70 border border-gray-600 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all text-gray-200 placeholder-gray-500"
                />
                <button type="submit" className="mt-4 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-lg shadow-md transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!question.trim()}>
                    Seek Wisdom
                </button>
            </form>

            {result && (
                <div className="animate-fade-in">
                    <Card title="A Message from the Oracle" icon="👁️">
                        <p><strong>Oracle Message:</strong> {result.oracle_message}</p>
                        <p><strong>Practical Guidance:</strong> {result.practical_guidance}</p>
                        <p><strong>Meditation Focus:</strong> {result.meditation_focus}</p>
                        <p className="border-t border-gray-700 pt-4 text-sm text-gray-400">
                           <i>Consider this next: "{result.next_question_suggestion}"</i>
                        </p>
                    </Card>
                </div>
            )}
        </div>
    );
};

export default OracleConsultation;
