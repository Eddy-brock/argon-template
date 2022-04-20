import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterPriseComponent } from './enter-prise.component';

describe('EnterPriseComponent', () => {
  let component: EnterPriseComponent;
  let fixture: ComponentFixture<EnterPriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterPriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterPriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
