
export type Tab = 'plant_intent' | 'reality_echo' | 'oracle';

export enum DivineManifestation {
    SEED_PLANTED = "SEED_PLANTED",
    ENERGY_GATHERING = "ENERGY_GATHERING",
    COSMIC_ALIGNMENT = "COSMIC_ALIGNMENT",
    MANIFESTATION_READY = "MANIFESTATION_READY",
    REALITY_SHIFT = "REALITY_SHIFT",
}

export interface CosmicIntent {
    intent_id: string;
    text: string;
    user: string;
    birth_time: string;
    soul_frequency: number;
    emotion_signature: Record<string, number>;
    cosmic_coordinates: Record<string, any>;
    manifestation_stage: DivineManifestation;
    reality_codex: RealityCodex;
    quantum_entanglement_score: number;
}

export interface RealityCodex {
    codex_id: string;
    soul_blueprint: {
        depth_level: number;
        active_archetype: string;
        primary_frequency: number;
    };
    manifestation_protocol: {
        stage_1_preparation: string[];
        stage_2_activation: string[];
        stage_3_anchoring: string[];
    };
    cosmic_timing: {
        optimal_window: { start_time: string; end_time: string };
        planetary_support: Record<string, string>;
        moon_phase_guidance: Record<string, string>;
    };
    reality_shifts: {
        internal_shifts: string[];
        external_synchronicities: string[];
    };
    divine_guidance: {
        oracle_message: string;
        action_steps: string[];
        surrender_practice: string;
    };
}

export interface RealityEchoResponse {
    echo_id: string;
    oracle_message: string;
    action_steps: string[];
    cosmic_timing: RealityCodex['cosmic_timing'];
    manifestation_indicators: Record<string, any>;
    frequency_medicine: string;
    divine_guidance: string;
    next_phase: string;
}

export interface OracleResponse {
    oracle_id: string;
    question_frequency: number;
    consciousness_level: string;
    wisdom_category: string;
    oracle_message: string;
    practical_guidance: string;
    meditation_focus: string;
    next_question_suggestion: string;
}
