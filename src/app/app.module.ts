import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent, FooterComponent } from "./components/shared";
import { SudokuComponent } from "./components/sudoku/sudoku.component";
import { ArithmeticGameComponent } from "./components/arithmetic-game/arithmetic-game.component";
import { LogoComponent } from "./components/shared/logo/logo.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PokerComponent } from "./components/poker/poker.component";
import { BattleshipComponent } from "./components/battleship/battleship.component";
import { SolitaireComponent } from "./components/solitaire/solitaire.component";
import { ChessComponent } from "./components/chess/chess.component";
import { GuessTheCodeComponent } from "./components/guess-the-code/guess-the-code.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        SudokuComponent,
        ArithmeticGameComponent,
        LogoComponent,
        PokerComponent,
        BattleshipComponent,
        SolitaireComponent,
        ChessComponent,
        GuessTheCodeComponent,
    ],
    imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
