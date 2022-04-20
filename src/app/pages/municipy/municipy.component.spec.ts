import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MunicipyComponent } from './municipy.component';

describe('MunicipyComponent', () => {
  let component: MunicipyComponent;
  let fixture: ComponentFixture<MunicipyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MunicipyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MunicipyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
