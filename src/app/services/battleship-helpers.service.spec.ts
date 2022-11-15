import { TestBed } from "@angular/core/testing";

import { BattleshipHelpersService } from "./battleship-helpers.service";

describe("BattleshipHelpersService", () => {
    let service: BattleshipHelpersService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(BattleshipHelpersService);
    });

    it("should be created", () => {
        expect(service).toBeTruthy();
    });
});
