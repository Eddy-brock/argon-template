import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseCashComponent } from './enterprise-cash.component';

describe('EnterpriseCashComponent', () => {
  let component: EnterpriseCashComponent;
  let fixture: ComponentFixture<EnterpriseCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseCashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterpriseCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
