import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { BattleshipComponent } from "./components/battleship/battleship.component";
import { ChessComponent } from "./components/chess/chess.component";
import { GuessTheCodeComponent } from "./components/guess-the-code/guess-the-code.component";
import { HomeComponent } from "./components/home/home.component";
import { MathGameComponent } from "./components/math-game/math-game.component";
import { PokerComponent } from "./components/poker/poker.component";
import { ReversiComponent } from "./components/reversi/reversi.component";
import { SolitaireComponent } from "./components/solitaire/solitaire.component";
import { SudokuComponent } from "./components/sudoku/sudoku.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "battleship",
        component: BattleshipComponent,
    },
    {
        path: "chess",
        component: ChessComponent,
    },
    {
        path: "guess-the-code",
        component: GuessTheCodeComponent,
    },
    {
        path: "math-game",
        component: MathGameComponent,
    },
    {
        path: "poker",
        component: PokerComponent,
    },
    {
        path: "reversi",
        component: ReversiComponent,
    },
    {
        path: "solitaire",
        component: SolitaireComponent,
    },
    {
        path: "sudoku",
        component: SudokuComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            initialNavigation: "enabledBlocking",
        }),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
