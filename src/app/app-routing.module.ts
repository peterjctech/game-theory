import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ArithmeticGameComponent } from "./components/arithmetic-game/arithmetic-game.component";
import { HomeComponent } from "./components/home/home.component";
import { SudokuComponent } from "./components/sudoku/sudoku.component";
import { BattleshipComponent } from "./components/battleship/battleship.component";
import { ChessComponent } from "./components/chess/chess.component";
import { PokerComponent } from "./components/poker/poker.component";
import { SolitaireComponent } from "./components/solitaire/solitaire.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
    },
    {
        path: "arithmetic-game",
        component: ArithmeticGameComponent,
    },
    {
        path: "sudoku",
        component: SudokuComponent,
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
        path: "poker",
        component: PokerComponent,
    },
    {
        path: "solitaire",
        component: SolitaireComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
