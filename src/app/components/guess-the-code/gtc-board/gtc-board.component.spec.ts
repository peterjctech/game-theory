import { ComponentFixture, TestBed } from "@angular/core/testing";

import { GtcBoardComponent } from "./gtc-board.component";

describe("GtcBoardComponent", () => {
    let component: GtcBoardComponent;
    let fixture: ComponentFixture<GtcBoardComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [GtcBoardComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(GtcBoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
