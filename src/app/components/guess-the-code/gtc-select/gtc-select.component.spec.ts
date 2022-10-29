import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtcSelectComponent } from './gtc-select.component';

describe('GtcSelectComponent', () => {
  let component: GtcSelectComponent;
  let fixture: ComponentFixture<GtcSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtcSelectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtcSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
