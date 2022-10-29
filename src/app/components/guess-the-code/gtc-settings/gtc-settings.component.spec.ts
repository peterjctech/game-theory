import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GtcSettingsComponent } from './gtc-settings.component';

describe('GtcSettingsComponent', () => {
  let component: GtcSettingsComponent;
  let fixture: ComponentFixture<GtcSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GtcSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GtcSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
