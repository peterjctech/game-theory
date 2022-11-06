import { Component, OnInit } from "@angular/core";
import { BattleshipService } from "services";

@Component({
    selector: "app-battleship",
    templateUrl: "./battleship.component.html",
    styleUrls: ["./battleship.component.scss"],
})
export class BattleshipComponent implements OnInit {
    getAllySpaceClass = (i: number, j: number) => {
        return "";
    };
    getEnemySquareClass = (i: number, j: number) => {
        let output = "grid__space";
        if (this.service.grid.enemy.boats[i][j][2]) {
            output += " selected";
        }
        if (this.service.focusedSquare[0] === i && this.service.focusedSquare[1] === j) {
            output += " focused";
        }
        return output;
    };
    constructor(public service: BattleshipService) {}

    ngOnInit(): void {}
}
