import { Component, OnInit } from "@angular/core";
import { GuessTheCodeService } from "services";
import { GuessTheCodeComponent } from "../guess-the-code.component";

@Component({
    selector: "app-gtc-select",
    templateUrl: "./gtc-select.component.html",
    styleUrls: ["./gtc-select.component.scss"],
})
export class GtcSelectComponent implements OnInit {
    constructor(public service: GuessTheCodeService) {}

    ngOnInit(): void {}
}
