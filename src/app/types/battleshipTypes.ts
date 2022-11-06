export interface BattleshipGrid {
    numbers: string[];
    letters: string[];
    ally: {
        boats: BoatArray;
        count: Record<any, any>;
    };
    enemy: {
        boats: BoatArray;
        count: Record<any, any>;
    };
}
export type BoatArray = [number, string, boolean][][];
export type BattleshipVariant =
    | "Normal"
    | "Speed"
    | "Dynamic"
    | "Abstract"
    | "Tetris"
    | "Precision"
    | "Mines"
    | "Ocean";
export type BattleshipDifficulty = "Easy" | "Medium" | "Hard";
export interface BattleshipSettings {
    variant: BattleshipVariant;
    difficulty: BattleshipDifficulty;
    gridSize: number;
}
