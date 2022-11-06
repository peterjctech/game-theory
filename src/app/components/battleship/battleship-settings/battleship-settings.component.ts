import { Component, OnInit } from "@angular/core";
import { BattleshipService } from "services";

@Component({
    selector: "app-battleship-settings",
    templateUrl: "./battleship-settings.component.html",
    styleUrls: ["./battleship-settings.component.scss"],
})
export class BattleshipSettingsComponent implements OnInit {
    quickStart = () => {
        this.service.generateGridDetails();
        this.service.autoGenerate("ally");
        this.service.autoGenerate("enemy");
        this.service.initPhaseFour();
    };
    constructor(public service: BattleshipService) {}
    ngOnInit(): void {}
}
