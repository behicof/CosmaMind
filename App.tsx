
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import TabNavigation from './components/TabNavigation';
import PlantIntent from './components/PlantIntent';
import RealityEcho from './components/RealityEcho';
import OracleConsultation from './components/OracleConsultation';
import { plantCosmicIntent, generateRealityEcho, consultDivineOracle } from './services/geminiService';
import type { CosmicIntent, RealityEchoResponse, OracleResponse, Tab } from './types';
import Loader from './components/Loader';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState<Tab>('plant_intent');
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [intents, setIntents] = useState<Map<string, CosmicIntent>>(new Map());
    const [lastIntentResult, setLastIntentResult] = useState<CosmicIntent | null>(null);
    const [lastEchoResult, setLastEchoResult] = useState<RealityEchoResponse | null>(null);
    const [lastOracleResult, setLastOracleResult] = useState<OracleResponse | null>(null);

    const handleTabChange = (tab: Tab) => {
        setActiveTab(tab);
        setError(null);
    };

    const handlePlantIntent = useCallback(async (text: string) => {
        setIsLoading(true);
        setError(null);
        setLastIntentResult(null);
        try {
            const result = await plantCosmicIntent(text);
            setIntents(prev => new Map(prev).set(result.intent_id, result));
            setLastIntentResult(result);
        } catch (e) {
            console.error(e);
            setError('Failed to plant cosmic intent. The cosmic energies may be unstable. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const handleGenerateEcho = useCallback(async (intentId: string) => {
        setIsLoading(true);
        setError(null);
        setLastEchoResult(null);
        const intent = intents.get(intentId);
        if (!intent) {
            setError('Intent ID not found. Please plant an intent first or check the ID.');
            setIsLoading(false);
            return;
        }
        try {
            const result = await generateRealityEcho(intent);
            setLastEchoResult(result);
        } catch (e) {
            console.error(e);
            setError('Failed to generate reality echo. The oracle mirror seems clouded. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, [intents]);

    const handleConsultOracle = useCallback(async (question: string) => {
        setIsLoading(true);
        setError(null);
        setLastOracleResult(null);
        try {
            const result = await consultDivineOracle(question, 432.0); // Assume a base frequency
            setLastOracleResult(result);
        } catch (e) {
            console.error(e);
            setError('Failed to consult the oracle. The connection to the divine is unclear. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const renderContent = () => {
        switch (activeTab) {
            case 'plant_intent':
                return <PlantIntent onPlant={handlePlantIntent} result={lastIntentResult} />;
            case 'reality_echo':
                return <RealityEcho onGenerate={handleGenerateEcho} result={lastEchoResult} />;
            case 'oracle':
                return <OracleConsultation onConsult={handleConsultOracle} result={lastOracleResult} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 via-black text-gray-200 p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
                <Header />
                <TabNavigation activeTab={activeTab} onTabChange={handleTabChange} />
                <main className="mt-6">
                    {isLoading && <Loader />}
                    {error && <div className="bg-red-900/50 border border-red-700 text-red-300 p-4 rounded-lg mb-6 text-center">{error}</div>}
                    {!isLoading && renderContent()}
                </main>
            </div>
        </div>
    );
};

export default App;
