import { Injectable } from "@angular/core";
import { BattleshipVariant, BoatArray } from "../types/battleshipTypes";

@Injectable({
    providedIn: "root",
})
export class BattleshipHelpersService {
    generateRegularGrid = (size: number, boats: { length: number; id: number }[]) => {
        let boatIndex = 0;
        const grid: number[][] = [];
        const row = Array(size).fill(0);
        for (let i = 0; i < size; i++) {
            grid.push([...row]);
        }

        while (boatIndex < boats.length) {
            const [a, b] = [
                Math.floor(size * Math.random()),
                Math.floor((size - boats[boatIndex].length + 1) * Math.random()),
            ];
            const coordinates: number[][] = [];
            const vert = Math.random() > 0.5;
            let [x, y] = vert ? [b, a] : [a, b];
            let isValid = true;
            for (let i = 0; i < boats[boatIndex].length; i++) {
                coordinates.push([x, y]);
                if (grid[x][y]) {
                    isValid = false;
                    break;
                }
                vert ? x++ : y++;
            }

            if (isValid) {
                for (let i = 0; i < coordinates.length; i++) {
                    const [x, y] = coordinates[i];
                    grid[x][y] = boats[boatIndex].id;
                }
                boatIndex++;
            }
        }
        return grid;
    };
    autoGenerate = {
        Normal: (size: number) => {
            const boats = [
                { id: 1, length: 5 },
                { id: 2, length: 4 },
                { id: 3, length: 3 },
                { id: 4, length: 3 },
                { id: 5, length: 2 },
            ];
            return this.generateRegularGrid(size, boats);
        },
        Speed: (size: number) => {
            return [];
        },
        Dynamic: (size: number) => {
            return [];
        },
        Abstract: (size: number) => {
            return [];
        },
        Tetris: (size: number) => {
            return [];
        },
        Precision: (size: number) => {
            return [];
        },
        Mines: (size: number) => {
            return [];
        },
        Ocean: (size: number) => {
            return [];
        },
    };
    constructor() {}
}
