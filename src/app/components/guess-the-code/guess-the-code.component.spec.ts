import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuessTheCodeComponent } from './guess-the-code.component';

describe('GuessTheCodeComponent', () => {
  let component: GuessTheCodeComponent;
  let fixture: ComponentFixture<GuessTheCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuessTheCodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuessTheCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
