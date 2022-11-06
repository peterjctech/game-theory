import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { GuessTheCodeService } from "services";

@Component({
    selector: "app-gtc-settings",
    templateUrl: "./gtc-settings.component.html",
    styleUrls: ["./gtc-settings.component.scss"],
})
export class GtcSettingsComponent implements OnInit {
    colorCount = 6;
    codeLength = 4;
    disableEmpty = false;

    update = () => {
        this.service.updateSettings({ color: this.colorCount, code: this.codeLength, empty: this.disableEmpty });
    };

    constructor(private service: GuessTheCodeService) {}

    ngOnInit(): void {}
}
