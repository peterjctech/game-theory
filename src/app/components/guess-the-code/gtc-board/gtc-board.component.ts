import { Component, OnInit } from "@angular/core";
import { GuessTheCodeService } from "services";

@Component({
    selector: "app-gtc-board",
    templateUrl: "./gtc-board.component.html",
    styleUrls: ["./gtc-board.component.scss"],
})
export class GtcBoardComponent implements OnInit {
    constructor(public service: GuessTheCodeService) {}

    calcClassName = () => {
        return "i".repeat(Math.ceil(Math.sqrt(this.service.settings.codeLength)));
    };

    ngOnInit(): void {}
}
