import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent, FooterComponent } from "./components/shared";
import { SudokuComponent } from "./components/sudoku/sudoku.component";
import { LogoComponent } from "./components/shared/logo/logo.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PokerComponent } from "./components/poker/poker.component";
import { BattleshipComponent } from "./components/battleship/battleship.component";
import { SolitaireComponent } from "./components/solitaire/solitaire.component";
import { ChessComponent } from "./components/chess/chess.component";
import { GuessTheCodeComponent } from "./components/guess-the-code/guess-the-code.component";
import { RulesComponent } from "./components/shared/rules/rules.component";
import { MathGameComponent } from "./components/math-game/math-game.component";
import { GtcSettingsComponent } from "./components/guess-the-code/gtc-settings/gtc-settings.component";
import { GtcBoardComponent } from "./components/guess-the-code/gtc-board/gtc-board.component";
import { GtcSelectComponent } from "./components/guess-the-code/gtc-select/gtc-select.component";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        SudokuComponent,
        LogoComponent,
        PokerComponent,
        BattleshipComponent,
        SolitaireComponent,
        ChessComponent,
        GuessTheCodeComponent,
        RulesComponent,
        MathGameComponent,
        GtcSettingsComponent,
        GtcBoardComponent,
        GtcSelectComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatInputModule,
        FormsModule,
        MatSelectModule,
        MatCheckboxModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
