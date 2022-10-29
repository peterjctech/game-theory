import { Component, OnInit } from "@angular/core";
import { GuessTheCodeService } from "services";

@Component({
    selector: "app-guess-the-code",
    templateUrl: "./guess-the-code.component.html",
    styleUrls: ["./guess-the-code.component.scss"],
})
export class GuessTheCodeComponent implements OnInit {
    constructor(private service: GuessTheCodeService) {}

    ngOnInit(): void {
        this.service.startGame();
    }
}
