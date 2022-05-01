import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EinsteinsComponent } from './einsteins.component';

describe('EinsteinsComponent', () => {
  let component: EinsteinsComponent;
  let fixture: ComponentFixture<EinsteinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EinsteinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EinsteinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
