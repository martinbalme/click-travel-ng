import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDestinationComponent } from './button-destination.component';

describe('ButtonDestinationComponent', () => {
  let component: ButtonDestinationComponent;
  let fixture: ComponentFixture<ButtonDestinationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonDestinationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonDestinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
