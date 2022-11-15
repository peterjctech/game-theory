import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BattleshipComponent } from "./components/battleship/battleship.component";
import { ReversiComponent } from "./components/reversi/reversi.component";
import { SudokuComponent } from "./components/sudoku/sudoku.component";
import { ChessComponent } from "./components/chess/chess.component";
import { GuessTheCodeComponent } from "./components/guess-the-code/guess-the-code.component";
import { MathGameComponent } from "./components/math-game/math-game.component";
import { PokerComponent } from "./components/poker/poker.component";
import { SolitaireComponent } from "./components/solitaire/solitaire.component";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { FooterComponent } from "./components/shared/footer/footer.component";
import { LogoComponent } from "./components/shared/logo/logo.component";
import { GtcBoardComponent } from "./components/guess-the-code/gtc-board/gtc-board.component";
import { GtcSettingsComponent } from "./components/guess-the-code/gtc-settings/gtc-settings.component";
import { GtcSelectComponent } from "./components/guess-the-code/gtc-select/gtc-select.component";
import { BattleshipSettingsComponent } from './components/battleship/battleship-settings/battleship-settings.component';

@NgModule({
    declarations: [
        AppComponent,
        BattleshipComponent,
        ReversiComponent,
        SudokuComponent,
        ChessComponent,
        GuessTheCodeComponent,
        MathGameComponent,
        PokerComponent,
        SolitaireComponent,
        HomeComponent,
        NavbarComponent,
        FooterComponent,
        LogoComponent,
        GtcBoardComponent,
        GtcSettingsComponent,
        GtcSelectComponent,
        BattleshipSettingsComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: "serverApp" }),
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
