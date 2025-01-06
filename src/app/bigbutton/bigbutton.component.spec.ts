import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigbuttonComponent } from './bigbutton.component';

describe('BigbuttonComponent', () => {
  let component: BigbuttonComponent;
  let fixture: ComponentFixture<BigbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BigbuttonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BigbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
