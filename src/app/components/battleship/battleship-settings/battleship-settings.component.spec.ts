import { ComponentFixture, TestBed } from "@angular/core/testing";

import { BattleshipSettingsComponent } from "./battleship-settings.component";

describe("BattleshipSettingsComponent", () => {
    let component: BattleshipSettingsComponent;
    let fixture: ComponentFixture<BattleshipSettingsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [BattleshipSettingsComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(BattleshipSettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
