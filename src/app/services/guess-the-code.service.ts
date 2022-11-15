import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class GuessTheCodeService {
    colors = [
        "red",
        "blue",
        "purple",
        "green",
        "orange",
        "yellow",
        "magenta",
        "cyan",
        "pink",
        "silver",
        "brown",
        "lavender",
    ];
    code: string[] = [];
    board: { guess: string[]; black: number; white: number }[] = [];
    settings = {
        difficulty: "easy",
        colorCount: 6,
        codeLength: 4,
        disableEmpty: false,
    };
    score = {
        user: 0,
        ai: 0,
    };
    message = "";
    selection: string[] = ["", "", "", ""];

    startGame = () => {
        this.generateCode();
    };

    generateCode = () => {
        const output: string[] = [];
        for (let i = 0; i < this.settings.codeLength; i++) {
            output.push(this.colors[Math.floor(Math.random() * this.settings.colorCount)]);
        }
        this.code = output;
    };

    makeGuess = () => {
        const x = this.guessCode(this.selection);
        this.board.push(JSON.parse(JSON.stringify(x)));
        if (x.black === this.settings.codeLength) {
            this.message = `You cracked the code in ${this.board.length} tries!`;

            setTimeout(() => {
                this.message = "";
            }, 5000);
        }
    };

    updateSettings = (rules: { color: number; code: number; empty: boolean }) => {
        this.settings.codeLength = rules.code;
        this.settings.colorCount = rules.color;
        this.settings.disableEmpty = rules.empty;
        this.selection = Array(this.settings.codeLength).join(".").split(".");
        if (this.settings.disableEmpty) this.selection = this.selection.map(() => this.colors[0]);
        this.board = [];
        this.startGame();
    };

    guessCode = (guess: string[]) => {
        let black = 0;
        let white = 0;
        const guessMap = new Map();
        const codeMap = new Map();

        for (let i = 0; i < guess.length; i++) {
            if (guess[i] === this.code[i]) {
                black++;
            } else {
                const codeColor = codeMap.get(this.code[i]);
                codeMap.set(this.code[i], codeColor === undefined ? 1 : codeColor + 1);
                if (guess[i]) {
                    const guessColor = guessMap.get(guess[i]);
                    guessMap.set(guess[i], guessColor === undefined ? 1 : guessColor + 1);
                }
            }
        }

        guessMap.forEach((val, key) => {
            white += Math.min(val, codeMap.get(key) || 0);
        });

        return { guess, black, white };
    };

    constructor() {}
}
