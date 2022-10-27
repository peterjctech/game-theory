import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArithmeticGameComponent } from './arithmetic-game.component';

describe('ArithmeticGameComponent', () => {
  let component: ArithmeticGameComponent;
  let fixture: ComponentFixture<ArithmeticGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArithmeticGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArithmeticGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
