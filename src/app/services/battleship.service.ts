import { Injectable } from "@angular/core";
import { BattleshipGrid, BattleshipSettings } from "../types/battleshipTypes";
import { BattleshipHelpersService } from "./battleship-helpers.service";

@Injectable({
    providedIn: "root",
})
export class BattleshipService {
    // 1-5 represents a boat ID. 0 represents nothing. -1 represents mine. -2 represents sunk
    // string = class, number = see above, boolean = whether or not it's selected
    message = "";
    guessCount = 1;
    phase = 1;
    grid: BattleshipGrid = {
        letters: [],
        numbers: [],
        ally: {
            boats: [],
            count: new Map(),
        },
        enemy: {
            boats: [],
            count: new Map(),
        },
    };
    focusedSquare = [0, 0];
    settings: BattleshipSettings = {
        variant: "Normal",
        difficulty: "Easy",
        gridSize: 10,
    };
    currentBoat: { id: number; coords: number[][] } = {
        id: 0,
        coords: [],
    };

    handleLeftClick = (i: number, j: number) => {
        if (this.phase === 4) {
            this.focusedSquare = [i, j];
        }
    };
    handleRightClick = (event: Event, i: number, j: number) => {
        event.preventDefault();
        if (this.phase === 4) {
            this.grid.enemy.boats[i][j][2] = !this.grid.enemy.boats[i][j][2];
        }
    };
    generateGridDetails = () => {
        const size = this.settings.gridSize;
        for (let i = 1; i <= size; i++) {
            this.grid.numbers.push(i.toString());
            this.grid.letters.push(String.fromCharCode(i + 64));
            this.grid.ally.boats.push([]);
            this.grid.enemy.boats.push([]);
            for (let j = 1; j <= size; j++) {
                this.grid.ally.boats[i - 1].push([0, "", false]);
                this.grid.enemy.boats[i - 1].push([0, "", false]);
            }
        }
    };
    initializeGrid = () => {
        this.generateGridDetails();
        this.phase = 2;
        this.addBoatOrMine();
        document.addEventListener("keydown", this.phaseTwoHotkeys[this.settings.variant]);
    };
    autoGenerate = (player: "ally" | "enemy") => {
        const grid = this.helpers.autoGenerate[this.settings.variant](this.settings.gridSize);
        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[i].length; j++) {
                const val = grid[i][j];
                this.grid[player].boats[i][j][0] = val;
                if (player === "ally") {
                    if (val > 0) {
                        this.grid.ally.boats[i][j][1] = "boat";
                    } else if (val === -1) {
                        this.grid.ally.boats[i][j][1] = "mine";
                    }
                }
                if (val > 0) {
                }
            }
        }
    };
    initPhaseFour = () => {
        this.phase = 4;
        document.addEventListener("keydown", this.phaseFourHotkeys);
    };

    submitGuess = () => {
        console.log("submitGuess");
    };

    phaseFourHotkeys = (event: KeyboardEvent) => {
        let newClass: string | null = null;
        switch (event.code) {
            case "KeyT":
                newClass = "";
                break;
            case "KeyR":
                newClass = "hit";
                break;
            case "KeyE":
                newClass = "miss";
                break;
            case "KeyW":
                newClass = "sunk";
                break;
            case "KeyQ":
                newClass = "mark";
                break;
            case "KeyX":
                for (let i = 0; i < this.grid.enemy.boats.length; i++) {
                    for (let j = 0; j < this.grid.enemy.boats.length; j++) {
                        this.grid.enemy.boats[i][j][2] = false;
                    }
                }
                break;
            case "Space":
            case "Enter":
                event.preventDefault();
                this.submitGuess();
                break;
            default:
                break;
        }
        if (newClass !== null) {
            const [x, y] = this.focusedSquare;
            this.grid.enemy.boats[x][y][1] = newClass;
        }
    };

    addBoatOrMine = () => {};

    phaseTwoHotkeys = {
        Normal: () => {},
        Speed: () => {},
        Dynamic: () => {},
        Abstract: () => {},
        Tetris: () => {},
        Precision: () => {},
        Mines: () => {},
        Ocean: () => {},
    };

    constructor(private helpers: BattleshipHelpersService) {}
}
