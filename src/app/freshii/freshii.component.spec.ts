import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshiiComponent } from './freshii.component';

describe('FreshiiComponent', () => {
  let component: FreshiiComponent;
  let fixture: ComponentFixture<FreshiiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreshiiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshiiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
